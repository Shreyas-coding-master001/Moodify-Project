import { useContext, useEffect } from "react";
import { authContext } from "../auth.context";

function authHooks(called) {
    const context  = useContext(authContext);

    useEffect(() => {
        if(called) {
            context.getUserData();
        }
    }, []);

    return context;
}

export default authHooks;