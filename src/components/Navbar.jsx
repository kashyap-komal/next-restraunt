'use client'
import React from 'react'

function Navbar() {
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
      </ul>

     </div>
    </div>
  )
}

export default Navbar
