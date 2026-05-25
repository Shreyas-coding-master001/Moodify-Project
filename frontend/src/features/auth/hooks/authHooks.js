import { useContext, useEffect } from "react";
import { authContext } from "../auth.context";

function authHooks(called) {
    const context  = useContext(authContext);

    useEffect(() => {
        if(called) {
            context.getUserData();
            console.log("Context Data: ",context.data);
        }
    }, []);

    return context;
}

export default authHooks;