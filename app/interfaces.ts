import { Connection } from "mysql";
import Router from 'koa-router';

export interface DbConfig {
  connectionLimit: number,
  host: string,
  user: string,
  password: string,
  database: string
}

export interface NewHotel {
  name: string,
  description: string,
  rating: number,
  coords: string
}

export interface HotelHandlers {
  getAllHotels: () => Promise<RequestResponse>,
  getHotelById: (id: string) => Promise<RequestResponse>,
  createHotel: (params: NewHotel) => Promise<RequestResponse>
}

export interface RequestResponse {
  result: any,
  status: number,
}

export interface IDatabase {
  query: Function,
  close: Function,
  connection: Connection
}

export interface DbSettings {
  connectionLimit: number,
  host: string,
  user: string,
  password: string,
  database: string
}

export interface ServiceSettings {
  name: string,
  port: number,
  db: DbSettings
}

export interface Handlers {
  db: DBHandlers,
  settings: ServiceSettings
}

export interface DBHandlers {
  mongo: IDatabase
}

export type getRouter = (connection: any, router: Router) => Router;
export type getHandlers = <T>(settings: Handlers) => T;
