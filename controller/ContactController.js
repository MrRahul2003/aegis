// importing Schema

import Contact from "../model/ContactSchema.js";

const addContact = async (req, res) => {
  try {
    console.log("addcontact", req.body);

    const newContact = new Contact(req.body);
    await newContact.save();

    return res.status(200).json(newContact);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

export {addContact}
