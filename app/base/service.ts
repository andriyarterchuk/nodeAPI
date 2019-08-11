import Koa from "koa";
import Database from "../db";
import bodyParser from 'koa-bodyparser';
const koaRouter = require('koa-router')();
import { DbConfig, getRouter, ServiceSettings, Handlers } from '../interfaces'

export default class BaseService {
  public name: string;
  public app: Koa;
  public handlers: Handlers;
  public settingsService: ServiceSettings;
  constructor(settings: any, name: string) {
    this.settingsService = settings[name];
    this.name = name;
    this.handlers = {};
    this.app = new Koa();
  }

  useMySQL(settings: DbConfig): BaseService {
    this.handlers = {
      ...this.handlers,
      db: {
        ...(
          this.handlers && this.handlers.db && {
            ...this.handlers.db
          }),
        mongo: new Database(settings)
      }
    }
    return this;
  }

  useBodyParser(): BaseService {
    this.app.use(bodyParser());
    return this;
  }

  useRouter(getRouter: getRouter): BaseService {
    const router = getRouter(this.handlers, koaRouter);
    this.app.use(router.routes());
    return this;
  }

  listen() {
    this.app.listen(this.settingsService.port, () => console.log(`${this.name} started on port: ${this.settingsService.port}`));
  }
}
