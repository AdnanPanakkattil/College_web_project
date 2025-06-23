import { useMutation } from "react-query"
import { creategetUniversityData } from "./UniversityApi"


export const useCreateUniversity = () =>{
    return useMutation((data)=>creategetUniversityData(data))

}