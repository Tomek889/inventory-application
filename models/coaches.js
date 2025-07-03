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

async function createCoach({ name, role, age, club_id }) {
  await pool.query(
    "INSERT INTO coaches (name, role, age, club_id) VALUES ($1, $2, $3, $4)",
    [name, role, age, club_id]
  );
}

async function deleteCoach(id) {
  await pool.query("DELETE FROM coaches WHERE id = $1", [id]);
}

async function editCoach({ id, name, role, age, club_id }) {
  await pool.query(
    "UPDATE coaches SET name = $2, role = $3, age = $4, club_id = $5 WHERE id = $1",
    [id, name, role, age, club_id]
  );
}

module.exports = {
  getNumOfAllCoaches,
  getAllCoaches,
  getCoachById,
  createCoach,
  deleteCoach,
  editCoach,
};
