// popupMailRoute.js
const express = require("express");
const router = express.Router();
const sendPopupMail = require("../utils/popup-send");
const PopupForm = require("../models/PopupForm"); // Mongoose model

router.post("/", async (req, res) => {
  try {
    console.log("📥 Received data:", req.body);

    // 1️⃣ Save data to MongoDB
    const newEntry = new PopupForm(req.body);
    await newEntry.save();

    // 2️⃣ Send email
    await sendPopupMail(req.body);

    res.status(200).json({ success: true, message: "Email sent and data saved!" });
  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to save or send mail.",
      error: error.message,
    });
  }
});


// GET - fetch all popup forms
router.get("/", async (req, res) => {
  try {
    const forms = await PopupForm.find().sort({ createdAt: -1 });
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
