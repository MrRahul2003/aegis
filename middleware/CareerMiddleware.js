import multer from "multer";
import path from "path"; 
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }

    if (!fs.existsSync("public/resume")) {
      fs.mkdirSync("public/resume");
    }

    cb(null, "public/resume");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    console.log(ext);

    if (ext !== ".pdf") {
      return cb(new Error("only pdf are allowed !"));
    }

    cb(null, true);
  },
});

export {storage, upload};
