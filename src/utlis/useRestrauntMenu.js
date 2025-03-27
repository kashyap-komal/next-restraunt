import { useEffect, useState } from "react";
import {MENU_API} from "../utlis/constants"
const useRestrauntMenu=(id)=>{
    const[resInfo,setResInfo]=useState(null)

    //fetch data

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data= await fetch(MENU_API + id)

        const json =await data.json()
        setResInfo(json.data)
    }

  return resInfo;
}

export default useRestrauntMenu