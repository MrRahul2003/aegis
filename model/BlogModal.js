import mongoose from "mongoose";

// Blog us Schema
const BlogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    location: {
      type: String,
    },
    desc: {
      type: String,
    },
    photo: {
      type: String,
    },
  }
);

const Blog = mongoose.model("Blog", BlogSchema);
export default Blog;
