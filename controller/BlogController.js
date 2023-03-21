// importing Schema

import Blog from "../model/BlogModal.js";

const addBlog = async (req, res) => {
  try {
    console.log("addBlog", req.body, req.file);
    
    const photo = req.file === undefined ? "" : req.file.filename;
    console.log(photo);

    const data = {
      photo: photo,
      name: req.body.name,
      location: req.body.location,
      desc: req.body.desc
    };

    const newBlog = new Blog(data);
    await newBlog.save();

    return res.status(200).json(newBlog);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

const showBlogs = async (req, res) => {
  try {
    
    const allBlog = await Blog.find({});

    return res.status(200).json(allBlog);

  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

export { addBlog, showBlogs };
