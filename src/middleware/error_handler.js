
const ErrorModel = require("../exception/error_model");



function CustomErrorHandler (err , req , res , next){

    res.json(ErrorModel("jhaat" , "saala"));

}