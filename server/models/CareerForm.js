const mongoose = require("mongoose");

const careerFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    jobTitle: { type: String },

    resumeFileName: { type: String, required: true },
    resumePath: { type: String, required: true },
  },
  { timestamps: true }
);

const CareerForm = mongoose.model("CareerForm", careerFormSchema, "careerform");

module.exports = CareerForm;
