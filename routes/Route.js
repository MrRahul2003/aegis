import express from "express";

// controllers
import { addContact } from "../controller/ContactController.js";
import { sendMail } from "../controller/MailController.js";

const route = express.Router();

route.post("/contact/add", addContact);
route.post("/contact/sendmail", sendMail);

export default route;
