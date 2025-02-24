import React from 'react'
import Restraunt from './Restraunt'

function MainBody() {
  return (
    <div className='mainbody'>
        <div className='search'>
            Search
        </div>
        <div className='res-container'>
            {/* different restraunts list */}
            {/* here  I am assisnging the same Restraunt call just to see css how it aligns */}
           <Restraunt resName="Pind Punjab" cuisines="Biryani, North Indian"/> 
           <Restraunt  resName="KFC" cuisines="Burger, Chicken"/> 

        </div>
     
    </div>
  )
}

export default MainBody
