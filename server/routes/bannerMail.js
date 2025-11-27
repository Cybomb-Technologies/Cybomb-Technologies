const express = require("express");
const router = express.Router();
const sendBannerMail = require("../utils/bannerMailer");
const BannerForm = require("../models/BannerForm");

router.post("/", async (req, res) => {
  console.log("Request body:", req.body); // <-- debug

  const { fullName, email, phone, company, requirement } = req.body;

  if (!fullName || !email || !requirement) {
    return res.status(400).json({
      success: false,
      message: "Full Name, Email, and Requirement are required",
    });
  }

  try {
    // Save to MongoDB
    const newBanner = new BannerForm({ fullName, email, phone, company, requirement });
    const saved = await newBanner.save();
    console.log("Saved banner:", saved);

    // Send email only after save succeeds
    await sendBannerMail(req.body);

    return res.status(200).json({
      success: true,
      message: "Form submitted and email sent successfully!",
    });
  } catch (err) {
    console.error("❌ Error saving banner or sending mail:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to submit form",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
});

// GET - fetch all banner forms
router.get("/", async (req, res) => {
  try {
    const forms = await BannerForm.find().sort({ createdAt: -1 });
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
