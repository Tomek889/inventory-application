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

clubsRouter.get("/new", (req, res) => {
  res.render("clubs/create", { title: "Add New Club" });
});

clubsRouter.post("/", async (req, res) => {
  try {
    const { name, founded_year, stadium_name, country } = req.body;
    await clubsDB.createClub({ name, founded_year, stadium_name, country });
    res.redirect("/clubs");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating club");
  }
});

clubsRouter.get("/:id/edit", async (req, res) => {
  try {
    const club = await clubsDB.getClubById(req.params.id);
    if (!club) {
      return res.status(404).send("Club not found");
    }
    res.render("clubs/edit", { title: "Edit Club", club: club });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching club");
  }
});

clubsRouter.post("/:id", async (req, res) => {
  try {
    const { name, founded_year, stadium_name, country } = req.body;
    await clubsDB.editClub({
      id: req.params.id,
      name: name,
      founded_year: founded_year,
      stadium_name: stadium_name,
      country: country,
    });
    res.redirect("/clubs");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error editing club");
  }
});

clubsRouter.post("/:id/delete", async (req, res) => {
  try {
    await clubsDB.deleteClub(req.params.id);
    res.redirect("/clubs");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting club");
  }
});

module.exports = clubsRouter;
