const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("./db.json");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

server.use(router);

server.listen(3001, () => {
  console.log("Running fake API Server at http://localhost:3001");
});
