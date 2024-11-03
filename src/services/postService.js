
import { uploadPost } from "../repository/postRepository.js";

// export const createPost = async (creatrePostObject) => {
//     const discription = creatrePostObject.discription;
//     const image = creatrePostObject.image;
//     // const user = creatrePostObject.user_id;
//         const post = await uploadPost({discription, image});
//         return post;

// }

export const createPost = async (createPostObject) => {
  try {
    const description = createPostObject.description;
    const image = createPostObject.image;
    const post = await uploadPost({ description, image});
    console.log(`Post create at cloudinary is successfully: ${post}`);
    return post;
  } catch (error) {
    console.error(`Error creating post: ${error}`);
    throw error;
  }
}