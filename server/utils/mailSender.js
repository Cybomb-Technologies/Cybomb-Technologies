const nodemailer = require("nodemailer");

const sendMail = async ({ firstName, email, phone, source, message }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
      user: "sudesh.t@cybomb.com",
      pass: "Cybomb@1234",
    },
  });

  // 👇 Add this log check
  transporter.verify((error, success) => {
    if (error) {
      console.error("❌ SMTP Connection Error:", error);
    } else {
      console.log("✅ SMTP Server is ready to take our messages");
    }
  });

  const mailOptions = {
    from: `"Website Form" <sudesh.t@cybomb.com>`,
    to: "sudesh.t@cybomb.com",
    subject: `New Inquiry from ${firstName}`,
    html: `
      <h3>📩 New Contact Form Submission</h3>
      <p><b>Name:</b> ${firstName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || 'N/A'}</p>
      <p><b>Source:</b> ${source || 'Website'}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
