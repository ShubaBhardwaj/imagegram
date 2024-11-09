import { uploadPost } from "../repository/postRepository.js";


// export const createPost = async (createPostObject) => {
//   console.log(`createing Post At service with: `, createPostObject);
//   try {
//     const description = createPostObject.description;
//     const image = createPostObject.image;
//     console.log(`At service layer description: ${description}, image: ${image}`);
//     const post = await uploadPost({description, image});  
//     console.log(`post(At service): `, post);
//     if(typeof description === 'string' && typeof image === 'string'){
//     return post;}
//   } catch (error) {
//     console.error(`Error creating post: ${error}`);
//     throw error;
//   }
// }

export const createPost = async (createPostObject) => {
  console.log("createing Post At service with:" , createPostObject);
  try {
    const postObject = {
      description : createPostObject.description,
      image : createPostObject.image
    }
    const post = await uploadPost(postObject);  
    console.log("post(At service):" , post);
    if(typeof description === 'string' && typeof image === 'string'){
    return post;}
  } catch (error) {
    console.error(`Error creating post: ${error}`);
    throw error;
  }
}




















// export const createPost = async (creatrePostObject) => {
//     const discription = creatrePostObject.discription;
//     const image = creatrePostObject.image;
//     // const user = creatrePostObject.user_id;
//         const post = await uploadPost({discription, image});
//         return post;

// }