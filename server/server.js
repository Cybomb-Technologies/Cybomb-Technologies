require('dotenv').config();
const fs = require('fs');
const https = require('https');
const http = require('http');
const express = require('express');
const cors = require('cors');
const path = require('path');
const os = require('os');
 
// Express app
const app = express();
 
// CORS setup
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://cybomb.com',
  'https://www.cybomb.com',
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
 
// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
// Import routes
const sendMailRoutes = require("./routes/sendMailRoute");
const popupMailRoute = require("./routes/popupMailRoute");
const bannerMailRoute = require("./routes/bannerMail");
 
// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});
 
// API routes
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
 
// Get local IP
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
 
// SSL certificate paths
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/www.cybomb.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/www.cybomb.com/fullchain.pem'),
  // key: fs.readFileSync('privkey.pem'),
  // cert: fs.readFileSync('fullchain.pem')
};
 
// HTTP → HTTPS redirect server
http.createServer((req, res) => {
  res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
  res.end();
}).listen(80, () => {
  console.log("🌐 HTTP server running on port 80 (redirecting to HTTPS)");
});
 
// HTTPS server
https.createServer(options, app).listen(443, () => {
  console.log("🔒 HTTPS server running on port 443");
  console.log(`➡️  Local:   https://localhost`);
  console.log(`➡️  Network: https://${getLocalIp()}`);
});
 