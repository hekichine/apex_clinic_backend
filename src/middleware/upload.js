import multer from "multer";
import slugify from "../handle/slug";

let prefix = Date.now();

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isvalid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("invalid image type");
    if (isvalid) {
      uploadError = null;
    }
    cb(uploadError, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname
      .toLowerCase()
      .replace(/\.[^.]*$/, "")
      .split(" ")
      .join("-")
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${prefix}-${slugify(fileName)}.${extension}`);
  },
});

const upload = multer({ storage: storage });

export default upload;