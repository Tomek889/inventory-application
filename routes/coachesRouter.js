const { Router } = require("express");
const coachesRouter = Router();
const coachesDB = require("../models/coaches");

coachesRouter.get("/", async (req, res) => {
  try {
    const coaches = await coachesDB.getAllCoaches();
    res.render("coaches/index", {
      title: "Club Manager - Coaches",
      coaches: coaches,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching coaches");
  }
});

module.exports = coachesRouter;
