'use client'
import React,{useState,useEffect, lazy,Suspense} from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

//we can't do lazy loading for a page we can do it for compoennt only

//const LazyGrocery= lazy(()=>import('/grocery/page'))// here we need to give tht path fo that compoent for lazy laoding

function Navbar() {
  const router= useRouter();
  const[togglebtn,setToggleBtn]=useState("Login")
 // const [loadGrocery,setLoadGrocery]= useState(false)
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
          <li onClick={()=>handleNavigation('/grocery')}>Shop us</li>
          <li onClick={() => handleNavigation('/cart')}>Cart</li>
        <button
         className='login-btn'
         onClick={()=>{

          togglebtn ==="Login" ?setToggleBtn("Logout"): setToggleBtn("Login")}}

        >{togglebtn}</button>
      </ul>

     </div>
     {/* {loadGrocery&&(
      <Suspense fallback={<p>Loading.....</p>}>
        <LazyGrocery/>
      </Suspense>
     )} */}
    </div>
  )
}

export default Navbar
