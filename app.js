const express = require("express");
const pool = require("./db/db");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("inventory application");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
