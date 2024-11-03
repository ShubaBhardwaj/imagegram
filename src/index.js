import express from 'express';
import ConnectDB from './config/dbConfig.js';
import { postController } from './Controller/postController.modified.js';
import { uploader } from './config/multerConfig.js';
import { uploadServer } from './middlewares/multer.middleware.ServerUpload.js';
import { uploadCloudinery } from './middlewares/multer.middleware.CloudinaryUplad.js';
const PORT = 2000;

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.get('/', (req, res) => {
   return res.send('Hello World!');
});

app.get('/hello',(req, res) => {
    return res.send('Hello From Shubham!');
});

app.post('/posts',uploadCloudinery.single('image') , postController);
// app.post('/posts',uploadServer.single('image') , postController);
// app.post('/posts',(req, res) => {
//     return res.json({message: 'post created'});
// });

app.get('/ping/:name', (req, res) => {
    const name = req.params.name;  // example of params
    console.log(req.query); // accessing query
    console.log(req.body); // accessing body
    return res.json({message: 'pong' + ' ' + name});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    ConnectDB();
});