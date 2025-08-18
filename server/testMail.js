const nodemailer = require("nodemailer");
require("dotenv").config();

async function testEmail() {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // <- ignore self-signed cert
      },
      logger: true,
      debug: true,
    });

    await transporter.verify();
    console.log("SMTP credentials are correct ✅");
  } catch (error) {
    console.error("SMTP verification failed ❌", error);
  }
}

testEmail();
