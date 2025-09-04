const mongoose = require("mongoose");

const bannerFormSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    company: { type: String },
    requirement: { type: String, required: true },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

const BannerForm = mongoose.model("BannerForm", bannerFormSchema, "bannerform");

module.exports = BannerForm;
