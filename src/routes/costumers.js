const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const costumers = await User.find({ type: "Cliente" });
    res.status(201).json(costumers);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/:email", async (req, res) => {
  try {
    const foundCostumer = await User.find({
      email: req.params.email,
      type: "Cliente",
    });
    res.send(foundCostumer);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    type: "Cliente",
    plan: req.body.plan,
    started: req.body.started,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put("/:id", getUsers, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.password != null) {
    res.user.password = req.body.password;
  }
  if (req.body.type != null) {
    res.user.type = req.body.type;
  }
  if (req.body.plan != null) {
    res.user.plan = req.body.plan;
  }
  if (req.body.started != null) {
    res.user.started = req.body.started;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.delete("/:id", getUsers, async (req, res) => {
  try {
    await res.user.delete();
    res.json({ message: "Costumer removed" });
  } catch (err) {
    res.status(404).json({ message: "Costumer not found" });
  }
});

async function getUsers(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
  } catch (err) {
    res.status(404).json({ message: err });
  }

  res.user = user;
  next();
}

module.exports = router;
