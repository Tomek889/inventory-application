const pool = require("../db/db");

async function getNumOfAllPlayers() {
  const result = await pool.query("SELECT COUNT(*) FROM players");
  return parseInt(result.rows[0]?.count || 0);
}

async function getAllPlayers() {
  const result = await pool.query("SELECT * FROM players");
  return result.rows;
}

async function getPlayerById(id) {
  const result = await pool.query("SELECT * FROM players WHERE id = $1", [id]);
  return result.rows[0];
}

async function createPlayer({ name, position, age, club_id }) {
  await pool.query(
    "INSERT INTO players (name, position, age, club_id) VALUES ($1, $2, $3, $4)",
    [name, position, age, club_id]
  );
}

async function deletePlayer(id) {
  await pool.query("DELETE FROM players WHERE id = $1", [id]);
}

async function editPlayer({ id, name, position, age, club_id }) {
  await pool.query(
    "UPDATE players SET name = $2, position = $3, age = $4, club_id = $5 WHERE id = $1",
    [id, name, position, age, club_id]
  );
}

module.exports = {
  getNumOfAllPlayers,
  getAllPlayers,
  getPlayerById,
  createPlayer,
  deletePlayer,
  editPlayer,
};
