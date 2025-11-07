const express = require("express");
const Admin = require("../models/Admin");

const router = express.Router();

// ✅ GET all admins
router.get("/", async (req, res) => {
  try {
    console.log("Fetching admins...");
    const admins = await Admin.find({}); // Exclude password field
    console.log("Fetched admins:", admins);
    res.json(admins);
  } catch (err) {
    console.error("Error fetching admins:", err);
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
});

// ✅ GET single admin by ID
router.get("/:id", async (req, res) => {
  try {

    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).json({ msg: "Admin not found" });
    }
    res.json(admin);
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
});

// Admin Register (plain text)
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
console.log(req.body);
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

// ✅ UPDATE admin
router.put("/update/:id", async (req, res) => {
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

// ✅ DELETE admin
router.delete("/delete/:id", async (req, res) => {
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

module.exports = router;