// emailConfig.js
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "dadankhan096@gmail.com",
    pass: "zxhr fdmv woqv txsk"
  }
});
