const { Router } = require("express");
const playersRouter = Router();

playersRouter.get("/", (req, res) => {
  res.send("players");
});

module.exports = playersRouter;
