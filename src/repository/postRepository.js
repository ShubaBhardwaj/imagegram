import Post from "../schema/post.js";

// in uploadPost we will create a new post first i did it with async function but it did not work 
// so i changed it to sync function now it respose and give the output in postman but not giving the description
export const uploadPost =  ({description, image})=>{
    try{
        console.log("Uploading post(Repository) a new post with:", { description, image });
        const newPost = new Post({ description, image});
        newPost.save().then((post) => {
            console.log("Post created successfully(Repository):", post);
            return post;
        }).catch((error) => {
            // console.error("Error creating post:", error);
            return { error: 'Failed to create post' }; // return an error object
        });
        console.log("Post created successfully(Repository):", newPost);
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
