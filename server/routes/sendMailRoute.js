const express = require("express");
const router = express.Router();
const sendMail = require("../utils/mailSender");

router.post("/", async (req, res) => {
  try {
    const response = await sendMail(req.body);
    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error in sendMail route:", error);
    return res.status(500).json({ success: false, message: "Email sending failed." });
  }
});

module.exports = router;
