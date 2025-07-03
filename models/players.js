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
  const result = await pool.query("SELECT * FROM player WHERE id = $1", [id]);
  return result.rows[0];
}

module.exports = {
  getNumOfAllPlayers,
  getAllPlayers,
  getPlayerById,
};
