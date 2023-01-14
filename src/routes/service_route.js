const express = require('express')
const router = express.Router();
const Service = require('../model/Service');

router.get("/",async(req,res)=> {
    try{
        const service = await Service.find();
        res.json({service})
    }
    catch (e){
        res.json({msg: e})

    }
})
module.exports = router