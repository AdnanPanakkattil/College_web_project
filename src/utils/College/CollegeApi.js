
import { ApiClient } from "../api/api"

export const getCollegeData = () => {
  return ApiClient.get('CollegeApi/')
}

export const CreategetCollegeData = (data)=>{
    return ApiClient.post('CollegeApi/')
}
