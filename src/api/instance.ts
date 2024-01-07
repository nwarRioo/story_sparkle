import axios from "axios";
import { jsonplaceholderApiUrl } from "./apiUrl";

export const instance = axios.create({
    baseURL: jsonplaceholderApiUrl
})