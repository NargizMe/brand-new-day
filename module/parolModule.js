const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  parol: { type: String, required: true }
});

module.exports = mongoose.model("Parol", schema);
