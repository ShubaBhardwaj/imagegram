import multer from "multer";
import { CloudinaryStorage } from "@fluidjs/multer-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import { cloudinaryConfig } from "./cloudinaryConfig.js";



const cloudinaryStorage = new CloudinaryStorage({
    cloudinary: cloudinaryConfig,
    acl: 'public_read',
    key: function (req, file, cb) {
        console.log(file);
        uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
    },
    params: {
        folder: 'uploads',
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
      },
})

export const uploader = multer({
    storage: cloudinaryStorage,
})
