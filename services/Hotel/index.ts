// import router from "BaseService/rest/router";

// router.get("/", async (ctx, next) => {
//   ctx.body = "Hello World";
// });

// export default router;

const Koa = require('koa');
const app = new Koa();

app.use(async function(ctx) {
  ctx.body = JSON.stringify([{name: 'test'}]);
  ctx.status = 200;
});

app.listen(3000, () => console.log('started'));