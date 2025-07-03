const { Router } = require("express");
const clubsRouter = Router();

clubsRouter.get("/", (req, res) => {
  res.send("clubs");
});

module.exports = clubsRouter;
