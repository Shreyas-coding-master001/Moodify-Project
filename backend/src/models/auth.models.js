import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    username: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        default: "other"
    },
    role: {
        type: String,
        enum: ["user", "admin", "artist"],
        default: "user"
    }
},{
    timestamps: true
});

const User = mongoose.model("user", userSchema);

export default User;