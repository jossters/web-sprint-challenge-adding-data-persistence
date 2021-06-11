const express = require("express");

const projectRouter = require("../api/project/router");
const resourceRouter = require("../api/resource/router");
const taskRouter = require("../api/task/router");

const server = express();

server.use(express.json());

server.use("/api", projectRouter);
server.use("/api", resourceRouter);
server.use("/api", taskRouter);

server.use((err, req, res, next /*eslint-disable-line*/) => {
  res.status(res.status || 500).json({
    notes: "problem.",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;