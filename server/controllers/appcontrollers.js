// controllers/appcontrollers.js
const App = require("../models-new/appmodel");

// Create app
exports.createApp = async (req, res) => {
  try {
    const { name, imageUrl, appUrl } = req.body;
    if (!name || !appUrl) {
      return res.status(400).json({ message: "name and appUrl are required" });
    }
    const app = new App({ name, imageUrl, appUrl });
    await app.save();
    return res.status(201).json(app);
  } catch (err) {
    console.error("createApp error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// Get list (with optional search)
exports.getApps = async (req, res) => {
  try {
    const { search } = req.query;
    const filter = {};
    if (search && search.trim()) {
      const q = search.trim();
      filter.$or = [
        { name: { $regex: q, $options: "i" } },
        { appUrl: { $regex: q, $options: "i" } },
      ];
    }
    const apps = await App.find(filter).sort({ createdAt: -1 });
    return res.json(apps);
  } catch (err) {
    console.error("getApps error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// Update app
exports.updateApp = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, imageUrl, appUrl } = req.body;
    if (!name || !appUrl) {
      return res.status(400).json({ message: "name and appUrl are required" });
    }
    const app = await App.findByIdAndUpdate(
      id,
      { name, imageUrl, appUrl },
      { new: true }
    );
    if (!app) return res.status(404).json({ message: "App not found" });
    return res.json(app);
  } catch (err) {
    console.error("updateApp error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// Delete app
exports.deleteApp = async (req, res) => {
  try {
    const { id } = req.params;
    const app = await App.findByIdAndDelete(id);
    if (!app) return res.status(404).json({ message: "App not found" });
    return res.json({ message: "Deleted" });
  } catch (err) {
    console.error("deleteApp error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
