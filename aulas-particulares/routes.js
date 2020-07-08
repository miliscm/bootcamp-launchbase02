const express = require("express");
const routes = express.Router();
const instructors = require("./teachers");

routes.get("/", function (req, res) {
  return res.redirect("/teachers");
});
routes.get("/teachers", function (req, res) {
  return res.render("teachers/index");
});
routes.get("/students", function (req, res) {
  return res.render("students");
});
routes.get("/teachers/create", function (req, res) {
  return res.render("teachers/create");
});
routes.post("/teachers", instructors.post);

module.exports = routes;
