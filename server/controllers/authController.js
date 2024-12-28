const express = require('express'); 
const bcrypt = require('bcryptjs'); 
const jwt = require("jsonwebtoken");
const User = require('../models/user')
const { generateToken } = require('../utils/jwtUtils');
const router = express.Router(); 

/** 
 * Regsiter a new User
 * Encrypts password and save user to the database
 */

exports.register = async (req,res)=>{
    const {username,email,password} = req.body; 

    //Check if the user already exists
    const existingUser = await User.findOne({email}); 
    if(existingUser){
        return res.status(400).json({message:"User already exists"})
    }

    //Hash Password before saving 
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new User({
        username,
        email, 
        password : hashedPassword
    }); 

    //Save the new user to the database 
    await newUser.save();

    //Return a Token 
    const token = generateToken(newUser._id);

    //Send response 
    res.status(201).json({message:"User created successfully!", token : token})
}; 

/**
 * Login a User
 * Compares password and return the token 
 */
exports.login =  async (req,res)=>{
    const {username,password} = req.body; 

    //Find user by email 
    const user = await User.findOne({username}); 
    if(!user){
        return res.status(400).json({message: "Invalid Credentials : User doesn't exist"});
    }

    //Compare password with the hashed password in the the database 
    const ismatch = await bcrypt.compare(password, user.password); 

    if(!ismatch){
        return res.status(400).json({message:"Invalid Credintials : Incorrect Password"})
    }

    //Return a Token 
    const token = generateToken(user._id);
    res.status(200).json({ token });
}


/**
 * Dummy Endpoints
 */
exports.profile =  async (req,res)=>{
    const {userId} = req.user; 

    //Find user by id 
    const user = await User.findById(userId); 
    if(!user){
        return res.status(500).json({message: "User doesn't exist. User might no longer exist in the systerm."});
    }

    return res.status(200).json({'user':user});
    
}


