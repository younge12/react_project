import AWS from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";

const accessKeyId = "AKIA2ZJO7TKBLHMQ73PV";
const secretAccessKey = "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";

const s3 = new AWS.S3({ accessKeyId, secretAccessKey });
const bucket = "nepp-insta";

const config = {
  s3,
  bucket,
  acl: "public-read",
  metaData: (req, file, cb) => {
    cb(null, { fileName: file.filedname });
  },
  Key: (req, file, cb) => {
    cb(null, `images/${Data.now().toString()}/${file.originalname}`);
  },
};

const upload = multer({ storage: multerS3(config) });
export default upload;
