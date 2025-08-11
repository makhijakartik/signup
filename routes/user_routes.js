const express = require('express');
const userRoute = express.Router();
const { User } = require('../db');

userRoute.post('/signup',async (req,res)=>{
    const {name,email,password} = req.body;

    if(!name || !email || !password){
        return res.status(404).json({
            message : "Give all credentials"
        });
    };

    try {
        const user = await User.findOne({email});
        if(user){
            return res.status(404).json({
                message : "User already exists"
            }); 
        };
        const newuser = await User.create({name,email,password});
        res.json({
            message : "User created successfully",
            user : newuser
        });

    } catch (error) {
        console.log(error);
        res.json({
            message : "Error"
        });
    };
});

userRoute.get('/allUsers',async (req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        console.log(err);
        res.json({
            message : "Error"
        })
    }
});

userRoute.post('/signin',async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(404).json({
            message : "Give all credentials"
        });
    };
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                message: "user not found"
            });
        };

        if(user.password != password){
            return res.status(404).json({
                message : "Invalid password"
            });
        };

        res.json({
            message : "User logged in successfully",
            user : {
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.log(error);
        res.json({
            message : "Error"
        });
    };

})

module.exports= {
    userRoute
}