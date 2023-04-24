// importing Schema

import Resume from "../model/CareerModal.js";

const addResume = async (req, res) => {
  try {
    console.log("addResume", req.body, req.file);
    
    const resume = req.file === undefined ? "" : req.file.filename;
    console.log(resume);

    const data = {
      resume: resume,
      name: req.body.name,
      email: req.body.email
    };

    const newResume = new Resume(data);
    await newResume.save();

    return res.status(200).json(newResume);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};


export { addResume };
