import Koa from "koa";
import Database from "../db";
import bodyParser from 'koa-bodyparser';
const koaRouter = require('koa-router')();
import { DbConfig, getRouter } from '../interfaces'

export default class BaseService {
  public name: string;
  public app: Koa;
  public connection: any;
  public settingsService: any;
  constructor(settings: any, name: string) {
    this.settingsService = settings[name];
    this.name = name;
    this.app = new Koa();
  }

  useMySQL(settings: DbConfig) {
    this.connection = new Database(settings);
  }

  useBodyParser() {
    this.app.use(bodyParser());
  }

  useRouter(getRouter: getRouter) {
    const router = getRouter(this.connection, koaRouter);
    this.app.use(router.routes());
  }

  listen() {
    this.app.listen(this.settingsService.port, () => console.log(`${this.name} started on port: ${this.settingsService.port}`));
  }
}
