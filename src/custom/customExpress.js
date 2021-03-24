{
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

module.exports = () => {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", (error) => console.log(`[INFO]: ${error}`));
  db.once("open", () => console.log("[INFO]: Connected to database!"));

  app.use(express.json());
  app.use(cors());
  const userRoute = require("../routes/users.js");
  const costumerRoute = require("../routes/costumers");
  const planRoute = require("../routes/plans");
  const defaultRoute = require("../routes/default");
  const employeesRoute = require("../routes/employees");
  app.use("/users", userRoute);
  app.use("/costumers", costumerRoute);
  app.use("/employees", employeesRoute);
  app.use("/plans", planRoute);

  app.use("/", defaultRoute);

  return app;
};
