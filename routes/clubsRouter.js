const { Router } = require("express");
const clubsRouter = Router();
const clubsDB = require("../models/clubs");

clubsRouter.get("/", async (req, res) => {
  try {
    const clubs = await clubsDB.getAllClubs();
    res.render("clubs/index", {
      title: "Club Manager - Clubs",
      clubs: clubs,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching clubs");
  }
});

module.exports = clubsRouter;
