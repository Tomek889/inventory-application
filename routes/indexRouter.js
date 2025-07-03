const { Router } = require("express");
const indexRouter = Router();
const clubsDB = require("../models/clubs");
const coachesDB = require("../models/coaches");
const playersDB = require("../models/players");

indexRouter.get("/", async (req, res) => {
  try {
    const clubsStat = await clubsDB.getNumOfAllClubs();
    const coachesStat = await coachesDB.getNumOfAllCoaches();
    const playersStat = await playersDB.getNumOfAllPlayers();
    res.render("home/index", {
      title: "Club Manager",
      clubsStat: clubsStat,
      coachesStat: coachesStat,
      playersStat: playersStat,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  }
});

module.exports = indexRouter;
