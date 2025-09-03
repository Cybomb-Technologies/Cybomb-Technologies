const mongoose = require("mongoose");

const careerFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    jobTitle: { type: String },
    resumeFileName: { type: String }, // optional, store original file name
    resumeData: { type: Buffer },     // optional, store file as Buffer if needed
  },
  { timestamps: true } // adds createdAt and updatedAt
);

const CareerForm = mongoose.model("CareerForm", careerFormSchema, "careerform");

module.exports = CareerForm;
