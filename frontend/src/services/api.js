import axios from "axios";
import { API_URL, API_URL_0 } from "../config/apiConfig";

const API = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

export const API2 = axios.create({
    baseURL: API_URL_0,
    withCredentials: true
});

export default API;