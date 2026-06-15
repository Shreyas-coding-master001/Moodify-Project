import ImageKit, { toFile } from "@imagekit/nodejs";
import {config} from "../config/config.js";

const client = new ImageKit({
    privateKey : config.PRIVATE_KEY_IMAGE_KIT   
});

async function uploadFile({buffer, filename, folder = "/Moodify_Songs"}){
    try{
        const song = await client.files.upload({
            file: await toFile(Buffer.from(buffer)),
            fileName: filename,
            folder
        })

        return song;
    }catch(err){
        console.error("Error uploading to imagekit :",err);
    }
}

export default uploadFile;
