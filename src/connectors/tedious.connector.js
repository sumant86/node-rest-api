import * as Tedious from 'tedious';
import { config as envConfig } from 'dotenv';
envConfig({ path: 'src/.env' });
const config = {
    server: process.env['MSSQL_HOST'],
    options: {
        database: process.env['MSSQL_DB_NAME'],
        encrypt: false,
        enableArithAbort: false,
        trustServerCertificate: false,
        rowCollectionOnRequestCompletion: true,
    },
    authentication: {
        type: 'default',
        options: {
            userName: process.env['MSSQL_USER'],
            password: process.env['MSSQL_PASS'],
        },
    },
};
const connection = new Tedious.connect(config);
connection.on('connect', (error) => {
    if (error) throw error;
    console.log('Successfully connected Tedious Adaptar.');
});
function query(sql) {
    return new Promise((resolve, reject) => {
        const request = new Tedious.Request(sql, (err) => {
            if (err) return reject(err);
        });
        var result = [];
        request.on('row', (columns) => {
            let r = {};
            columns.forEach(function (column) {
                r[column.metadata.colName] = column.value;
            });
            result.push(r);
            resolve(result);
        });
        connection.execSql(request);
    });
}
export const tediousConnector = {
    query,
};
