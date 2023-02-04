
const mongoose = require("mongoose");
const morgan = require('morgan');
const express = require("express");
const AppError = require('./src/util/appError');
const globalErrorHandler = require('./src/controller/error_controller');
const app = express();
const CustomErrorHandler = require("./src/middleware/error_handler")


const userRouter = require("./src/routes/user_route");

const bodyParser = require("body-parser");
const authRouter= require("./src/routes/auth_route"); 


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
app.use(bodyParser.json());
app.use ((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    //console.log(req.headers);
    
    next();

})
app.use('/user', userRouter);


app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });
  
  app.use(globalErrorHandler);
  




module.exports=app;

