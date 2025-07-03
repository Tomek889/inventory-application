const { Router } = require("express");
const playersRouter = Router();
const playersDB = require("../models/players");

playersRouter.get("/", async (req, res) => {
  try {
    const players = await playersDB.getAllPlayers();
    res.render("players/index", {
      title: "Club Manager - Players",
      players: players,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching players");
  }
});

module.exports = playersRouter;
