import { useMutation } from "react-query"
import { CreategetUniversityCoursesData } from "./UniversityCoursesApi"



export const useCreateUniversityCourses = () =>{
    return useMutation((data)=>CreategetUniversityCoursesData)
}