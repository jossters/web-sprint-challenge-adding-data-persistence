const yup = require("yup");

const projectSchema = yup.object({
  project_name: yup.string().trim().required(),
  project_description: yup.string().trim(),
  project_completed: yup.boolean(),
});

module.exports = { projectSchema };