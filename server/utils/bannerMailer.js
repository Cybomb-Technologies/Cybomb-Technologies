const nodemailer = require("nodemailer");
require("dotenv").config();

const sendBannerMail = async ({ fullName, email, phone, company, requirement }) => {
  if (!fullName || !email || !requirement) {
    throw new Error("Required fields are missing");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, // Use STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // ✅ Fix self-signed cert issue
    },
  });

  // Optional: Test connection before sending
  await transporter.verify().catch((err) => {
    console.error("❌ SMTP connection failed:", err);
    throw new Error("SMTP connection failed");
  });

  const mailOptions = {
    from: `"Banner Form" <${process.env.SMTP_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `📩 New Banner Form Submission from ${fullName}`,
    html: `
      <h3>New Contact From Website</h3>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not Provided'}</p>
      <p><strong>Company:</strong> ${company || 'Not Provided'}</p>
      <p><strong>Requirement:</strong><br/>${requirement}</p>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
};

module.exports = sendBannerMail;
