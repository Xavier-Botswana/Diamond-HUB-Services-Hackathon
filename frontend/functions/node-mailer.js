const nodemailer = require("nodemailer");
const config = require("./mail-config");

// Step 1
const transporter = nodemailer.createTransport({
  host: config.smtphost,
  port: config.smtpport,
  auth: {
    user: config.user,
    pass: config.pass,
  },
});

const sendEmail = (message, base64String, email) => {
  // Step 2
  const mailOptions = {
    from: `Botswana Diamond Hub<techteam@xavierafrica.com>`,
    to: email,
    subject: "CERTIFICATE ISSUANCE",
    text: "Your new  certificate has been created",
    html: message,
    attachments: [
      {
        filename: "certificate.pdf",
        content: base64String,
        encoding: "base64",
      },
    ],
  };
  // Step 3
  return new Promise((resolve, reject) => {
    try {
      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          // reject(`Error occured: ${err}`)
          console.error(err);
        }
        resolve(`Email sent. ${data}`);
      });
    } catch (error) {
      // reject(`Error occured: ${error}`)
      console.error(error);
    }
  });
};

module.exports = {
  sendEmail,
};
