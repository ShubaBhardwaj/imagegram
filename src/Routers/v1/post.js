import express from "express";
import { uploadCloudinery } from "../../middlewares/multer.middleware.CloudinaryUplad.js";
import { postController } from "../../Controller/postContoller.js";
const router = express.Router();

router.post("/",uploadCloudinery.single('image') , postController);

export default router;