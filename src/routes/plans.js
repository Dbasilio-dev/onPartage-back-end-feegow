const express = require("express");
const router = express.Router();
const Plan = require("../models/plan");

router.get("/", async (req, res) => {
  try {
    const plans = await Plan.find();
    res.status(201).send(plans);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/:name", async (req, res) => {
  try {
    const foundPlan = await Plan.find({ name: req.params.name });
    res.send(foundPlan);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const plan = new Plan({
    name: req.body.name,
    price: req.body.price,
    size: req.body.size,
    screens: req.body.screens,
    type: req.body.type,
  });

  try {
    const newPlan = await plan.save();
    res.status(201).json(newPlan);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put("/:id", getPlans, async (req, res) => {
  if (req.body.name != null) {
    res.plan.name = req.body.name;
  }
  if (req.body.price != null) {
    res.plan.price = req.body.price;
  }
  if (req.body.size != null) {
    res.plan.size = req.body.size;
  }
  if (req.body.screens != null) {
    res.plan.screens = req.body.screens;
  }
  if (req.body.type != null) {
    res.plan.type = req.body.type;
  }

  try {
    const updatedPlan = await res.plan.save();
    res.json(updatedPlan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getPlans, async (req, res) => {
  try {
    await res.plan.delete();
    res.send({ message: "Plan removed" });
  } catch (err) {
    res.status(404).send({ message: err });
  }
});

async function getPlans(req, res, next) {
  let plan;
  try {
    plan = await Plan.findById(req.params.id);
  } catch (err) {
    res.status(404).send({ message: err });
  }

  res.plan = plan;
  next();
}

module.exports = router;
