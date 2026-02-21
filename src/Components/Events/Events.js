import Aar from "../Events/Aar/Aar.js"
import Dnd from "../Events/Dnd/Dnd.js"
import Fist from "../Events/Fist/Fist.js"
import Header from "../Events/Header/Header.js"
import Sdv from "../Events/Sdv/Sdv.js"
import TedxSec from "../Events/TedxSec/TedxSec.js"
import React from 'react'
import Mlw from "./Mlw/Mlw.js"

const Events = () => {
  return (
    <div>
      <Header/>
      <Aar/>
      <Sdv/>  
      <Mlw/> 
      <Dnd/>
      <Fist/>
      <TedxSec/>
     
  

    </div>
  )
}

export default Events
