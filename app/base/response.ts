import { RequestResponse } from '../interfaces';
import { RouterContext } from 'koa-router';

// const setBody = (body: any) => {
//   this.ctx.body = body;
// }

// const setStatus(status: number) {
//   this.ctx.status = status;
// }


export default (ctx: RouterContext, response: RequestResponse) => {
  ctx.body = response.result;
  ctx.status = response.status;
}
