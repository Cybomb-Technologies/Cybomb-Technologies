const express = require("express");
const router = express.Router();
const PressRelease = require("../models/PressreleaseModel");

// CREATE (with image URL)
router.post("/", async (req, res) => {
  try {
    const { title, description, content, author, category, status, image } = req.body;

    const newPress = new PressRelease({
      title,
      description,
      content,
      author,
      category,
      status,
      image: image || null, // Use provided image URL or null
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
router.put("/:id", async (req, res) => {
  try {
    const updateData = req.body;
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