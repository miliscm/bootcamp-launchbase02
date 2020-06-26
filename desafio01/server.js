const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const contents = require("./data");
//setar minha view engine
server.use(express.static("public"));

server.set("view engine", "njk");
nunjucks.configure("view", {
  express: server,
  noCache: true,
  autoescape: true,
});
//criando rotas
server.get("/", function (req, res) {
  const sobre = {
    imglogo: "logo-rocketseat.png",
    namecompany: "Rocketseat",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint doloremque commodi quis. Rerum veritatis odio explicabo ipsum voluptatum delectus fuga, animi aperiam similique est cumque. Harum iste sequi autem.",
    subtitle: "Principais Tecnologias",
    imgtec: [
      { nameimg: "curso-nodejs.svg", titletec: "NodeJS" },
      { nameimg: "curso-javascript.svg", titletec: "Javascript" },
      { nameimg: "curso-reactjs.svg", titletec: "ReactJs" },
      { nameimg: "curso-react-native.svg", titletec: "ReactNative" },
    ],
  };
  return res.render("sobre", { sobre });
});
server.get("/conteudos", function (req, res) {
  return res.render("conteudos", { itens: contents });
});
// server.use(function (req, res) {
//   res.status(404).render("not-found");
// });
server.get("/courses/:id", function (req, res) {
  const id = req.params.id;
  const course = contents.find(function (course) {
    if (course.id == id) {
      return true;
    }
  });
  if (!course) {
    return res.send("course not found");
  }
  return res.render("course", { item: course });
});

//iniciando o server
server.listen(5000, function () {
  console.log("oi");
});
