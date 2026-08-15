import { API2 } from "../../../services/api";

export async function ServerWakeup(){
    try{
        const resp = await API2.get("/");
    }catch(error){
        throw error;
    }
}