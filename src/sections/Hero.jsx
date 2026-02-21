"use client";

import React, { useRef } from "react";
import bgVideo from "../assets/images/bg.mp4"; // ✅ IMPORTANT (Vite way)

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

      const splitH1 = SplitText.create("h1", {
        type: "lines, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          gsap.from(self.words, {
            y: 100,
            opacity: 0,
            delay: 0.2,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
          });
        },
      });

      const splitH2 = SplitText.create("h2", {
        type: "lines, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          gsap.from(self.words, {
            y: 100,
            opacity: 0,
            stagger: 0.15,
            delay: 0.4,
            duration: 1,
            ease: "power3.out",
          });
        },
      });

      gsap.from(".gradient-btn", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.3,
      });

      return () => {
        splitH1.revert();
        splitH2.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: heroRef }
  );

  return (
    <div
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col lg:justify-center items-start lg:py-12 max-lg:pt-40 px-6">
        <h1 className="text-3xl lg:text-[3.2vw] uppercase font-vogue font-bold text-white">
          <span className="text-red-500">SAE</span>-NITD
        </h1>

        <h2 className="text-5xl lg:text-[3vw] font-vogue font-light leading-[1.3] tracking-tight mt-3 mb-6 text-white">
          We are the Society of <br />
          Automotive Engineers Collegiate Club of <br />
          <span>
            National Institute of Technology Durgapur
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;