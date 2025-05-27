import axios from "axios"

const baseUrl = ""

export const ApiClient = axios.create({
    baseURL:baseUrl,
    header:{
        "Content-Type":"application/json",
        Accept:"application/json"
    }
})