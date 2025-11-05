const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.connect("mongodb://sudesh.t%40cybomb.com:Cybomb%401234@147.93.111.96:27017/cybomb?authSource=adminmongodb://sudesh.t%40cybomb.com:Cybomb%401234@147.93.111.96:27017/cybomb?authSource=admin");
    await mongoose.connect("mongodb://127.0.0.1:27017/cybomb");
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
