'use client'
import React,{useState,useEffect} from 'react'
import Restraunt from './Restraunt'
import Shimmer from './Shimmer'
import { useRouter } from 'next/navigation'; 
import resList from '@/utlis/MockData';
import Link from 'next/link';

function MainBody() {
  const [filterres, setFilterres]=useState([])
  const[namefilterres,setNameFilterRes]=useState([])
  const [searchText,setSearchText]=useState("")
  const router=useRouter()

  useEffect(()=>{
    fetchData();
    //  setFilterres(resList[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //  setNameFilterRes(resList[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  },[]);

  const fetchData= async()=>{
  //   const data=await fetch(
  //     "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
  // );
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
        {namefilterres.map((restaurant) => (
        <Link 
            key={restaurant.info.id} 
            href="/restraunts"
            // href={`/restraunt?id=${restaurant.info.id}`} 
            className="cursor-pointer"
        >
            <Restraunt resData={restaurant} />
        </Link>
           
              //  alway use unique id as key
              ))}


        </div>
     
    </div>
  )
}

export default MainBody
