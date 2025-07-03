const { Router } = require("express");
const coachesRouter = Router();

coachesRouter.get("/", (req, res) => {
  res.send("coaches");
});

module.exports = coachesRouter;
