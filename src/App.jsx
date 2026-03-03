import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Home/comp/Navbar';
import Home from "./components/Home/pages/Home";
import Alumni from "./components/Alumni/Alumni.js";
import Aarohan from './components/Aarohan/Aarohan.js';
import Events from "./components/Events/Events.js";
import Teams from "./components/Team/Teams.js";
import TedX from "./components/Tedx/TedX.jsx";

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