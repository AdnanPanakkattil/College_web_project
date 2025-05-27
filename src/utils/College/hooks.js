import { useMutation } from "react-query"
import { CreategetCollegeData } from "./CollegeApi"

export const useCreateCollege = () =>{
    return useMutation((data)=>CreategetCollegeData(data))

}