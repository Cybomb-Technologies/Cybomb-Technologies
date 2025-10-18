const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const PressRelease = require("../models/PressreleaseModel");

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "press_" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// CREATE (with image upload)
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description, content, author, category, status } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const newPress = new PressRelease({
      title,
      description,
      content,
      author,
      category,
      status,
      image: imagePath,
    });

    await newPress.save();
    res.status(201).json(newPress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    const press = await PressRelease.find().sort({ publishedDate: -1 });
    res.json(press);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ ONE (for detailed view page)
router.get("/:id", async (req, res) => {
  try {
    const press = await PressRelease.findById(req.params.id);
    res.json(press);
  } catch (err) {
    res.status(404).json({ message: "Press release not found" });
  }
});

// UPDATE
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const updateData = req.body;
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }
    const updated = await PressRelease.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await PressRelease.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
