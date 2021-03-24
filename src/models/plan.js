const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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
  type: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("plan", planSchema);
