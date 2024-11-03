import Post from "../schema/post.js";


export const uploadPost = async (description, image)=>{
    try{
        console.log("Creating a new post with:", { description, image });
        // const post = await Post.create({description, image, user});
        const newPost = new Post({ description, image});
        await newPost.save();
        console.log("Post created successfully:", newPost);
        return newPost;   
    }catch(error){
        // console.error("Error creating post:", error);
        return { error: 'Failed to create post' }; // return an error object
    }
}

export const findAllPosts = async ()=>{
    try{
        const posts = await Post.find();
        return posts;
    }catch(error){
        console.log(error);
    }
}

export const findPostById = async (id)=>{
    try{
        const post = await Post.findById(id);
        return post;
    }catch(error){
        console.log(error);
    }
}

export const DeletePost = async (id)=>{
    try{
        const post = await Post.findByIdAndDelete(id);
        return post;
    }catch(error){
        console.log(error);
    }
}


export const UpdatPostDiscription = async (id, discription,)=>{
    try{
        const post = await Post.findByIdAndUpdate(id, {discription});  
        return post;
    }catch(error){
        console.log(error);}
}

export const UpdatPostImage = async (id, image)=>{
    try{
        const post = await Post.findByIdAndUpdate(id, {image});  
        return post;
    }catch(error){
        console.log(error);}
}
