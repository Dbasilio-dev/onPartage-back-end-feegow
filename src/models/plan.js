const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  screens: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("plan", planSchema);
