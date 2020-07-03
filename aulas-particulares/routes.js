const express = require("express");
const routes = express.Router();

routes.get("/", function (res, req) {
  return res.redirect("/teachers");
});
routes.get("/teachers", function (req, res) {
  return res.render("/teachers");
});
routes.get("/students", function () {
  return res.render("students");
});

module.exports = routes;
