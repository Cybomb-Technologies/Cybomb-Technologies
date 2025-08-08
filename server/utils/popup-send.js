const nodemailer = require("nodemailer");

const sendPopupMail = async ({ name, email, phone, message, subscribe }) => {
  try {
    if (!name || !email || !message) {
      throw new Error("Missing required fields");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false, // true for port 465, false for 587
      auth: {
        user: process.env.SMTP_USER, // your email address
        pass: process.env.SMTP_PASS, // your email password
      },
      tls: {
        rejectUnauthorized: false, // ✅ this line allows self-signed certificates
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: "📩 New Popup Form Submission",
      html: `
        <h3>New Popup Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Subscribed to Newsletter:</strong> ${subscribe ? "Yes" : "No"}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error in sendPopupMail:", error);
    throw error;
  }
};

module.exports = sendPopupMail;
