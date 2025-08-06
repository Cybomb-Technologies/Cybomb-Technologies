const nodemailer = require("nodemailer");
require("dotenv").config();

const sendBannerMail = async ({ fullName, email, phone, company, requirement }) => {
  if (!fullName || !email || !requirement) {
    throw new Error("Required fields are missing");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: true, // True for port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Cybomb Banner Form" <${process.env.SMTP_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `📩 New Banner Form Submission from ${fullName}`,
    html: `
      <h3>New Contact From Website</h3>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Requirement:</strong><br/>${requirement}</p>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
};

module.exports = sendBannerMail;
