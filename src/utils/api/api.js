import axios from "axios"

const baseUrl = "http://127.0.0.1:8000/"

export const ApiClient = axios.create({
    baseURL:baseUrl,
    header:{
        "Content-Type":"application/json",
        Accept:"application/json"
    }
})