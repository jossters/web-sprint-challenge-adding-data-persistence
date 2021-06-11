const { projectSchema } = require("../schemaValidation");

const validateProject = async (req, res, next) => {
  try {
    req.body = await projectSchema.validate(req.body, {
      stripUnknown: true,
    });
    next();
  } catch (err) {
    next({ status: 400, message: "invalid scheme_name" });
  }
};

module.exports = { validateProject };