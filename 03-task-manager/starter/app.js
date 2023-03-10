require('./db/connect')
require('dotenv').config();

const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

const server = express();
const port=3000;

server.use(express.json());

server.get('/hello',(req,res)=>{
    res.send('<p>all items</p>')
})

server.use('/api/v1/tasks',tasks);

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        server.listen(port,()=>{
            console.log('Server is listening to port '+port+'...');
        })
    }catch(err){
        console.log(err);
    }
}

start();