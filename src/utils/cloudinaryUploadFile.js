import {v2 as cloudinary} from 'cloudinary';
import { log } from 'console';
import fs from 'fs';

const uploadFileCloudinary = async (loacalFilePath) => { 
    try{
        const response = await cloudinary.uploader.upload('loacalFile',{
            overwrite: true,
            resource_type: 'auto',
            use_filename: true,
            unique_filename: false,
        });
        console.log("file uploaded successfully",response.url);
        return response;
    }catch(error){
        console.log(error);
        fs.unlinkSync(loacalFilePath);
        return null;
    }
}

export default uploadFileCloudinary;