import Aar from "./Aar/Aar.js"
import Dnd from "./Dnd/Dnd.js"
import Fist from "./Fist/Fist.js"
import Header from "./Header/Header.js"
import Sdv from "./Sdv/Sdv.js"
import TedxSec from "./TedxSec/TedxSec.js"
import React from 'react'
import Mlw from "./Mlw/Mlw.js"
import DarkVeil from "./DarkVeil/DarkVeil.js"

const Events = () => {
  return (
    <div>
      <div className="darkveil-background">
          <DarkVeil
            hueShift={240}
            noiseIntensity={0.05}
            scanlineIntensity={0.15}
            speed={0.5}
            scanlineFrequency={1}
            warpAmount={3}
            resolutionScale={2}
          />
        </div>

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
