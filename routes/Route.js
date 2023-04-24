import express from "express";

// controllers
import { addContact } from "../controller/ContactController.js";
import { sendMail } from "../controller/MailController.js";
// import { addBlog, showBlogs } from "../controller/BlogController.js";
import { addResume } from "../controller/CareerController.js";

// middleware
// import { storage, upload } from "../middleware/BlogMiddleware.js";
import { storage, upload } from "../middleware/CareerMiddleware.js";

const route = express.Router();

route.post("/contact/add", addContact);
route.post("/contact/sendmail", sendMail);

// route.post("/blog/addblog", upload.single(["photo"]), addBlog);
// route.get("/blog/showblogs", showBlogs);

route.post("/resume/addresume", upload.single(["resume"]), addResume);

export default route;
