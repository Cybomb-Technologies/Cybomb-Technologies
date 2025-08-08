const express = require("express");
const router = express.Router();
const sendBannerMail = require("../utils/bannerMailer");

router.post("/", async (req, res) => {
  try {
    await sendBannerMail(req.body); // no need to return full response
    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("❌ Error sending banner mail:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

module.exports = router;
