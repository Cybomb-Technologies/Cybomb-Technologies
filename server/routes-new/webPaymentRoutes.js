const express = require("express");
const router = express.Router();
const {
  createWebPackageOrder,
  verifyWebPackagePayment,
  getOrderDetails,
  webPackageWebhook,
  getAllPaymentOrders, // ✅ Add new functions
  getPaymentOrderById
} = require("../controllers/webPaymentController");

// ✅ Web Package Payment Routes
router.post("/create-web-order", createWebPackageOrder);
router.post("/verify-web-payment", verifyWebPackagePayment);
router.get("/order/:orderId", getOrderDetails);
router.post("/webhook", webPackageWebhook);
router.get("/orders", getAllPaymentOrders); // ✅ Get all orders
router.get("/orders/:id", getPaymentOrderById); // ✅ Get order by ID

module.exports = router;