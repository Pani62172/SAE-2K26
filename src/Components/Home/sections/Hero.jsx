"use client";

import React, { useRef } from "react";
import bgVideo from "../assets/images/bg.mp4"; 
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: 1,
      });

      // FIX: Removed 'mask' property which often causes the line issue
      const splitH1 = new SplitText("h1", { type: "words,chars" });
      const splitH2 = new SplitText("h2", { type: "lines" });

      gsap.from(splitH1.chars, {
        y: 80,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
        delay: 0.5
      });

      gsap.from(splitH2.lines, {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        delay: 0.8
      });

      return () => {
        splitH1.revert();
        splitH2.revert();
      };
    },
    { scope: heroRef }
  );

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 lg:px-12">
        {/* Added py-2 to prevent clipping and leading-tight to fix line overlap */}
        <h2 className="text-5xl lg:text-[5vw] uppercase font-bold text-white tracking-tighter leading-tight py-2">
          <span className="text-red-600">SAE</span>-NITD
        </h2>

        <h2 className="max-w-5xl text-2xl lg:text-[2.8vw] font-light leading-[1.2] mt-2 text-white">
          We are the Society of <br />
          Automotive Engineers Collegiate Club of <br />
          <span className="font-semibold text-white/90">
            National Institute of Technology Durgapur
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;