import express from "express";
const router = express.Router();

import postRoute from './post.js';
import userRoute from './user.js';

router.use('/posts',postRoute);
router.use('/user',userRoute);

export default router;