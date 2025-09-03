const express = require("express");
const Admin = require("../models/Admin");

const router = express.Router();

// Admin Register (plain text)
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // check if user already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ msg: "Username already exists" });
    }

    // create new admin
    const newAdmin = new Admin({
      username,
      password,   // ⚠ plain text (not secure, but as you asked)
    });

    await newAdmin.save();

    res.json({ msg: "✅ Admin registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
});

module.exports = router;
