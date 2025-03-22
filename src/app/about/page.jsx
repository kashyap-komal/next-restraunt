'use client'
import React,{ useEffect } from "react";

export default function AboutPage() {

  useEffect(()=>{
    const timer=setInterval(()=>{
      console.log("namaste react")
    },1000);
    return ()=>{
      clearInterval(timer);
      console.log("remove timer equal to unmount")
    }
  },[])
    return (
      <div className="about-container">
        <h1>About Us</h1>
        <p>Welcome to our restaurant! We are committed to serving the best food with love and care.</p>
        <p>This project is made with nextjs for learning purpose with the help of namaste react</p>
      </div>
    );
  }
  

