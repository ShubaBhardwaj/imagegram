import { CloudinaryStorage } from "@fluidjs/multer-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    },
    params: {
      folder: 'uploads',  // Optional: Folder for uploaded files in Cloudinary
      allowed_formats: ['jpg', 'jpeg', 'png'],  // Optional: Restrict allowed file types
      transformation: [{ width: 500, height: 500, crop: 'limit' }] // Optional: Apply image transformations on upload
    }
  });
  
export  const uploadCloudinery = multer({ storage: storage });