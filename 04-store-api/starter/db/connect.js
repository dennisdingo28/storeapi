const mongoose = require('mongoose');

const connectDB = (url)=>{
  mongoose.connect(url,{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:true
  })
}

module.exports = connectDB;