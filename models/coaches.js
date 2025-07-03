const pool = require("../db/db");

async function getAllCoaches() {
  const result = await pool.query("SELECT * FROM coaches");
  return result.rows;
}

async function getCoachById(id) {
  const result = await pool.query("SELECT * FROM coaches WHERE id = $1", [id]);
  return result.rows[0];
}

module.exports = {
  getAllCoaches,
  getCoachById,
};
