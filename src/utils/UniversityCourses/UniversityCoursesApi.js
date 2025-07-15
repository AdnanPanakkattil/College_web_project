
import { ApiClient } from "../api/api"

export const getUniversityCoursesData = () => {
  return ApiClient.get('UniversityCoursesApi/')
}

export const CreategetUniversityCoursesData = (data)=>{
    return ApiClient.post('UniversityCoursesApi/')
}
