require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const os = require("os");

const app = express();

// CORS setup
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://cybomb.com',
  'http://147.93.111.96:5000'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS: ${origin}`));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const sendMailRoutes = require("./routes/sendMailRoute");
const popupMailRoute = require("./routes/popupMailRoute");
const bannerMailRoute = require("./routes/bannerMail");

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.use("/api/send-mail", sendMailRoutes);
app.use("/api/popup-mail", popupMailRoute);
app.use("/api/banner-mail", bannerMailRoute);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// Global error handler
app.use((err, req, res, next) => {
  console.error('🚨 Global error handler:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Local IP
const getLocalIp = () => {
  const interfaces = os.networkInterfaces();
  for (const name in interfaces) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
};

const PORT = process.env.PORT || 5000;
const IP = getLocalIp();

// Start server
const server = app.listen(PORT, () => {
  console.log(`✅ Server running in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`➡️  Local:   http://localhost:${PORT}`);
  console.log(`➡️  Network: http://${IP}:${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.error('🚨 Unhandled Rejection:', err);
  server.close(() => process.exit(1));
});

module.exports = server;
