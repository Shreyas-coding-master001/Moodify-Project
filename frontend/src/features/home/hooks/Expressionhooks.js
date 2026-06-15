import { useContext } from "react";
import { songContext } from "../song.context.jsx";

function useExpression(){
    const context = useContext(songContext);

    return context;
}

export default useExpression;