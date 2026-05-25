import userSchema from "../models/auth.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import  {config}  from "../config/config.js";
import redis from "../config/cache.js";

/**
 * @route POST /api/auth/resgister
 * @param {email, password, username, role} req.body 
 * @description This controller handles user registration. It checks if the user already exists, hashes the password, creates a new user, and returns a JWT token in a cookie.
 * @returns res.status(201).json({sucess, message, user}) if success, else handle errors accordingly
 */
export async function registerController(req, res){
    const { email, password, username, role, gender } = req.body;
    
    const existingUser = await userSchema.findOne({ 
        $or:[{ email }, { username }]
    });

    if(existingUser){
        return res.status(400).json({
            success : false,
            message : "User Already Exists, Please Login Instead"
        })
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    
    if(!hashPassword){
        console.error("Error hashing password", err);
        return res.status(500).json({
            success : false,
            message : "Internal Server Error"
        })
    }

    let user = null;

    try{
        user = await userSchema.create({
            email,
            password: hashPassword,
            username,
            role,
            gender
        });
    }catch(err){
        console.error("Error creating user", err);
        return res.status(500).json({
            success : false,
            message : "Internal Server Error"
        })
    }
    delete user.password;
    
    const token = await jwt.sign({id: user._id}, config.JWT_SECRET);
    
    if(!token){
        console.error("Error signing token", err);
        return res.status(500).json({
            success : false,
            message : "Internal Server Error"
        })
    }

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "Production",
        sameSite: process.env.NODE_ENV === "Production" ? "none" : "lax",
        maxAge: 24 * 60 * 60 * 1000 
    });

    res.status(200).json({
        success: true,
        message: "User registered successfully",
        user: {
            email: user.email,
            username: user.username,
            role: user.role
        }
    });
}

/**
 * @route POST /api/auth/login
 * @param {email, password} req.body 
 * @description This controller handles user login. It checks if the user exists, compares the password, and returns a JWT token in a cookie if successful.
 * @returns res.status(201).json({success : true, message: "", user}) if success, else handle errors accordingly
 */
export async function loginController(req, res){
    const { email, password } = req.body;

    const user = await userSchema.findOne({ email }).select("+password");

    if(!user) return res.status(400).json({
        success : false,
        message : "Invalid Credentials"
    });

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) return res.status(400).json({
        success : false,
        message : "Invalid Credentials"
    });

    const token = await jwt.sign({id: user._id}, config.JWT_SECRET);

    if(!token){
        console.error("Error signing token", err);
        return res.status(500).json({
            success : false,
            message : "Internal Server Error"
        })
    }

    res.cookie("token", token, {
        // httpOnly: true,
        secure: process.env.NODE_ENV === "Production",
        sameSite: process.env.NODE_ENV === "Production" ? "none" : "lax",
        maxAge: 24 * 60 * 60 * 1000 
    });

    res.status(201).json({success: true, message: "Logged in successfully",
        user: {
            email: user.email,
            username: user.username,
            role: user.role
        }
    });

}

/**
 * @route GET /api/auth/get-user
 * @description This controller retrieves the logged-in user's information.
 */
export async function getUserController(req, res){
    const user = req.user

    res.status(200).json({
        success : true,
        user : {
            email: user.email,
            username: user.username,
            role: user.role,
            gender: user.gender
        }
    });
}

/**
 * @route Get /api/auth/logout
 * @description This controller handles user logout. It clears the JWT token cookie.
 * @returns res.status(200).json({success : true, message: "Logged out successfully"}) if success, else handle errors accordingly
 */
export async function LogoutController(req, res){
    const token = req.cookies.token;

    try{
        await redis.set(token, "blacklisted", "EX", 24 * 60 * 60);
    }catch(err){
        console.error("Error blacklisting token in Redis\n", err);
        return res.status(500).json({
            success : false,
            message : "Logout Failed"
        })
    }

    res.clearCookie("token");

    res.status(200).json({
        success : true,
        message : "Logged out successfully"
    });
}