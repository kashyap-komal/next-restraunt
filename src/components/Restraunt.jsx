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
    const stylecard={
        backgroundColor: "#f0f0f0",
    };
  return (
    <div className='res-card' style={stylecard}>
        <img
        className='res-logo'
         alt="restrauntlogo" 
         src={CDN_URL+cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4> {cuisines.join(",")}</h4>
        <h5>{avgRating}star</h5>
        <h6>30 minutes</h6>
    </div>
  )
}

export default Restraunt
