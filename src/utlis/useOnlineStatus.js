import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
    const [isOnline,setIsOnline] =useState(true);
    //check if online

    useEffect(()=>{
        window.addEventListener("offline", (event) => {
            setIsOnline(false)
          });

          window.addEventListener("online", (event) => {
            setIsOnline(true)
          });
    },[])

    //return boolean

    return isOnline

}

export default useOnlineStatus