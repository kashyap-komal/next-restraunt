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
           <Restraunt/> 

        </div>
     
    </div>
  )
}

export default MainBody
