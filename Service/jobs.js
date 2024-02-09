import axios from "axios";
import createUrl from "../utils/utils";

export async function getAlljobs()
{


    const url = createUrl('/jobapplied/')


    try{
        const response = await axios.get(url)
        return response.data
    }catch(ex){
        console.log(ex)
        return null
    }



}