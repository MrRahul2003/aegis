import mongoose from "mongoose";

// Contact us Schema
const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    message: {
      type: String,
    },
  }
);

const Contact = mongoose.model("Contact", ContactSchema);
export default Contact;
