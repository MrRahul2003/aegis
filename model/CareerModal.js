import mongoose from "mongoose";

// Resume us Schema
const ResumeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    resume: {
      type: String,
    },
  }
);

const Resume = mongoose.model("Resume", ResumeSchema);
export default Resume;
