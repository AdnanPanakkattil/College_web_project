
import { ApiClient } from "../api/api"

export const getCoursesData = () => {
  return ApiClient.get('CoursesApi/')
}

export const CreategetCoursesData = (data)=>{
    return ApiClient.post('CoursesApi/')
}
