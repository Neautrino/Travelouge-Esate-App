import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js';
import {z} from "zod"
import jwt from "jsonwebtoken"


export const register =async (req, res)=>{

    const{username, email, password} = (req.body);

    // hash password
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const newUser = await prisma.user.create({
            data:{
                username,
                email,
                password: hashedPassword,
            }
        });
        
        res.status(201).json({
            message: "user created successfully"
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Failed to create user"
        })
    }
}

export const login =async (req, res)=>{
    const {username, password} = req.body;

    try {
        //check user exist
        const user = await prisma.user.findUnique({
            where: {username}
        })

        if(!user){
            return res.status(401).json({
                message: "User not exists"
            })
        };

        // check password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!password){
            return res.status(401).json({
                message: "Invalid Credentials"
            })
        }
    
        // generate cookie token and send
        const age =  1000 * 60 * 60* 24 * 7;

        const token = jwt.sign({
            id: user.id,

        }, process.env.JWT_SECRET_KEY, 
        {expiresIn: age})

        res.cookie("token", token, {
            httpOnly: true,
            // secure: true,
            maxAge: age
        }).status(200).json({
            message: "Logged in successfully"
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Failed to login."
        })
    }
}

export const logout = (req, res)=>{
    res.clearCookie("token").status(200).json({
        message: "Logout successfully"
    })
}
