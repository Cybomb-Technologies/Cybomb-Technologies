const mongoose = require("mongoose");

const popupFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
    subscribe: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PopupForm", popupFormSchema);
