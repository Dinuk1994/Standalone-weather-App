import React from 'react'
import SunIcon from '../assets/sun.png'


const Topic = () => {
  return (
    <div className='topicBar'>
      <img src={SunIcon} className='icon' style={{ marginRight: "8px" }} alt="" />

      <h1 style={{fontSize : "30px" , fontWeight : "bold", color : "#FFC94A"}}>Real Weather</h1>
    </div>
  )
}

export default Topic