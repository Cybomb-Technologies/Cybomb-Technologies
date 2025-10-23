const express = require("express");
const router = express.Router();
const sendFooterMail = require("../utils/footer-send");
const Newsletter = require("../models/Newsletter");
const multer = require("multer");
const XLSX = require("xlsx");
const fs = require("fs");

// Setup multer for temporary uploads
const upload = multer({ dest: "uploads/" });

// --------------------- IMPORT EXCEL ---------------------
router.post("/import", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    console.log("📁 File uploaded:", req.file.path);

    // Read Excel file
    const workbook = XLSX.readFile(req.file.path);
    console.log("📑 Sheet names:", workbook.SheetNames);
    const sheetName = workbook.SheetNames[0]; // You can change index if needed
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    if (!data || data.length === 0) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ message: "No valid data found in Excel" });
    }

    console.log("🧾 Raw parsed Excel data:", data);

    // Normalize data: handle different header variations and safely convert dates
    const normalizedData = data.map(row => {
      const email =
        (row.Email || row.email || row["EMAIL"] || row["Email "] || row[" email"] || "")
          .toString()
          .trim()
          .toLowerCase();

      let rawDate =
        row["Subscribed Date"] ||
        row["subscribed date"] ||
        row["Subscribed_Date"] ||
        row["SubscribedDate"] ||
        "";

      let subscribedDate = "";
      if (rawDate !== undefined && rawDate !== null) {
        subscribedDate = rawDate.toString().trim();
      }

      const status =
        (row.Status || row.status || row["STATUS"] || "active").toString().trim().toLowerCase();

      return { email, subscribedDate, status };
    });

    let insertedCount = 0;

    for (const row of normalizedData) {
      if (!row.email) {
        console.log("⚠️ Skipped row (no email):", row);
        continue;
      }

      // Check duplicate
      const existing = await Newsletter.findOne({ email: row.email });
      if (existing) {
        console.log("🚫 Duplicate skipped:", row.email);
        continue;
      }

      // Convert 'Subscribed Date' to JS Date
      let subscribedAt = null;
      if (row.subscribedDate) {
        if (!isNaN(row.subscribedDate)) {
          // Excel serial number date
          const excelDate = Number(row.subscribedDate);
          const d = XLSX.SSF.parse_date_code(excelDate);
          if (d) subscribedAt = new Date(d.y, d.m - 1, d.d);
        } else {
          // String like "18/10/2025"
          const parts = row.subscribedDate.split(/[-\/]/);
          if (parts.length === 3) {
            const [day, month, year] = parts;
            subscribedAt = new Date(`${year}-${month}-${day}`);
          }
        }
      }

      await Newsletter.create({
        email: row.email,
        status: row.status || "active",
        subscribedAt,
      });

      insertedCount++;
      console.log("✅ Inserted:", row.email);
    }

    // Remove uploaded temp file
    fs.unlinkSync(req.file.path);

    res.status(200).json({
      message: "Import completed successfully!",
      totalImported: insertedCount,
    });
  } catch (error) {
    console.error("❌ Error importing file:", error);
    res.status(500).json({ message: "Error importing data" });
  }
});

// --------------------- SUBSCRIBE EMAIL ---------------------
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const existing = await Newsletter.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already subscribed" });

    const newSubscription = new Newsletter({ email });
    await newSubscription.save();

    await sendFooterMail(email);

    res.status(200).json({ message: "Subscription successful!" });
  } catch (err) {
    console.error("Error in /footer-mail:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// --------------------- GET ALL SUBSCRIPTIONS ---------------------
router.get("/", async (req, res) => {
  try {
    const subscriptions = await Newsletter.find().sort({ createdAt: -1 });
    res.status(200).json(subscriptions);
  } catch (err) {
    console.error("Error fetching subscriptions:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// --------------------- DELETE SUBSCRIPTION ---------------------
router.delete("/:id", async (req, res) => {
  try {
    await Newsletter.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Subscription deleted successfully!" });
  } catch (err) {
    console.error("Error deleting subscription:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
