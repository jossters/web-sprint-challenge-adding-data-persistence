const projects = [
  {
    project_name: "project1",
    project_description: "project1 description",
  },
  {
    project_name: "project2",
    project_description: "project2 description",
  },
  {
    project_name: "project3",
    project_description: "project3 description",
  },
  {
    project_name: "project4",
    project_description: "project4 description",
  },
  {
    project_name: "project5",
    project_description: "project5 description",
  },
];
exports.seed = function (knex) {
  return knex("projects").insert(projects);
};

