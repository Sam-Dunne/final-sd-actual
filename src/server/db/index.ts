import * as mysql from 'mysql';
import { MySQLResponse } from '../../interfaces'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'finalexam',
    database: 'finalexam',
    password: 'finalexam',
});

export const Query = <T = MySQLResponse>(queries: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        pool.query(queries, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results)
            }
        })
    })
};

import books from './books';
import categories from './categories';
import users from './users';

export default {
    books,
    categories,
    users
};