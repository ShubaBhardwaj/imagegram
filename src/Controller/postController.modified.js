import { createPost } from "../services/postService.js";

export async function postController(req, res) { 
    console.log('Received request:', req.file);

    // Ensure that `description` is a string and not undefined
    const description = req.body.description?.trim() || '';
    const image = req.file?.path;

    if (!description) {
        return res.status(400).json({
            success: false,
            message: "Description is required and should be a valid string."
        });
    }

    if (!image) {
        return res.status(400).json({
            success: false,
            message: "Image is required and should be a valid file path."
        });
    }

    try {
        // Pass `description` and `image` as separate fields
        const post = await createPost({ description, image });

        return res.json({ 
            success: true,
            message: 'File uploaded successfully', 
            data: post
        });
    } catch (error) {
        console.error("Error creating post:", error);
        return res.status(500).json({
            success: false,
            message: 'Failed to create post',
            error: error.message
        });
    }
}
