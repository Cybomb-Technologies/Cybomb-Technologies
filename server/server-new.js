import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Import local files
import connectDB from './config/db.js';
import publicRoutes from './routes-new/publicRoutes.js';
import adminRoutes from './routes-new/adminRoutes.js';
import contactRoutes from './routes-new/contactRoutes.js';
import enquiryRoutes from './routes-new/enquiryRoutes.js';
import applicationRoutes from './routes-new/applicationRoutes.js';
import blogRoutes from './routes-new/blogRoutes.js';
import applicationManagerRoutes from './routes-new/applicationManagerRoutes.js';
import { setupOverviewRoutes } from './routes-new/overviewRoutes.js';
import newsletterRoutes from './routes-new/newsletterRoutes.js';
import pressreleaseRoute from './routes-new/PressreleaseRoute.js'
import popupMailRoute from './routes-new/popupMailRoute.js'
// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

// Initialize the Express application
const app = express();

// --- Middleware Setup ---
// Allow requests only from your frontend with all necessary methods
app.use(cors({
  origin: ['https://cybomb.com','http://localhost:5173'], // your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // include PATCH method
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], // include necessary headers
  credentials: true // allow cookies/auth headers if needed
}));

// Get __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to handle JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup overview routes-new
setupOverviewRoutes(app);

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --- Route Definitions ---
app.use('/api', publicRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/enquiry', enquiryRoutes);
app.use('/api/application', applicationRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/applications', applicationManagerRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use("/api/pressrelease", pressreleaseRoute);
app.use("/api/popup-mail", popupMailRoute);
// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Cybomb Technologies Server is Active',
    endpoints: {
      public: '/api/status',
      contact: '/api/contact',
      enquiry: '/api/enquiry',
      application: '/api/application',
      blog: '/api/blog',
      admin: '/api/admin/login'
    }
  });
});

// ✅ catch-all 404 without a path
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    requestedUrl: req.originalUrl
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : {}
  });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});