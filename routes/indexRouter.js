const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("inventory app");
});

module.exports = indexRouter;
