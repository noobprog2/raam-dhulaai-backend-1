const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
// import mongoose, { mongo } from "mongoose"

//practicing 
const userSchema = new mongoose.Schema({
    name: {
        type: String , 
        required: [true,'Please enter your name!']
        
    }, 
    email: {
        type : String ,
        required: [true,'Please enter your email!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail,'Please provide a valid email']
    },
    phone: String, 

    role:{
        type:String,
        enum:['user','guide','lead-guide','admin'],
        default: 'user'

    },
    password: {
        type: String,
        required :[true,'Please enter your password!'],
        minlength: 6,
        select : false
    },
    passwordConfirm:{
        type:String,
        required: [ true, ' Please confirm your password'],
        validate:{
            //this only works on create and save
            validator: function(el){
                return el === this.password; 
            },
            message: 'Passwords are not the same!'
        }
    },
    passwordChangedAt: 
        Date,

    avatar:{
        type:String
    }
    
});
userSchema.pre('save', async function(next){
    // Oly run this function if password was actually modified
    if (!this.isModified('password'))return next();
    //hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    //Delete passwordConfirm
    this.passwordConfirm = undefined;
    next();

});

userSchema.methods.correctPassword = async function
(candidatePassword, 
    userPassword){
    return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function(JWTTimestamp){
    if(this.passwordChangedAt){
        const changedTimestamp = parseInt(this. passwordChangedAt.getTime()/1000,10);
        console.log(changedTimestamp, JWTTimestamp);
        return JWTTimestamp< changedTimestamp;
    }
    //if false then not changed
    return false;
};



const User= mongoose.model('User',userSchema);
module.exports = User;