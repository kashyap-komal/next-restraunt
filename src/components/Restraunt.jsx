import React from 'react'

function Restraunt() {

    const stylecard={
        backgroundColor: "#f0f0f0",
    };
  return (
    <div className='res-card' style={stylecard}>
        <img
        className='res-logo'
         alt="restrauntlogo" 
         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/zvqgvwxrxsemvouvqvg3"/>
        <h3>Pind Punjab</h3>
      
    </div>
  )
}

export default Restraunt
