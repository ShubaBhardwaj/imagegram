import express from 'express';
import ConnectDB from './config/dbConfig.js';
import apiRouter from './Routers/apiRouter.js';

const PORT = 2000;

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

// app.use('/posts',postRoute);
// app.use('/user',userRoute);
// now we going to use the nested routers, because of the clean code

app.use('/api',apiRouter);








app.get('/', (req, res) => {
   return res.send('Hello World!');
});

app.get('/hello',(req, res) => {
    return res.send('Hello From Shubham!');
});

// app.post('/posts',uploadCloudinery.single('image') , postController);  //Now we don't need this because we are using the routers now


app.get('/ping/:name', (req, res) => {
    const name = req.params.name;  // example of params
    console.log(req.query); // accessing query
    console.log(req.body); // accessing body
    return res.json({message: 'pong' + ' ' + name});
});

app.post('/ping', (req, res) => {
    return res.json({message: 'pong'});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    ConnectDB();
});