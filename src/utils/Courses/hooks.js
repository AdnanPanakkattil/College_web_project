import { useMutation } from "react-query"
import { CreategetCoursesData } from "./coursesApi"


export const useCreateCourses = () =>{
    return useMutation((data)=>CreategetCoursesData(data))

}