const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("inventory app");
});

indexRouter.get("/clubs", (req, res) => {
  res.send("clubs");
});

indexRouter.get("/players", (req, res) => {
  res.send("players");
});

indexRouter.get("/coaches", (req, res) => {
  res.send("coaches");
});

module.exports = indexRouter;
