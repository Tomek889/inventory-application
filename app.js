const express = require("express");
const app = express();
const path = require("path");
const indexRouter = require("./routes/indexRouter");
const playersRouter = require("./routes/playersRouter");
const coachesRouter = require("./routes/coachesRouter");
const clubsRouter = require("./routes/clubsRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/players", playersRouter);
app.use("/coaches", coachesRouter);
app.use("/clubs", clubsRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
