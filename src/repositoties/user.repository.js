import { tediousConnector } from '../connectors';
import { mssqlConnector } from '../connectors';
import { mysqlConnector } from '../connectors';

function getUser(id) {
    // return mysqlConnector.query("SELECT * FROM users where id ='" + id + "'");//need to handel sql-injction
    return tediousConnector.query("SELECT * FROM users where id ='" + id + "'"); //need to handel sql-injction
    // return mssqlConnector.query("SELECT * FROM users where id ='" + id + "'");//need to handel sql-injction
}

function getUsers() {
    // return mysqlConnector.query("SELECT * FROM users");
    return tediousConnector.query('SELECT * FROM users');
    // return mssqlConnector.query("SELECT * FROM users");
}

export const userRepository = {
    getUser,
    getUsers,
};
