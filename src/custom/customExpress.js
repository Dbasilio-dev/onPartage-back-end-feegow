const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

module.exports = () => {
  mongoose.connect("mongodb://localhost/partage", { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on("error", (error) => console.log(`[INFO]: ${error}`));
  db.once("open", () => console.log("[INFO]: Connected to database!"));

  app.use(express.json());
  app.use(cors());
  const userRoute = require("../routes/users.js");
  const costumerRoute = require("../routes/costumers");
  const planRoute = require("../routes/plans");
  app.use("/users", userRoute);
  app.use("/costumers", costumerRoute);
  app.use("/plans", planRoute);

  return app;
};
