import express from "express";

// controllers
import { addContact } from "../controller/ContactController.js";

const route = express.Router();

route.post("/contact/add", addContact);

export default route;
