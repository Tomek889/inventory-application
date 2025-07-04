const { Router } = require("express");
const playersRouter = Router();
const playersDB = require("../models/players");
const clubsDB = require("../models/clubs");

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

playersRouter.get("/new", async (req, res) => {
  const clubs = await clubsDB.getAllClubs();
  res.render("players/create", { title: "Add New Player", clubs: clubs });
});

playersRouter.post("/", async (req, res) => {
  try {
    const { name, position, age, club_id } = req.body;
    await playersDB.createPlayer({ name, position, age, club_id });
    res.redirect("/players");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating player");
  }
});

playersRouter.get("/:id/edit", async (req, res) => {
  try {
    const player = await playersDB.getPlayerById(req.params.id);
    const clubs = await clubsDB.getAllClubs();
    if (!player) {
      return res.status(404).send("Player not found");
    }
    res.render("players/edit", {
      title: "Edit Player",
      player: player,
      clubs: clubs,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching player");
  }
});

playersRouter.post("/:id", async (req, res) => {
  try {
    const { name, position, age, club_id } = req.body;
    await playersDB.editPlayer({
      id: req.params.id,
      name: name,
      position: position,
      age: age,
      club_id: club_id,
    });
    res.redirect("/players");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error editing player");
  }
});

playersRouter.post("/:id/delete", async (req, res) => {
  try {
    await playersDB.deletePlayer(req.params.id);
    res.redirect("/players");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting player");
  }
});

module.exports = playersRouter;
