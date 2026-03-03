"use client";

import React, { useRef } from 'react';
import GradientButton from './GradientButton';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const ctaRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Background color transition to black on scroll
    gsap.to(ctaRef.current, {
      backgroundColor: "#000000",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });

    // Text reveal animation - adjusted for larger font
    gsap.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      }
    });
  }, { scope: ctaRef });

  return (
    <section 
      ref={ctaRef} 
      className="relative w-full bg-white transition-colors duration-500 overflow-hidden"
    >
      {/* 1. TOP GRADIENT BORDER */}
      <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-red-600 via-black to-pink-500 z-20" />

      {/* Increased py (padding-top/bottom) and gap-24 for the button separation */}
      <div className="max-w-screen-2xl mx-auto py-32 lg:py-60 px-8 flex flex-col gap-24 lg:gap-32 justify-center items-center">
        
        {/* 2. FONT & LINE GAP UPDATES:
          - lg:text-[4.2vw]: Increased font size for massive impact.
          - leading-[1.8] to leading-[2]: Dramatically separates the lines.
          - tracking-tighter: Keeps the large font looking professional.
        */}
        <h2 
          ref={textRef}
          className=" text-3xl md:text-5xl lg:text-[3vw] font-bold text-center leading-[1.8] lg:leading-[1.6] tracking-tighter text-white mix-blend-difference"
        >
          We are present at Various events, fests, <br className="hidden lg:block" />
          competitions, and projects, fueled by boundless <br className="hidden lg:block" />
          enthusiasm and an unwavering ambition <br className="hidden lg:block" />
          to achieve great heights.
        </h2>
        
        {/* The relative z-10 ensures the button stays clickable over the blend mode */}
        <div className="relative z-10 scale-110 lg:scale-125">
          <GradientButton text="Auditions Soon" link="/auditions" />
        </div>
      </div>

      {/* Optional bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
    </section>
  );
};

export default CTA;