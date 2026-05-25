import React from 'react'
import { useNavigate } from "react-router-dom";
import authHooks from "../features/auth/hooks/authHooks";

const ProtectedRoutes = ({ children }) => {
    const { data, Protectedloading } = authHooks(true);
    const navigate = useNavigate();

    if(Protectedloading){
        return <div>Loading...</div>
    }


  return Object.keys(data).length > 0 ? children : navigate("/login");
}

export default ProtectedRoutes;