import express from 'express';
import connectDb from './config/db.js';
import post from './routes/post.js'
import fetch from './routes/fetch.js'
import cors from "cors"

const app = express();
const port = 4000;
app.use(express.json());
app.use(cors({origin:"*"}));


await connectDb();

app.get('/',(req,res)=>{
  res.send('hello world');
})

app.use('/post',post);
app.use('/fetch',fetch)

app.listen(port,()=>console.log('app listening to server'));
