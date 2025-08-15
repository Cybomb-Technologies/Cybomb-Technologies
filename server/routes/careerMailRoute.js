const express = require("express");
const multer = require("multer");
const sendCareerMail = require("../utils/career-send");

const router = express.Router();

// Multer config: store file in memory for attachment
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST /api/career
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { name, phone, email, jobTitle } = req.body;

    if (!name || !phone || !email || !req.file) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const response = await sendCareerMail({
      name,
      phone,
      email,
      resume: req.file,
      jobTitle,
    });

    if (response.success) {
      return res.status(200).json({ success: true, message: "Form submitted successfully" });
    } else {
      return res.status(500).json({ success: false, message: "Failed to send email" });
    }
  } catch (error) {
    console.error("Error in /career route:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
