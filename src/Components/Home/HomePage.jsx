import React, { useEffect, useState, useRef } from "react";
import Lottie from "lottie-react";
import { scroll, animate } from "https://cdn.skypack.dev/motion@10.13.1";
import "./HomePage.css";
import cloudAnimation from "../../Cloud.json";
// import engineAnimation from '../../Engine1.json';

import AOS from "aos";
import "aos/dist/aos.css";
// import { motion } from 'framer-motion'
import TypeJs from "./TypeJs/TypeJs";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Event from "./Event/Event";
import Cryptech from "./Cryptech/Cryptech";
import HomCard from "./Card/HomCard";

AOS.init({
  duration: 500,
  delay: 100,
  easing: "ease-out",
});

const HomePage = () => {
  return (
    <div className="home-container">
      <HomeCarousel />
      <br />
      <br />
      <section className="hommain">
        <div className="homheading">
          {/* <h1 className="font-bold">SAENITD</h1> */}
          <TypeJs />
          {/* <p>We are the Society of Automotive Engineers Collegiate Club of National Institute of Technology Durgapur</p> */}
        </div>
      </section>

      <div className="homanimated-line"></div>

      <section className="homboxes">
        <div id="testimonial-box" className="homcontainer">
          <div className="homsubheading">
            <h2>We are present at</h2>
            <p>
              Various events, fests, competitions, and projects, fueled by
              boundless enthusiasm and an unwavering ambition to achieve great
              heights.
            </p>
          </div>

          <HomCard />
        </div>
      </section>

      <section className="homabout">
        <div id="homcontainer-fluid">
          <div className="homabout-content">
            <Lottie
              animationData={cloudAnimation}
              loop={true}
              className="homresponsive-lottie"
            />
            <div className="homabout-sae" data-aos="fade-up-left">
              <h1 data-aos="fade-right font-bold">About SAE</h1>
              <p>
                The <span>SAE</span> Collegiate Club of NIT Durgapur, the only
                automotive club of its kind, organizes a diverse range of
                innovative events, interactive workshops, and enlightening
                lectures throughout the year, including F.I.S.T., webinars, SDV
                workshops, Drag and Drift Competition, and TEDX Talks. As a
                pivotal force, SAE being a part of Team Aavishkar coordinates
                Aarohan, the second-largest techno-management festival in
                Eastern India, held at NIT Durgapur. The club maintains a robust
                online presence through platforms like Instagram, LinkedIn,
                Facebook, and YouTube, regularly sharing technology-related
                content to engage automobile enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Event />

      <Cryptech />
    </div>
  );
};
export default HomePage;
