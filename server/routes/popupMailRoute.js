const express = require("express");
const router = express.Router();
const sendMail = require("../utils/popup-send");

router.post("/", async (req, res) => {
  try {
    console.log("📥 Received data:", req.body); // Debug log
    const result = await sendMail(req.body);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Mail Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to send mail.",
      error: error.message, // Important for debugging on frontend
    });
  }
});

module.exports = router;
