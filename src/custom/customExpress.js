const express = require("express");
const app = express();
const routeUsers = require("../routes/users");
const routeCostumers = require("../routes/costumers");
const routePlans = require("../routes/plans");

routeUsers(app);
routeCostumers(app);
routePlans(app);

module.exports = () => {
  return app;
};
