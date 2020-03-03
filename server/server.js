const express = require("express");
const configMiddleware = require("./api/middleware/middleware-config");
const apiRouter = require("./api/api-router");
const server = express();

configMiddleware(server);

server.use("/api", apiRouter);

module.exports = server;
