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

coachesRouter.get("/new", (req, res) => {
  res.render("coaches/create", { title: "Add New Coach" });
});

coachesRouter.post("/", async (req, res) => {
  try {
    const { name, role, age, club_id } = req.body;
    await clubsDB.createClub({ name, founded_year, stadium_name, country });
    res.redirect("clubs");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating club");
  }
});

coachesRouter.get("/:id/edit", async (req, res) => {
  try {
    const club = await clubsDB.getClubById(req.params.id);
    if (!club) {
      return res.status(404).send("Club not found");
    }
    res.render("clubs/edit", { title: "Edit club", club: club });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching club");
  }
});

coachesRouter.post("/:id", async (req, res) => {
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
  } catch (err) {}
  res.redirect("/");
});

coachesRouter.post("/:id/delete", async (req, res) => {
  try {
    await clubsDB.deleteClub(req.params.id);
    res.redirect("/clubs");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting club");
  }
});

module.exports = coachesRouter;
