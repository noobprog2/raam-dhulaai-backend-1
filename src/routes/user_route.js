const express  = require("express");
const router = express.Router();
const User = require("../model/User")
// const bodyParser = require("body-parser")



router.get("/" , async(req , res) => {

    try{
        const user = await User.find();
        res.json({user});
    }catch (e){
        res.json({message : e});
    }
    res.send("get req hit on user");
})

router.post("/" , async (req , res) => {

    const user = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone

    });

    try{
        await user.save();
        res.json({user});
    }catch (e){
        res.json({message: e});
    }


    console.log(req.body);    
});

router.get("/:name" , async(req ,res) => {


    try{
        const user = await User.find({ name : req.params.name});
        res.json(user);
    }catch (e){
        res.json({message: e});
    }

})

module.exports = router;