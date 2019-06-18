import { Connection } from "mysql";
import Router from 'koa-router';

export interface DbConfig {
  connectionLimit: number,
  host: string,
  user: string,
  password: string,
  database: string
}

export type getRouter = (connection: Connection, router: Router) => Router;
export type getHandlers = (connection: Connection) => object;
