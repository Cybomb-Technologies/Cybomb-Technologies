// routes-new/approute.js
const express = require("express");
const router = express.Router();
const appController = require("../controllers/appcontrollers");

// If you have auth middleware, you can add it here (e.g. adminAuth)
router.post("/", appController.createApp);
router.get("/", appController.getApps);
router.put("/:id", appController.updateApp);
router.delete("/:id", appController.deleteApp);

module.exports = router;
