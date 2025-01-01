import axios from "axios"
import { IAPIResponse } from "../types/types"

const server=async(payload:any,path:string,method:string,headers:Record<string,any>)=>{
    const res=await axios({
        method,
        url: path,
        data:payload,
        headers
    })
    if(res.status===200){
        const data:IAPIResponse=res.data;
        return {
            status:'SUCCESS',
            data
        };
    }
    return {
        status:'FAILED',
        data:null
    }
}