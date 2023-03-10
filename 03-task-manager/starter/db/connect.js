const mongoose=require('mongoose');

function connectDB(url){
    mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology:true
    }); 
}

module.exports=connectDB;