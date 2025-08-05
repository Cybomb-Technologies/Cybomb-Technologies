const express = require("express");
const router = express.Router();
const sendMail = require("../utils/mailSender");

router.post("/send-mail", async (req, res) => {
  const { firstName, email, phone, source, message } = req.body;

  // ✅ Basic validation
  if (!firstName || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    await sendMail({ firstName, email, phone, source, message });
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error("❌ Error sending mail:", err.message);
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
});

module.exports = router;
