import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Home/comp/Navbar.jsx';
import Home from "./Components/Home/pages/Home.jsx";
import Alumni from "./Components/Alumni/Alumni.js";
import Aarohan from './Components/Aarohan/Aarohan.js';
import Events from "./Components/Events/Events.js";
import Teams from "./Components/Team/Teams.js";
import TedX from "./Components/Tedx/TedX.jsx";

const HomePage = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/events" element={<Events />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/aarohan" element={<Aarohan />} />
            <Route path="/tedx" element={<TedX />} />
            <Route path="/alumni" element={<Alumni />} />
            {/* <Route path='/autopia' element={<Autopia />} /> */}
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default HomePage