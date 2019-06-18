import mysql from 'mysql';
import { DbConfig } from './interfaces';

class Database {
  connection: mysql.Connection;
  constructor(config: DbConfig) {
    this.connection = mysql.createConnection(config);
  }
  query(sql: string, args: Array<string | number>) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err: any, rows: any) => {
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end((err: mysql.MysqlError) => {
        if (err)
          return reject(err);
        resolve();
      });
    });
  }
}
export default Database;