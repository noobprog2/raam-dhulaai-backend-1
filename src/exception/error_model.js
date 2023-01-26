


class ErrorModel extends Error{



    constructor(errorTitle , message , statusCode){
        super(errorTitle , message , statusCode);
        this.errorTitle = errorTitle;
        this.message = message; 
        this.statusCode = statusCode;
    }

}


module.exports = ErrorModel;





