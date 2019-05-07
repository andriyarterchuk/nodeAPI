"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const app = new koa_1.default();
app.use(async function (ctx) {
    ctx.body = JSON.stringify([{ name: "auth" }]);
    ctx.status = 200;
});
app.listen(3000, () => console.log("started"));
//# sourceMappingURL=index.js.map