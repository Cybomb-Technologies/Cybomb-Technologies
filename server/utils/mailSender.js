const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async ({ firstName, email, phone, source, message }) => {
  if (!firstName || !email || !message) {
    throw new Error("Missing required fields");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT), // Convert string to number
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Cybomb Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Contact Form Message from ${firstName}`,
    html: `
      <h3>New Contact Submission</h3>
      <p><strong>Name:</strong> ${firstName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not Provided'}</p>
      <p><strong>Source:</strong> ${source || 'Not Specified'}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
};

module.exports = sendMail;
