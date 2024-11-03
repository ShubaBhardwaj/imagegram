import { text } from "express";
import mongoose from "mongoose";
// import User from "./user";
const postSchema = new mongoose.Schema({

    description:{
       text: {
        type: String,
        required: true
       }
    },

    image:{
        type: String,
        required: true,
    },

    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

},{timestamps: true,});

const Post = mongoose.model("Post",postSchema);
export default Post;