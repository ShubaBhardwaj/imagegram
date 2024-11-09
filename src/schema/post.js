import { text } from "express";
import mongoose from "mongoose";
// import User from "./user";
const postSchema = new mongoose.Schema({

    description:{
        type: String,
        required: true
    },

    image:{
        type: String,
        required: true,
    },

},{timestamps: true,});

const Post = mongoose.model("Post",postSchema);
export default Post;


// we will add user later 
    // user_id:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    // },