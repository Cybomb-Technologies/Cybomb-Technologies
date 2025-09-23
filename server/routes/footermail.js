const express = require("express");
const router = express.Router();
const sendFooterMail = require("../utils/footer-send");
const Newsletter = require("../models/Newsletter"); // You'll need this model

// POST - Subscribe new email
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Save to database (you'll need to implement this)
    const newSubscription = new Newsletter({ email });
    await newSubscription.save();

    // Call util to send email
    await sendFooterMail(email);

    res.status(200).json({ message: "Subscription successful!" });
  } catch (err) {
    console.error("Error in /footer-mail:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET - Fetch all newsletter subscriptions
router.get("/", async (req, res) => {
  try {
    const subscriptions = await Newsletter.find().sort({ createdAt: -1 });
    res.status(200).json(subscriptions);
  } catch (err) {
    console.error("Error fetching subscriptions:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE - Remove subscription
router.delete("/:id", async (req, res) => {
  try {
    await Newsletter.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Subscription deleted successfully!" });
  } catch (err) {
    console.error("Error deleting subscription:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;