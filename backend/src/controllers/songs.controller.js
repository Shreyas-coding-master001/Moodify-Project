import NodeID3 from "node-id3";
import songsModel from "../models/songs.models.js";
import uploadFile from "../services/imagekit.service.js";

/**
 * @param { song } req.file song,title,image...
 * @param { mood } req.body  happy,sad...
 * @description Uploads an song to DB using multer and Node-id3 in imagekit
 */
export async function uploadSongsController(req, res){
    const songBuffer = req.file.buffer;
    const tags = NodeID3.read(songBuffer); //reads the Buffers and tells inner(mal/content)
    const { mood } = req.body;
    

    const [ songFile, imageUpload ] = await Promise.all([
        await uploadFile({
            buffer : songBuffer,
            filename: tags.title,
            folder : "/Moodify_Songs/songs"
        }),    
        await uploadFile({
            buffer : tags.image.imageBuffer,
            filename : tags.title + ".jpeg",
            folder : "/Moodify_Songs/posters"
        })
    ])

    const song = await songsModel.create({
        url : songFile.url,
        poster : imageUpload.thumbnailUrl,
        title : tags.title,
        artist: tags.artist,
        mood: mood.toLowerCase()  
    });

    if(!song) return res.status(500).json({
        success : false,
        message : "Unable to Store this Song to DB"
    })

    res.status(201).json({success: true, 
        meesage: "Song Stored Successfully",
        song
    });
}


/**
 * @param { mood } req.params  happy,sad...
 * @description Gets all songs as per the mood!!
 */
export async function getSongController(req, res){
    const mood = req.params.mood;

    const songs = await songsModel.find({mood});

    if(songs.length === 0) return res.status(500).json({
        success : false,
        message : "Unable to Get any Songs"
    })

    res.status(200).json({ 
        success : true,
        message: "Songs Sent Successfully",
        songs
    })
}

