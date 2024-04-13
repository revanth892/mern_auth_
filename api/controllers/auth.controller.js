import User from '../models/usermodel.js'
import bcryptjs from 'bcryptjs';
export const signup= async(req,res)=>
{
    const {username,email, password}=req.body;
    const hashpassword= bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashpassword});
    try {
        await newUser.save(); 
        return res.status(201).json({message:"User created successfully"}) 
    } catch(error)
    {
        res.status(500).json(error.message);
    }
};