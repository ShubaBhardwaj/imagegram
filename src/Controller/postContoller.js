import { createPost } from "../services/postService.js";

export async function postController(req, res){ 
    console.log('Received request' + req.file);
   
    const postData = {
      description: req.body.description?.trim() || "", // convert undefined to empty string if missing
      image: req.file.path ? req.file.path.toString() : ""
  };
   
      //  const post = await createPost({
      //    description: req.body.description?.trim(),
      //      image: req.file.path,
      //  })

       const post = await createPost(postData);

       return res.json({ 
         success: true,
         message: 'File uploaded successfully', 
         data: post
      });
   }

      //  const Post = await creatPost({
      //    description: req.body.description,
      //      image: req.file.path,
      //  })

// return res.json({ message: 'File uploaded successfully', file: req.file, 