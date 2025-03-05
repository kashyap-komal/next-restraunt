'use client'
import React,{useState,useEffect} from 'react'
import Restraunt from './Restraunt'
import Shimmer from './Shimmer'
//import resObj from '../utlis/mockData'

function MainBody() {
  const [filterres, setFilterres]=useState([])
  const[namefilterres,setNameFilterRes]=useState([])
  const [searchText,setSearchText]=useState("")

  useEffect(()=>{
    fetchData();

  },[]);

  const fetchData= async()=>{
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5865395&lng=73.6986675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )

    const josn=await data.json();
    console.log(josn);
    setFilterres(josn?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setNameFilterRes(josn?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  
  return filterres.length== 0 ? <Shimmer/> : (
    <div className='mainbody'>
        <div className='filter'>
          <div className='search'>
            <input type="text" className='search-box' value={searchText}onChange={(e)=>{
              setSearchText(e.target.value)
            }}/>
            <button onClick={()=>{
              //filter the restraunt cards and update the ui
          const filterrestraunt=filterres.filter(
            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setNameFilterRes(filterrestraunt);
            }}>Search</button>
          </div>
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
            {namefilterres.map((restraunts)=> (
               <Restraunt key={restraunts.info.id} resData={restraunts}/>   
              //  alway use unique id as key
              ))}


        </div>
     
    </div>
  )
}

export default MainBody
