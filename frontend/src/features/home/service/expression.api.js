import axios from "axios";
import API from "../../../services/api.js";

export const getSongs = async (mood) => {
    try{
        const resp = await API.get(`/song/${mood}`)
        
        return resp.data;
    }catch(error){
        throw error;
    }
    
}