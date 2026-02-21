import React from 'react';
import Aar from "../Events/Aar/Aar.js";
import Dnd from "../Events/Dnd/Dnd.js";
import Fist from "../Events/Fist/Fist.js";
import Header from "../Events/Header/Header.js";
import Sdv from "../Events/Sdv/Sdv.js";
import TedxSec from "../Events/TedxSec/TedxSec.js";
import Mlw from "./Mlw/Mlw.js";
import DarkVeil from './DarkVeil/DarkVeil.js';
//import Footer from '../Footer/Footer.jsx'; // Add your footer import
import './Events.css';

const Events = () => {
  return (
    <div className="events-page">
      {/* Header section - no background effect */}
      <div className="header-section">
        <Header />
      </div>

      {/* Main content with DarkVeil background */}
      <div className="events-content-wrapper">
        {/* DarkVeil background layer */}
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

        {/* Content layer on top of DarkVeil */}
        <div className="events-content">
          <Aar />
          <Sdv />
          <Mlw />
          <Dnd />
          <Fist />
          <TedxSec />
        </div>
      </div>

     {/* Footer section - no background effect, appears below DarkVeil */}
    
    </div> 
  );
};

export default Events;

/*

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

*/
