const pool = require("../db/db");

async function getNumOfAllClubs() {
  const result = await pool.query("SELECT COUNT(*) FROM clubs");
  return parseInt(result.rows[0]?.count || 0);
}

async function getAllClubs() {
  const result = await pool.query("SELECT * FROM clubs");
  return result.rows;
}

async function getClubById(id) {
  const result = await pool.query("SELECT * FROM clubs WHERE id = $1", [id]);
  return result.rows[0];
}

async function createClub({ name, founded_year, stadium_name, country }) {
  await pool.query(
    "INSERT INTO clubs (name, founded_year, stadium_name, country) VALUES ($1, $2, $3, $4)",
    [name, founded_year, stadium_name, country]
  );
}

async function deleteClub(id) {
  await pool.query("DELETE FROM clubs WHERE id = $1", [id]);
}

async function editClub({ id, name, founded_year, stadium_name, country }) {
  await pool.query(
    "UPDATE clubs SET name = $2, founded_year = $3, stadium_name = $4, country = $5 WHERE id = $1",
    [id, name, founded_year, stadium_name, country]
  );
}

module.exports = {
  getNumOfAllClubs,
  getAllClubs,
  getClubById,
  createClub,
  deleteClub,
  editClub,
};
