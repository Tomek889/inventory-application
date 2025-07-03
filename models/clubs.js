const pool = require("../db/db");

async function getAllClubs() {
  const result = await pool.query("SELECT * FROM clubs");
  return result.rows;
}

async function getClubById(id) {
  const result = await pool.query("SELECT * FROM clubs WHERE id = $1", [id]);
  return result.rows[0];
}

module.exports = {
  getAllClubs,
  getClubById,
};
