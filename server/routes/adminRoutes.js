const express = require("express");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(400).json({ msg: "Invalid Username" });

  // plain text password compare
  if (password !== admin.password) {
    return res.status(400).json({ msg: "Invalid Password" });
  }

  const token = jwt.sign({ id: admin._id }, "secretkey", { expiresIn: "1h" });
  res.json({ token });
});

// Protected Dashboard
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ msg: "Welcome Admin Dashboard", id: req.adminId });
});

module.exports = router;
