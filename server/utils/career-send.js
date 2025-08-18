const nodemailer = require("nodemailer");
require("dotenv").config();

const sendCareerMail = async ({ name, phone, email, resume, jobTitle }) => {
  try {
    // Configure transporter using .env variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT), // convert string to number
      secure: true, // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Ignore self-signed certificate
      },
    });

    // Mail options
    const mailOptions = {
      from: `"Career Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "New Career Form Submission",
      html: `
        <h2>New Career Form (For ${jobTitle})</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
      attachments: [
        {
          filename: resume.originalname,
          content: resume.buffer,
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Career form sent successfully" };
  } catch (error) {
    console.error("Error sending career form:", error);
    return { success: false, message: "Error sending career form", error };
  }
};

module.exports = sendCareerMail;
