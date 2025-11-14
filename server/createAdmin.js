import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './models-new/User.js';

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/cybomb");
    console.log('Connected to MongoDB');
    
    const adminUser = {
      name: 'Admin User',
      email: 'admin@cybomb.com',
      password: await bcrypt.hash('admin123', 12),
      isAdmin: true
    };

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminUser.email });
    if (existingAdmin) {
      console.log('✅ Admin user already exists');
      await mongoose.disconnect();
      return;
    }

    await User.create(adminUser);
    console.log('✅ Admin user created successfully');
    console.log('📧 Email: admin@cybomb.com');
    console.log('🔑 Password: admin123');
    
    await mongoose.disconnect();
  } catch (error) {
    console.error('❌ Error creating admin:', error);
    process.exit(1);
  }
};

createAdmin();