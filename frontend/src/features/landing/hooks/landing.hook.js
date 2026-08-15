import { ServerWakeup } from "../server/server.api.js";

async function useLanding(){
    try{
        await ServerWakeup();
    }catch(err){
        console.error(err);
        
    }
}

export default useLanding;