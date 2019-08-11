import Koa from "koa";
import Database from "../db";
import bodyParser from 'koa-bodyparser';
const koaRouter = require('koa-router')();
import { DbConfig, getRouter, getHandlers, ServiceSettings, Handlers } from '../interfaces'

export default class BaseService {
  public name: string;
  public app: Koa;
  // public settingsService: Handlers;
  public settingsService: any; //temp
  constructor(settings: any, name: string) {
    this.settingsService = settings[name];
    this.name = name;
    this.settingsService = {
      settings: settings[name],
      db: {
        mongo: null
      }
    };
    this.app = new Koa();
  }

  useMySQL(settings: DbConfig): BaseService {
    this.settingsService.db.mongo = new Database(settings);
    return this;
  }

  useBodyParser(): BaseService {
    this.app.use(bodyParser());
    return this;
  }

  useRouter(controller: any, getRouter: getRouter): BaseService { //temp 'any'
    const handlers = controller(this.settingsService);
    const router = getRouter(handlers, koaRouter);
    this.app.use(router.routes());
    return this;
  }

  listen() {
    this.app.listen(this.settingsService.settings.port, () => console.log(`${this.name} started on port: ${this.settingsService.settings.port}`));
  }
}
