const express = require("express");
const router = express.Router();
const sendBannerMail = require("../utils/bannerMailer");

// POST /api/banner-mail
router.post("/", async (req, res) => {
  try {
    const response = await sendBannerMail(req.body);
    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
      response,
    });
  } catch (error) {
    console.error("❌ Error sending banner mail:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

module.exports = router;
