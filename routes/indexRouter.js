const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("home/index", { title: "Club Manager" });
});

module.exports = indexRouter;
