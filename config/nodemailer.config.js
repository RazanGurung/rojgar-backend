const nodemailer = require("nodemailer");
const config = require("../config/user.config");

const user = config.user;
const pass = config.pass;

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  
  module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
    transport
      .sendMail({
        from: user,
        to: email,
        subject: "Please confirm your account",
        html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=https://rojgar-com.herokuapp.com/verify/user/${confirmationCode}> Click here</a>
          </div>`,
      })
      .catch((err) => console.log(err));
  };

  module.exports.sendForgetPasswordConfirmation = (email, confirmationCode) => {
    transport
      .sendMail({
        from: user,
        to: email,
        subject: "Password Reset Link",
        html: `<h1>Forget Password</h1>
          <p>Click the following link to reset your password</p>
          <a href=https://rojgar-com.herokuapp.com/forget/password/update/${confirmationCode}> Click here</a>
          </div>`,
      })
      .catch((err) => console.log(err));
  };