const express = require("express");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const authMiddleware = require("../middleware/auth");

// 1️⃣ Create router
const router = express.Router();

// 2️⃣ Login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(400).json({ msg: "Invalid Username" });

  if (password !== admin.password)
    return res.status(400).json({ msg: "Invalid Password" });

  const token = jwt.sign({ id: admin._id }, "secretkey", { expiresIn: "1h" });

  // Set cookie
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 1000, // 1 hour
    sameSite: "strict",
  });

  res.json({ msg: "Logged in successfully" });
});

// 3️⃣ Dashboard route (protected)
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ msg: "Welcome Admin Dashboard", id: req.adminId });
});

// 4️⃣ Export router
module.exports = router;
