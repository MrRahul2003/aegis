"use strict";
// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";

const sendMail = async (req, res) => {
  try {
    console.log("sendMail", req.body);

    const bodyMsg = req.body.message;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "rahulsdas2003@gmail.com",
        pass: "fuzxewghibfceunh"
      },
    });

    let details = {
      from: "rahulsdas2003@gmail.com",
      to: "rahulsdas2004@gmail.com",
      subject: "Hello ✔ New Request for contacting AEGIS projects",
      text: bodyMsg
    }

    // send mail with defined transport object
    // let info = await transporter.sendMail({
    //   from: `"${req.body.name} 👻" <rahulsdas2003@gmail.com>`, // sender address
    //   to: "rahulsdas2003@gmail.com", // list of receivers
    //   subject: "Hello ✔ New Request for contacting AEGIS projects", // Subject line
    //   text: `${req.body.name}`, // plain text body
    //   html: `${req.body.name} + ' ' + ${req.body.email} + ' ' + ${req.body.message}`, // html body
    // });
    let info = await transporter.sendMail(details);

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    return res.status(200).json(info);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

export { sendMail }
