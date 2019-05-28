import Koa from "koa";

const app = new Koa();

app.use(async function(ctx) {
  ctx.body = JSON.stringify([{ name: "profile" }]);
  ctx.status = 200;
});

app.listen(3001, () => console.log("started"));
