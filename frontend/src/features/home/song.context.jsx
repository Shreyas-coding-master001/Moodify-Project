import { createContext, useState, useEffect } from "react";
import { getSongs } from "./service/expression.api";

export const songContext = createContext();

export function SongContextProvider({ children }){
    const [allSongs, setallSongs] = useState([]);
    const [SongsLoading, setSongsLoading] = useState(false);
    const [emotion, setEmotion] = useState("Detecting...");
    const [song, setsong] = useState({});
    const [current_idx, setcurrent_idx] = useState(0);

    

    function SelectSong() {
       if (allSongs.length === 0) return;

        const nextIdx =
            current_idx >= allSongs.length 
                ? 0
                : current_idx + 1;

        setcurrent_idx(nextIdx);
        setsong(allSongs[nextIdx]);
    }

    useEffect(() => {
        SelectSong();
    }, [allSongs]);

    const GetAllSongs = async (detectedEmotion = emotion) => {
        
        setSongsLoading(true);
        try{
            let Data = null;
            if(detectedEmotion !== "Detecting..." && detectedEmotion !== "neutral"){
                Data = await getSongs(detectedEmotion);
            }
            else alert("Unable to Detect for Current Emotion!!");
            
            setallSongs(Data.songs);
            return Data.success;
        }catch(err){
            console.log(err);
            alert("Sorry Unable to Fetch Songs");
        }finally{
            setSongsLoading(false);
        }
    }

    return (
        <songContext.Provider value = {{allSongs, setallSongs, SongsLoading, GetAllSongs, emotion, setEmotion, song, SelectSong}} >
            {children}
        </songContext.Provider>
    )
}