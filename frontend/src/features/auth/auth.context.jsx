import { createContext, useContext, useState, useEffect } from "react";
import { login, register, logout, getUser } from "./service/auth.service";

export const authContext = createContext();

export function AuthContextProvider({ children }) {
    const [data, setdata] = useState({});
    const [loading, setloading] = useState(false);  
    const [Protectedloading, setProtecteloading] = useState(true);  


    const registerUser = async (userData) => {
        setloading(true);
        try {
            const resp = await register(userData);
            setdata(resp?.user);
            alert(resp.message);
            return resp.success;
        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "An error occurred during registration.");
            
        } finally {
            setloading(false);
        }
    };

    const loginUser = async (credentials) => {
        setloading(true);
        try {
            const resp = await login(credentials);
            setdata(resp?.user);
            alert(resp.message);
            return resp.success;
        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "An error occurred during login.");
        } finally {
            setloading(false);
        }
    };

    const getUserData = async () => {
        setProtecteloading(true);
        try{
            const resp = await getUser();
            setdata(resp.user);
        }catch(error){
            
        } finally {
            setProtecteloading(false);
        }
    }

    const logoutUser = async () => {
        setloading(true);
        try{
            const resp = await logout();
            setdata({});
            alert(resp.message);
        }catch(error){
            console.log(error);
            alert(error.response?.data?.message || "An error occurred during logout.");
        } finally {
            setloading(false);
        }
    };

    const initalServerRequest = async () => {};

    return( 
        <authContext.Provider value={{ registerUser, loginUser, getUserData, logoutUser, loading, Protectedloading, data }}>
            { children }
        </authContext.Provider>
    );
}