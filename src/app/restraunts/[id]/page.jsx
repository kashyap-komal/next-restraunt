'use client'
import Shimmer from '@/components/Shimmer';
import React,{useEffect, useState} from 'react'
import { useParams } from 'next/navigation'
import {MENU_API} from "../../../utlis/constants";

export default function Restrauntpage() {
  const [resInfo,setResInfo]=useState(null);

  const {id}=useParams();
  console.log(id,"parans")

  useEffect(()=>{
    fetchMenu();

  },[])

  const fetchMenu=async()=>{
    // const data=await fetch(
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5865395&lng=73.6986675&restaurantId=649401&catalog_qa=undefined&submitAction=ENTER")
    // const jsondata=await data.json();
    const data=await fetch(MENU_API+id)
    const jsondata=await data.json();
    console.log(jsondata);
    setResInfo(jsondata.data)
  }
  console.log(resInfo,"resInfo")

  if(resInfo===null)return <Shimmer/>

  const name=resInfo?.cards[2]?.card?.card?.info?.name;
  const cuisines=resInfo?.cards[2]?.card?.card?.info?.cuisines;
  const Costfortwo= resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage;

   const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
   console.log(itemCards,"itemCards")

  
  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines}-{Costfortwo}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map(item=>
           <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} -{"Rs."}{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100 }</li>
        )}
      </ul>
    </div>
  )
}
