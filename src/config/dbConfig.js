import { DB_URL } from './ServerConfig.js';

// const mongoose = require('mongoose');
import mongoose from 'mongoose';

export default async function ConnectDB() {
    try{
        console.log("MongoDB Connected");
        await mongoose.connect(DB_URL);
        

    }catch(error){
        console.log("MongoDB Connection Failed");
        console.log(error);
    }
}