import { ApiClient } from "../api/api"


export const getUniversityData = () => {
    return ApiClient.get('UniversityApi/')
}

