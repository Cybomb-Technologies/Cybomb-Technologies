const nodemailer = require("nodemailer");
require("dotenv").config();

const sendFooterMail = async (subscriberEmail) => {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g. "smtp.gmail.com"
      port: 587, // 465 if using SSL
      secure: false, // true for port 465, false for 587
      auth: {
        user: process.env.SMTP_USER, // your email
        pass: process.env.SMTP_PASS, // your password / app password
      },
    });

    // Define email content
    const mailOptions = {
      from: `"Cybomb Technologies" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL, // Where you want to receive subscriptions
      subject: "New Subscription",
      text: `New subscriber: ${subscriberEmail}`,
      html: `<p><strong>New Subscriber:</strong> ${subscriberEmail}</p>`,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Subscription email sent:", subscriberEmail);
    return info;

  } catch (err) {
    console.error("❌ Error sending email:", err);
    throw err;
  }
};

module.exports = sendFooterMail;
