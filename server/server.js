const express = require("express");
const cors = require("cors");

const mailRoute = require("./routes/mail");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", mailRoute);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
