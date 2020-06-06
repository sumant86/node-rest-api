import * as mysql from 'mysql';
import { config as envConfig } from 'dotenv';
envConfig({ path: 'src/.env' });
const config = {
    host: process.env['MYSQL_HOST'],
    user: process.env['MYSQL_USER'],
    password: process.env['MYSQL_PASS'],
    database: process.env['MYSQL_DB_NAME'],
};
const connection = mysql.createConnection(config);
// open the MySQL connection
connection.connect((error) => {
    if (error) throw error;
    console.log('Successfully connected MySQL Adaptar.');
});
function query(sql, args) {
    return new Promise((resolve, reject) => {
        connection.query(sql, args, (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}
export const mysqlConnector = {
    query,
};
