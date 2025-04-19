import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "localhost:8080",
    timeout: 1000
})