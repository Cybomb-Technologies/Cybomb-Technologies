import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      // "mongodb://sudesh.t%40cybomb.com:Cybomb%401234@147.93.111.96:27017/cybomb?authSource=admin"
      "mongodb://localhost:27017/cybomb"
    );
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
