import * as Sql from 'mssql';
import { config as envConfig } from 'dotenv';
envConfig({ path: 'src/.env' });
const config = {
    server: process.env['MSSQL_HOST'],
    database: process.env['MSSQL_DB_NAME'],
    user: process.env['MSSQL_USER'],
    password: process.env['MSSQL_PASS'],
};
const connection = new Sql.connect(config, (err) => {
    if (err) throw err;
    console.log('Successfully connected SQL Adaptar.');
});

function query(sql) {
    return new Promise((resolve, reject) => {
        connection.request().query(sql, (err, rows) => {
            if (err) return reject(err);
            connection.close();
            resolve(rows.recordset);
        });
    });
}
export const mssqlConnector = {
    query,
};
