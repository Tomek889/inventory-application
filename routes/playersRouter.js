const { Router } = require("express");
const playersRouter = Router();
const playersDB = require("../models/players");

playersRouter.get("/", async (req, res) => {
  res.send("players");
});

module.exports = playersRouter;
