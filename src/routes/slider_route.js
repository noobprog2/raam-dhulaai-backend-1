const express = require('express');
const Slide = require('../model/Slider');


router.get("/" , (req , res) => {
    try{
        const sliders = Slide.find();
    }catch (e){
            
    }
})



const router = express.router();