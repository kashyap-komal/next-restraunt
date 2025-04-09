'use client'
import React from 'react'
import { CDN_URL } from '@/utlis/constants';

function Restraunt(props) {
  const {resData} =props;

  const{
    cloudinaryImageId,
    name,
    cuisines,
    avgRating
  } = resData?.info  // destructuring the data is always a good practice to make our code optimize
    // const stylecard={
    //     backgroundColor: "#f0f0f0",
    // };
  return (
    <div className='m-2 p-4 w-[270px] h-[430px] rounded-lg bg-gray-100'>
        <img
        className='rounded-lg h-[270px] w-[300px]'
         alt="restrauntlogo" 
         src={CDN_URL+cloudinaryImageId}/>
        <h3 className='font-bold py-1 text-md'>{name}</h3>
        <h4> {cuisines.join(",")}</h4>
        <h5>{avgRating}star</h5>
        <h6>30 minutes</h6>
    </div>
  )
}

export default Restraunt
