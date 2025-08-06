const nodemailer = require("nodemailer");

(async () => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "sudesh.t@cybomb.com",
        pass: "Cybomb@1234", // check password
      },
    });

    await transporter.sendMail({
      from: "sudesh.t@cybomb.com",
      to: "sudesh.t@cybomb.com",
      subject: "Test Email",
      text: "This is a test email from Node.js",
    });

    console.log("✅ Email sent!");
  } catch (err) {
    console.error("❌ Error:", err);
  }
})();
