import {getUserProfile} from "../../Controller/userController.js";
import express from "express";
const router = express.Router();
router.get("/profile", getUserProfile);
export default router;