const CustomAPIError = require('./custom-error');
const {StatusCodes}=require('http-status-codes');

class UnauthenticatedError extends CustomAPIError {
    constructor(message){
        super(messaage);
        this.statusCode=StatusCodes.UNAUTHORIZED;
    }
}

module.exports=UnauthenticatedError;