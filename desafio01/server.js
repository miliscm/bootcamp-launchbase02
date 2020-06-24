const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
//setar minha view engine
server.use(express.static("public"));

server.set("view engine", "njk");
nunjucks.configure("view", {
  express: server,
});
//criando rotas
server.get("/", function (req, res) {
  return res.render("sobre");
});
server.get("/conteudos", function (req, res) {
  return res.render("conteudos");
});
server.use(function (req, res) {
  res.status(404).render("not-found");
});
//iniciando o server
server.listen(5000, function () {
  console.log("oi");
});
