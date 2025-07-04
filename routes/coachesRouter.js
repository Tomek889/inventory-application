const { Router } = require("express");
const coachesRouter = Router();
const coachesDB = require("../models/coaches");
const clubsDB = require("../models/clubs");

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

coachesRouter.get("/new", async (req, res) => {
  const clubs = await clubsDB.getAllClubs();
  res.render("coaches/create", { title: "Add New Coach", clubs: clubs });
});

coachesRouter.post("/", async (req, res) => {
  try {
    const { name, role, age, club_id } = req.body;
    await coachesDB.createCoach({ name, role, age, club_id });
    res.redirect("/coaches");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating coach");
  }
});

coachesRouter.get("/:id/edit", async (req, res) => {
  try {
    const coach = await coachesDB.getCoachById(req.params.id);
    const clubs = await clubsDB.getAllClubs();
    if (!coach) {
      return res.status(404).send("Coach not found");
    }
    res.render("coaches/edit", {
      title: "Edit Coach",
      coach: coach,
      clubs: clubs,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching coach");
  }
});

coachesRouter.post("/:id", async (req, res) => {
  try {
    const { name, role, age, club_id } = req.body;
    await coachesDB.editCoach({
      id: req.params.id,
      name: name,
      role: role,
      age: age,
      club_id: club_id,
    });
    res.redirect("/coaches");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error editing coach");
  }
});

coachesRouter.post("/:id/delete", async (req, res) => {
  try {
    await coachesDB.deleteCoach(req.params.id);
    res.redirect("/coaches");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting coach");
  }
});

module.exports = coachesRouter;
