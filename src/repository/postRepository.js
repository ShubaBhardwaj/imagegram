import Post from "../schema/post.js";

export const uploadPost = async (description, image, user)=>{
    try{
        const post = await Post.create({description, image, user});
        return post;
    }catch(error){
        console.log(error);
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
