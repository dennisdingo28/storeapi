const express = require('express');
const {people}=require('./data');
const server = express();

server.get('/',(req,res)=>{
    res.send(`re`);
})
server.get('/api/people',(req,res)=>{
    console.log('rq api');
    res.status(200).send({success:true,data:people});
});

server.post('/api/postman/people',(req,res)=>{
    const {name}=req.body;
    if(!name){
        return res.status(404).json({success:true,msg:'please provide name value'})
    }   
    res.status(201).send({success:true,data:[...people,name]});
});

server.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})