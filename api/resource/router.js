const router = require("express").Router();
const Resources = require("./model");

router.get("/resources", (req, res, next) => {
  Resources.get()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post("/resources", (req, res, next) => {
  Resources.create(req.body)
    .then((newResource) => {
      res.status(201).json(newResource);
    })
    .catch(next);
});

module.exports = router;
