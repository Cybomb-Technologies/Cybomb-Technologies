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

// ✅ GET all admins (protected)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const admins = await Admin.find({}, { password: 0 }); // Exclude password field
    console.log("Fetched admins:", admins);
    res.json(admins);
  } catch (err) {
    console.error("Error fetching admins:", err);
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
});

// ✅ GET single admin by ID (protected)
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id, { password: 0 });
    if (!admin) {
      return res.status(404).json({ msg: "Admin not found" });
    }
    res.json(admin);
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
});

// ✅ UPDATE admin (protected)
router.put("/update/:id", authMiddleware, async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const updateData = { username };
    
    // Only update password if provided
    if (password && password.trim() !== "") {
      updateData.password = password;
    }

    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, select: { password: 0 } } // Exclude password from response
    );

    if (!updatedAdmin) {
      return res.status(404).json({ msg: "Admin not found" });
    }

    res.json({ 
      msg: "Admin updated successfully", 
      admin: updatedAdmin 
    });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
});

// ✅ DELETE admin (protected)
router.delete("/delete/:id", authMiddleware, async (req, res) => {
  try {
    const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
    
    if (!deletedAdmin) {
      return res.status(404).json({ msg: "Admin not found" });
    }

    res.json({ msg: "Admin deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
});

// 4️⃣ Export router
module.exports = router;