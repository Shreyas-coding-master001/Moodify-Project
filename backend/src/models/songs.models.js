import mongoose from "mongoose";

const songsSchema = new mongoose.Schema({
    url : {
        type : String,
        required : [true, "Songs URL required"],
    },
    poster : {
        type : String,
        required : [true, "Poster is Required for song"]
    },
    title : {
        type : String,
        required: [true, "Title is required"]
    },
    artist : {
        type: String,
        required: [true , "Artists name is Required"]
    },
    mood : {
        type : String,
        enum : ["happy", "sad", "surprise", "angry"],
        default: "happy",
        required: [true, "Mood of song must be required"]
    }
});

const songs = mongoose.model("songs", songsSchema);

export default songs;