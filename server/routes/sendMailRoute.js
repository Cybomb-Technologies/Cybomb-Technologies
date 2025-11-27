// routes/sendMailRoute.js
const express = require("express");
const router = express.Router();
const sendMail = require("../utils/mailSender");
const HomeContact = require("../models/HomeContact"); // import model

router.post("/", async (req, res) => {
  try {
    console.log("📥 Received Home Contact data:", req.body);
    // 1️⃣ Save in DB
    const newEntry = new HomeContact(req.body);
    await newEntry.save();

    // 2️⃣ Send email
    await sendMail(req.body);

    return res.status(200).json({
      success: true,
      message: "Email sent & data saved successfully!",
    });
  } catch (error) {
    console.error("❌ Error in sendMailRoute:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to save or send email.",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const contacts = await HomeContact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
