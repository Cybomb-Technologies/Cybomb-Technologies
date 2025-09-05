const nodemailer = require("nodemailer");
require("dotenv").config();

const sendCareerMail = async ({ name, phone, email, jobTitle }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: `"Career Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Career Form Submission (${jobTitle || "No Role"})`,
      html: `
        <h2>New Career Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Job Title:</strong> ${jobTitle || "Not mentioned"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: "Career form sent successfully" };
  } catch (error) {
    console.error("Error sending career form:", error);
    return { success: false, message: "Error sending career form", error };
  }
};

module.exports = sendCareerMail;
