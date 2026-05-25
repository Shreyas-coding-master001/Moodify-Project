import axios from "axios";
import API from "../../../services/api.js";

export async function register({email, password, username, gender, role}){
    try {
        const resp = await API.post("/auth/register", {
            email,
            password,
            username,
            gender,
            role
        });

        return resp.data;
    } catch (error) {
        throw error;
    }
}

export async function login({email, password}){
    try {
        const resp = await API.post("/auth/login", {
            email,
            password
        });

        return resp.data;
    } catch (error) {
        throw error;
    }
}

export async function logout(){
    try{
        const resp = await API.get("/auth/logout");
        return resp.data;
    }catch(error){
        throw error;
    }
}

export async function getUser(){
    try{
        const resp = await API.get("/auth/get-user");
        return resp.data;
    }catch(error){
        throw error;
    }
}
