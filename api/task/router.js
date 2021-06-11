const router = require("express").Router();
const Tasks = require("./model");

router.get("/tasks", (req, res, next) => {
  Tasks.get()
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(next);
});

router.post("/tasks", (req, res, next) => {
  Tasks.create(req.body)
    .then((newTask) => {
      res.status(201).json(newTask);
    })
    .catch(next);
});
module.exports = router;
