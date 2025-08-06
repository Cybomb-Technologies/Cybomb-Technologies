const nodemailer = require("nodemailer");

const sendPopupMail = async ({ name, email, phone, message, subscribe }) => {
  try {
    if (!name || !email || !message) {
      throw new Error("Missing required fields");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Optional: Skip if issue
    // await transporter.verify();

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: "📩 New Popup Form Submission",
      html: `
        <h2>Popup Form Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Subscribed to Newsletter:</strong> ${subscribe ? "Yes" : "No"}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error in sendPopupMail:", error);
    throw error;
  }
};

module.exports = sendPopupMail;
