const express = require("express");
const router = express.Router();
const sendFooterMail =require("../utils/footer-send");


router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Call util to send email
    await sendFooterMail(email);

    res.status(200).json({ message: "Subscription successful!" });
  } catch (err) {
    console.error("Error in /footer-mail:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
