import { mysqlAdaptar, tediousAdaptar, mssqlAdaptar } from '../connectors';

function getUser(id) {
    // return mysqlAdaptar.query("SELECT * FROM users where id ='" + id + "'");//need to handel sql-injction
    return tediousAdaptar.query("SELECT * FROM users where id ='" + id + "'"); //need to handel sql-injction
    // return mssqlAdaptar.query("SELECT * FROM users where id ='" + id + "'");//need to handel sql-injction
}

function getUsers() {
    // return mysqlAdaptar.query("SELECT * FROM users");
    return tediousAdaptar.query('SELECT * FROM users');
    // return mssqlAdaptar.query("SELECT * FROM users");
}

export const userRepository = {
    getUser,
    getUsers,
};
