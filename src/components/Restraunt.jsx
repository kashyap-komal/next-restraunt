import React from 'react'

function Restraunt(props) {
  const {resData} =props;

  console.log(resData,"resObj")

    const stylecard={
        backgroundColor: "#f0f0f0",
    };
  return (
    <div className='res-card' style={stylecard}>
        <img
        className='res-logo'
         alt="restrauntlogo" 
         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/zvqgvwxrxsemvouvqvg3"/>
        <h3>{resData.info.name}</h3>
        <h4> {props.cuisines}</h4>
        <h5>Ratings 5 star</h5>
        <h6>30 minutes</h6>
    </div>
  )
}

export default Restraunt
