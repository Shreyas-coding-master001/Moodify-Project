import jwt from "jsonwebtoken";
import { config } from  "../config/config.js";
import userSchema from "../models/auth.models.js";

export async function authMiddleware(req, res, next){
    const token = req.cookies.token;
    let ID = null;

    if(!token){
        return res.status(401).json({
            success : false,
            message : "Unauthorized"
        })
    }

    try{
        ID = await jwt.decode(token, config.JWT_SECRET).id;        
    }catch(err){
        console.error("Error decoding token\n", err);
        return res.status(401).json({
            success : false,
            message : "Unauthorized"
        })
    }

    const user = await userSchema.findById(ID);

    if(!user){
        console.error("User not found for ID: ", ID);
        return res.status(400).json({
            success : false,
            message : "User not found"
        });
    }

    req.user = user;

    next();
}