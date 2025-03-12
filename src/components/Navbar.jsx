'use client'
import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

function Navbar() {
  const router= useRouter();
  const[togglebtn,setToggleBtn]=useState("Login")

  const handleNavigation=(path)=>{
    router.push(path);
  }
  return (
    <div className='navbar'>
     <div className='logo-container'>
      <img src="/restrauntlogo.png" width={70} height={70}/>
     </div>
     <div className='nav-items'>
      <ul>
      <li onClick={() => handleNavigation('/')}>Home</li>
          <li onClick={() => handleNavigation('/contact')}>Contact us</li>
          <li onClick={() => handleNavigation('/about')}>About us</li>  {/* ✅ Using useRouter */}
          <li onClick={() => handleNavigation('/cart')}>Cart</li>
        {/* <li>Home</li>
        <li>Contact us</li>
        {/* <Link href="/about">
        <li>About us</li>
        </Link> 
        <li onClick={()=>router.push('/about')}>About us</li>
        <li>Cart</li> */}
        <button
         className='login-btn'
         onClick={()=>{

          togglebtn ==="Login" ?setToggleBtn("Logout"): setToggleBtn("Login")}}

        >{togglebtn}</button>
      </ul>

     </div>
    </div>
  )
}

export default Navbar
