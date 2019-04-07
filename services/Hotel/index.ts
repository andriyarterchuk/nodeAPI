import router from "BaseService/rest/router";

router.get("/", async (ctx, next) => {
  ctx.body = "Hello World";
});

export default router;
