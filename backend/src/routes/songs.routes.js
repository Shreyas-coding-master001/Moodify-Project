import express from "express";
import { uploadSongsController, getSongController } from "../controllers/songs.controller.js";
import { upload } from "../middleware/upload.middleware.js";
import {authMiddleware} from "../middleware/auth.middleware.js";

const songsRoute = express.Router();

//Upload Song.
songsRoute.post("/", authMiddleware, upload.single("song"), uploadSongsController);

//Get Songs
songsRoute.get("/:mood", authMiddleware, getSongController);


export default songsRoute;

