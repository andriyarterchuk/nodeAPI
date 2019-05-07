import Koa from "koa";

const app = new Koa();

app.use(async function(ctx) {
  ctx.body = JSON.stringify([{ name: "auth" }]);
  ctx.status = 200;
});

app.listen(3000, () => console.log("started"));
