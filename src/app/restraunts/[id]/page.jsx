'use client'
import Shimmer from '@/components/Shimmer';
import React from 'react'
import { useParams } from 'next/navigation'
import useRestrauntMenu from '@/utlis/useRestrauntMenu';

export default function Restrauntpage() {

  const {id}=useParams();
  const resInfo= useRestrauntMenu(id);

  if(resInfo===null)return <Shimmer/>

  const name=resInfo?.cards[2]?.card?.card?.info?.name;
  const cuisines=resInfo?.cards[2]?.card?.card?.info?.cuisines;
  const Costfortwo= resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage;

  const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card

  
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
