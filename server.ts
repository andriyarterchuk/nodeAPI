import express = require("express");
const app: express.Application = express();

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
