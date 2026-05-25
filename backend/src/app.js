import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

//Routes
import authRouter from "./routes/auth.routes.js";

dotenv.config();

export const app = express();

app.use(express.json({ limit: "1mb" }));
app.use(cors({
    origin : [process.env.CORS_ORIGIN, "http://localhost:5173"],
    credentials : true
}));
app.use(cookieParser());
if(process.env.NODE_ENV === "Production") app.use(morgan("dev"));
else app.use(morgan("tiny"));

app.use("/api/auth", authRouter);

//Initial Request : 
app.get("/", (req, res) => {
    res.status(200).json({
        success : true,
        message : "Welcome to Moodify Platform Backend",
        status : "Server is Live",
        Date : new Date()
    })
})
