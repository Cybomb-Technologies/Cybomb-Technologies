const axios = require("axios");
const WebOrder = require("../models-new/WebOrder");
require("dotenv").config();

const CASHFREE_BASE_URL = process.env.CASHFREE_BASE_URL;

// ✅ Generate valid Cashfree customer ID (alphanumeric only)
const generateCustomerId = (email) => {
  // Remove special characters and create a valid customer ID
  const cleanEmail = email.replace(/[^a-zA-Z0-9]/g, '_');
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2, 5);
  return `cust_${cleanEmail}_${timestamp}_${random}`.substr(0, 50); // Limit to 50 chars
};

// ✅ Create Web Package Order
const createWebPackageOrder = async (req, res) => {
  try {
    const { 
      customerDetails, 
      packageDetails, 
      currency = 'INR' 
    } = req.body;

    // Validate required fields
    if (!customerDetails || !packageDetails) {
      return res.status(400).json({ 
        success: false,
        message: "Missing customer or package details" 
      });
    }

    const { fullName, email, phone, address, city, pincode } = customerDetails;
    if (!fullName || !email || !phone || !address || !city || !pincode) {
      return res.status(400).json({
        success: false,
        message: "Missing required customer fields"
      });
    }

    const { planType, planName, basePrice, gstAmount, totalAmount } = packageDetails;
    if (!planType || !planName || !basePrice || !totalAmount) {
      return res.status(400).json({
        success: false,
        message: "Missing required package fields"
      });
    }

    // Generate unique order ID
    const orderId = `WEB_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // ✅ FIX: Generate valid customer ID for Cashfree
    const customerId = generateCustomerId(email);

    // Create order in database with pending status
    const webOrder = new WebOrder({
      orderId,
      customerDetails: {
        fullName,
        email,
        phone,
        company: customerDetails.company || '',
        address,
        city,
        pincode,
        requirements: customerDetails.requirements || ''
      },
      packageDetails: {
        planType,
        planName,
        basePrice,
        currency,
        gstAmount: gstAmount || 0,
        totalAmount
      },
      paymentDetails: {
        paymentStatus: 'pending',
        paymentMethod: 'cashfree'
      },
      metadata: {
        currency,
        conversionRate: currency === 'USD' ? 0.012 : 1,
        customerId: customerId // ✅ Store the generated customer ID
      }
    });

    await webOrder.save();

    // Create Cashfree order
    const orderPayload = {
      order_id: orderId,
      order_amount: totalAmount,
      customer_details: {
        customer_id: customerId, // ✅ USE VALID CUSTOMER ID (not email)
        customer_name: fullName,
        customer_email: email,
        customer_phone: phone,
      },
      order_currency: currency === 'USD' ? 'USD' : 'INR',
      order_note: `Web Package: ${planName} - ${planType}`,
    };

    console.log('Creating Cashfree order with payload:', orderPayload);

    const cashfreeResponse = await axios.post(CASHFREE_BASE_URL, orderPayload, {
      headers: {
        "x-client-id": process.env.CASHFREE_APP_ID,
        "x-client-secret": process.env.CASHFREE_SECRET_KEY,
        "x-api-version": "2022-01-01",
        "Content-Type": "application/json",
      },
    });

    const cashfreeData = cashfreeResponse.data;

    // Update order with payment link
    webOrder.paymentDetails.paymentLink = cashfreeData.payment_link;
    await webOrder.save();

    res.json({
      success: true,
      message: "Order created successfully",
      orderId: orderId,
      paymentLink: cashfreeData.payment_link,
      cashfreeOrderId: cashfreeData.order_id
    });

  } catch (err) {
    console.error("Cashfree Web Order Error:", err.response?.data || err.message);
    
    // Clean up: Delete the order if Cashfree failed
    if (req.body.customerDetails?.email) {
      await WebOrder.deleteOne({ orderId: `WEB_${Date.now()}` });
    }

    res.status(500).json({
      success: false,
      message: err.response?.data?.message || "Failed to create order",
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

// ✅ Verify Web Package Payment
const verifyWebPackagePayment = async (req, res) => {
  try {
    const { orderId } = req.body;

    if (!orderId) {
      return res.status(400).json({ 
        success: false, 
        message: "Order ID is required" 
      });
    }

    // Find the order
    const webOrder = await WebOrder.findOne({ orderId });
    if (!webOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    // If already paid, return success
    if (webOrder.paymentDetails.paymentStatus === 'completed') {
      return res.status(200).json({
        success: true,
        message: "Payment already verified",
        order: webOrder
      });
    }

    // Verify with Cashfree
    const response = await axios.get(`${CASHFREE_BASE_URL}/${orderId}`, {
      headers: {
        "x-client-id": process.env.CASHFREE_APP_ID,
        "x-client-secret": process.env.CASHFREE_SECRET_KEY,
        "x-api-version": "2022-01-01",
      },
    });

    const cashfreeData = response.data;

    if (cashfreeData.order_status === "PAID") {
      // Update order status
      webOrder.paymentDetails.paymentStatus = 'completed';
      webOrder.paymentDetails.transactionId = cashfreeData.cf_order_id || orderId;
      webOrder.paymentDetails.paidAt = new Date();
      webOrder.orderStatus = 'confirmed';

      await webOrder.save();

      return res.status(200).json({
        success: true,
        message: "Payment verified successfully",
        order: {
          id: webOrder._id,
          orderId: webOrder.orderId,
          planName: webOrder.packageDetails.planName,
          totalAmount: webOrder.packageDetails.totalAmount,
          currency: webOrder.packageDetails.currency,
          paidAt: webOrder.paymentDetails.paidAt
        }
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Payment not completed yet",
        orderStatus: cashfreeData.order_status,
      });
    }
  } catch (err) {
    console.error("Cashfree Verify Web Payment Error:", err.response?.data || err.message);
    res.status(500).json({ 
      success: false, 
      message: "Failed to verify payment" 
    });
  }
};

// ✅ Get Order Details
const getOrderDetails = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await WebOrder.findOne({ orderId });
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    res.json({
      success: true,
      order: order
    });
  } catch (err) {
    console.error("Get Order Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch order details"
    });
  }
};

// ✅ Webhook for Cashfree (for automatic verification)
const webPackageWebhook = async (req, res) => {
  try {
    const { orderId, orderStatus } = req.body;

    console.log("Web Package Webhook Received:", { orderId, orderStatus });

    if (orderStatus === "PAID") {
      const order = await WebOrder.findOne({ orderId });
      if (order && order.paymentDetails.paymentStatus !== 'completed') {
        order.paymentDetails.paymentStatus = 'completed';
        order.paymentDetails.paidAt = new Date();
        order.orderStatus = 'confirmed';
        await order.save();
        
        console.log(`✅ Webhook: Order ${orderId} marked as paid`);
        
        // Here you can trigger email notifications, etc.
      }
    }

    res.json({ success: true, message: "Webhook processed" });
  } catch (err) {
    console.error("Webhook Error:", err);
    res.status(500).json({ success: false, message: "Webhook processing failed" });
  }
};

module.exports = {
  createWebPackageOrder,
  verifyWebPackagePayment,
  getOrderDetails,
  webPackageWebhook
};