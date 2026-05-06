import mongoose from "mongoose";
import { config } from "./config.js";

function connectDB(){
    mongoose.connect(config.MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => {
        console.error("Error Connecting to MongoDB")
        console.log(err);
    })
}

export default connectDB;