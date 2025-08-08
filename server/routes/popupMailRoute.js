const express = require("express");
const router = express.Router();
const sendPopupMail = require("../utils/popup-send");

router.post("/", async (req, res) => {
  try {
    console.log("📥 Received data:", req.body);
    const result = await sendPopupMail(req.body);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Mail Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to send mail.",
      error: error.message,
    });
  }
});

module.exports = router;
