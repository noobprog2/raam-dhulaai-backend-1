
const mongoose = require("mongoose");
const morgan = require('morgan');
const express = require("express");
const AppError = require('./src/util/appError');
const globalErrorHandler = require('./src/controller/error_controller');
const app = express();
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const userRouter = require("./src/routes/user_route");
const hpp = require('hpp');
const bodyParser = require("body-parser");
const authRouter= require("./src/routes/auth_route"); 
//for setting security HTTP headers
app.use(helmet())

// development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

///for limiting request from same API 
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 *1000,
  message: ' Too many requests from this IP , please try again in an hour!' 
});
app.use('/user',limiter);


//reading data from body into req.body
app.use(bodyParser.json({limit: '10kb'}));

//data sanitization against NoSQL rquery injection 
app.use(mongoSanitize());
//data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price'
    ]
  })
);

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

