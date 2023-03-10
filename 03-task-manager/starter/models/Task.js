const moongose = require('mongoose');

const TaskSchema = new moongose.Schema({
    name:{
        type:String,
        required:[true,'must provide a name'],
        maxlength:[20,'name can not be more than 20 characters'],
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
});

module.exports=moongose.model('Task',TaskSchema);