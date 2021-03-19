const User = require("../models/user");
const express = require("express");
const route = express.Router();

route.get("", (req, res) => {
  res.send("<h1>Bem vindo ao nosso backend!</h1>");
});

module.exports = route;
