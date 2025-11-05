// popupMailRoute.js
const express = require("express");
const router = express.Router();
const sendPopupMail = require("../utils/popup-send");
const PopupForm = require("../models-new/PopupForm"); // Mongoose model

// POST - create new popup form submission
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

// GET - fetch single popup form by ID
router.get("/:id", async (req, res) => {
  try {
    const form = await PopupForm.findById(req.params.id);
    
    if (!form) {
      return res.status(404).json({ 
        success: false, 
        message: "Popup form not found" 
      });
    }
    
    res.json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE - delete popup form by ID
router.delete("/:id", async (req, res) => {
  try {
    const form = await PopupForm.findByIdAndDelete(req.params.id);
    
    if (!form) {
      return res.status(404).json({ 
        success: false, 
        message: "Popup form not found" 
      });
    }
    
    res.json({ 
      success: true, 
      message: "Popup form deleted successfully" 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;