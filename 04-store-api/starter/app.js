require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const productsRouter = require('./routes/products');

const errorHandlerMiddleware=require('./middleware/error-handler');
const notFound=require('./middleware/not-found')
const connectDB=require('./db/connect')
app.get('/',(req,res)=>{
    res.send('<h1>home page</h1><a href="/api/v1/products">products</a>')
});
app.use('/api/v1/products',productsRouter);

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`Server is listening on port ${port}`));
    }catch(err){
        console.log(err);
    }
}
start();
