const db = require("../../data/dbConfig");

module.exports = { get, create };

async function get() {
  const result = await db
    .select("t.*", "p.*")
    .from("tasks as t")
    .join("projects as p", "t.project_id", "=", "p.project_id");
  result.forEach((element) => {
    element.task_completed = element.task_completed === 1 ? true : false;
  });
  return result;
}

async function create(post) {
  const [task_id] = await db("tasks").insert(post);
  const result = await db
    .select(
      "project_name",
      "project_description",
      "task_description",
      "task_completed",
      "task_notes"
    )
    .from("tasks as t")
    .join("projects as p", "t.project_id", "=", "p.project_id")
    .where("t.task_id", task_id)
    .first();
  result.task_completed = result.task_completed === 1 ? true : false;
  return result;
}
