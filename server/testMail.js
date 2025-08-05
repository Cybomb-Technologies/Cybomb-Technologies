import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

// ✅ Create transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // true for 465, false for 587
  auth: {
    user: "sudesh.t@cybomb.com", // Gmail address
    pass: "Cybomb@1234", // Gmail App Password
  },
});

// ✅ Mail Options
const mailOptions = {
  from: "sudesh.t@cybomb.com",
  to: 'sudheshsudesh4@gmail.com', // Replace with your testing email
  subject: 'Test Email from NodeMailer',
  html: `
    <h2>Hello Sudesh 👋</h2>
    <p>This is a test email sent from <strong>NodeMailer</strong>.</p>
    <p>If you see this, your email setup is working correctly ✅</p>
  `,
};

// ✅ Send Mail
async function sendTestMail() {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Test Email Sent: ", info.messageId);
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
  }
}

sendTestMail();
