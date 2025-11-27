const express = require("express");
const multer = require("multer");
const path = require("path");
const sendCareerMail = require("../utils/career-send");
const CareerForm = require("../models/CareerForm");

const router = express.Router();

// Multer config: store files in 'public/uploads'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// POST /api/career
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { name, phone, email, jobTitle } = req.body;

    if (!name || !phone || !email || !req.file) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Save to MongoDB (store path)
    const newCareer = new CareerForm({
      name,
      phone,
      email,
      jobTitle,
      resumeFileName: req.file.originalname,
      resumePath: req.file.path,
    });

    const savedCareer = await newCareer.save();
    console.log("Saved career form:", savedCareer);

    // Send email WITHOUT attachment
    const response = await sendCareerMail({ name, phone, email, jobTitle });

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

// GET /api/career
router.get("/", async (req, res) => {
  try {
    const careers = await CareerForm.find().sort({ createdAt: -1 }).select("-__v");
    res.status(200).json(careers);
  } catch (error) {
    console.error("Error fetching career forms:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

const fs = require("fs");

// GET /api/career/:id/resume
router.get("/:id/resume", async (req, res) => {
  try {
    const career = await CareerForm.findById(req.params.id);
    if (!career) return res.status(404).send("Candidate not found");

    const filePath = path.join(__dirname, "..", career.resumePath);

    if (!fs.existsSync(filePath)) return res.status(404).send("Resume not found");

    // Send file with original name
    res.download(filePath, career.resumeFileName);
  } catch (error) {
    console.error("Error fetching resume:", error);
    res.status(500).send("Server error");
  }
});


module.exports = router;
