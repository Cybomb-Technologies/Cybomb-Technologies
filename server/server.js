const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sendMailRoutes = require("./routes/sendMailRoute");
const popupMailRoute = require("./routes/popupMailRoute");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/send-mail", sendMailRoutes);
app.use("/api/banner-mail", require("./routes/bannerMail"));
app.use("/api/popup-mail", popupMailRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});