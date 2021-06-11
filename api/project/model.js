const db = require("../../data/dbConfig");

module.exports = { get, create };

async function get() {
  const result = await db("projects");
  result.forEach((element) => {
    element.project_completed = element.project_completed === 1 ? true : false;
  });
  return result;
}

async function create(post) {
  const [project_id] = await db("projects").insert(post);
  const result = await db("projects").where({ project_id }).first();
  result.project_completed = result.project_completed === 1 ? true : false;
  return result;
}