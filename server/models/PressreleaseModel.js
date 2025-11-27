const mongoose = require("mongoose");

const pressreleaseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  content: { type: String },
  image: { type: String },
  author: { type: String, default: "Admin" },
  category: { type: String, default: "General" },
  publishedDate: { type: Date, default: Date.now },
  status: { type: String, enum: ["draft", "published"], default: "published" }
});

module.exports = mongoose.model("PressRelease", pressreleaseSchema);
