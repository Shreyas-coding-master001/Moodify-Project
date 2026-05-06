import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

export const app = express();

app.use(express.json({ limit: "1mb" }));
if(process.env.NODE_ENV === "Production") app.use(morgan("dev"));
else app.use(morgan("tiny"));

//Initial Request : 
app.get("/", (req, res) => {
    res.status(200).json({
        success : true,
        message : "Welcome to Moodify Platform Backend",
        status : "Server is Live",
        Date : new Date()
    })
})
