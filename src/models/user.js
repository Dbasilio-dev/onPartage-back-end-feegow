const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
  plan: {
    type: String,
    required: false,
  },
  started: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
module.exports = mongoose.model("user", userSchema);
