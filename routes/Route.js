import express from "express";

// controllers
import { addContact } from "../controller/ContactController.js";
import { sendMail } from "../controller/MailController.js";
import { addResume } from "../controller/CareerController.js";

// middleware
import { storage, upload } from "../middleware/CareerMiddleware.js";

const route = express.Router();

route.post("/contact/add", addContact);
route.post("/contact/sendmail", sendMail);

route.post("/resume/addresume", upload.single(["resume"]), addResume);

export default route;
