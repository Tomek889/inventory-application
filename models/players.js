const pool = require("../db/db");

async function getAllPlayers() {
  const result = await pool.query("SELECT * FROM players");
  return result.rows;
}

async function getPlayerById(id) {
  const result = await pool.query("SELECT * FROM player WHERE id = $1", [id]);
  return result.rows[0];
}

module.exports = {
  getAllPlayers,
  getPlayerById,
};
