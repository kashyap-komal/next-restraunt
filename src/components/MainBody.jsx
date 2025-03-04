'use client'
import React,{useState,useEffect} from 'react'
import Restraunt from './Restraunt'
import resObj from '../utlis/mockData'

function MainBody() {
  const [filterres, setFilterres]=useState(resObj)


  useEffect(()=>{
    fetchData();

  },[]);

  const fetchData= async()=>{
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5865395&lng=73.6986675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )

    const josn=await data.json();
    console.log(josn);
  }
  
  return (
    <div className='mainbody'>
        <div className='filter'>
            <button 
            className='filter-btn'
            onClick={()=>{
              const filteredList= resObj.filter((res)=> res.info.avgRating>4);
              setFilterres(filteredList);
            }}
            >
              Top Rated Restraunts</button>
        </div>
        <div className='res-container'>
            {/* different restraunts list */}
            {/* here  I am assisnging the same Restraunt call just to see css how it aligns */}
            {filterres.map((restraunts)=> (
               <Restraunt key={restraunts.info.id} resData={restraunts}/>   
              //  alway use unique id as key
              ))}


        </div>
     
    </div>
  )
}

export default MainBody
