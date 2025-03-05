'use client'
import React,{useState} from 'react'

function Navbar() {
  const[togglebtn,setToggleBtn]=useState("Login")
  const btnName="Login"
  return (
    <div className='navbar'>
     <div className='logo-container'>
      <img src="/restrauntlogo.png" width={70} height={70}/>
     </div>
     <div className='nav-items'>
      <ul>
        <li>Home</li>
        <li>Contact us</li>
        <li>About us</li>
        <li>Cart</li>
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
