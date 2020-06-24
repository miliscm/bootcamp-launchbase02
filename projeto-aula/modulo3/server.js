// começando o servidor

const express = require("express");
const nunjucks = require("nunjucks");

//
const server = express();
//busca o array que criei
const videos = require("./data");
//após a criação da pasta public configuro onde pegar os arquivos statics
server.use(express.static("public"));
//configuracao da template engine
server.set("view engine", "njk");
nunjucks.configure("views", {
  express: server,
  autoescape: false,
});
//criando a pasta view dentro da pasta e colocando o index la, preciso configurar isso
//isso são rotas
server.get("/", function (req, res) {
  const sobre = {
    avatar_url:
      "https://avatars3.githubusercontent.com/u/43863263?s=460&u=4c77a6cfa5561f1aff9844629df2381ae7f36db2&v=4",
    name: "Milena Mocci",
    role: "Desenvolvedora - Full-Stack",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis officia corporis minima incidunt, doloremque quod!",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/miliscm",
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/milenacalixtomocci/",
      },
      {
        name: "Instagram",
        url: "https://instagram.com/milenamocci",
      },
    ],
  };
  return res.render("sobre", { sobre });
});
server.get("/classes", function (req, res) {
  return res.render("classes", { items: videos });
});
server.listen(5000, function () {
  console.log("server ok");
});
