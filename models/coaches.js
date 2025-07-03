const pool = require("../db/db");

async function getNumOfAllCoaches() {
  const result = await pool.query("SELECT COUNT(*) FROM coaches");
  return parseInt(result.rows[0]?.count || 0);
}

async function getAllCoaches() {
  const result = await pool.query("SELECT * FROM coaches");
  return result.rows;
}

async function getCoachById(id) {
  const result = await pool.query("SELECT * FROM coaches WHERE id = $1", [id]);
  return result.rows[0];
}

module.exports = {
  getNumOfAllCoaches,
  getAllCoaches,
  getCoachById,
};
