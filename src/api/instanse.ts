import axios from "axios";

export const instanse = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "9023ef56-e618-4743-b1d7-425c6976d211"}
})