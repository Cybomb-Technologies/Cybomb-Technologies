// models-new/appmodel.js
const mongoose = require("mongoose");

const AppSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  imageUrl: { type: String, trim: true, default: "" },
  appUrl: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("App", AppSchema);
