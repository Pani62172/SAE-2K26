import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const aboutRef = useRef(null);
  
  // We need a ref to store our SplitText instance so we can revert it later
  const splitTextRef = useRef(null);

  useGSAP(() => {
    // 1. Heading fade-in from below
    gsap.from(".about-heading", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
      },
    });

    // 2. Stats Counter Animation
    const statNumbers = gsap.utils.toArray('.stat-num');
    statNumbers.forEach((stat) => {
      const targetVal = stat.getAttribute('data-val');
      gsap.fromTo(stat, 
        { textContent: 0 },
        {
          textContent: targetVal,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 }, // Rounds the number to the nearest integer
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".stats-container",
            start: "top 85%", // Triggers when the stats section comes into view
          }
        }
      );
    });

    // 3. Setup SplitText
    // We wrap this in a function so we can call it on load AND on resize
    const initSplitText = () => {
      // If a previous instance exists, revert it first to clean up the DOM
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }

      // Create new SplitText instance
      splitTextRef.current = new SplitText(".about-text", { 
        type: "lines, chars" 
      });

      // Set initial opacity
      gsap.set(splitTextRef.current.chars, { opacity: 0.15 });

      // Animate
      gsap.to(splitTextRef.current.chars, {
        opacity: 1,
        stagger: 0.03,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 60%",
          end: "center 30%",
          scrub: 1.5,
          // invalidateOnRefresh is crucial here! It forces ScrollTrigger to recalculate 
          // its start/end points when the layout changes.
          invalidateOnRefresh: true, 
        },
      });
    };

    // Wait for fonts to load before doing the initial split
    document.fonts.ready.then(() => {
      initSplitText();
    });

    // 4. Handle Window Resizing (The Fix for Inspect Tool / Device Rotation)
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      // Wait 250ms after the user stops resizing before recalculating
      resizeTimer = setTimeout(() => {
        initSplitText();
        // Tell ScrollTrigger to recalculate positions based on the new layout
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function for when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }
      clearTimeout(resizeTimer);
    };

  }, { scope: aboutRef });

  return (
    <div
      ref={aboutRef}
      className="bg-black rounded-tl-[20px] rounded-tr-[20px] relative z-10 py-5 lg:py-13"
    >
      {/* Section Label */}
      <div className="main-container mb-4 lg:mb-6">
        <span className="about-heading inline-block text-xs uppercase tracking-[0.25em] font-semibold text-red-500 border border-red-500/40 rounded-full px-4 py-1.5">
          Who We Are
        </span>
      </div>

      {/* Heading */}
      <div className="main-container mb-5 lg:mb-8">
        <h3
          className="about-heading font-bold uppercase text-white text-[11vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] leading-[1.05] tracking-tighter"
          style={{ fontFamily: "'Montserrat', 'Roboto', sans-serif" }}
        >
          About{' '}
          <span className="bg-gradient-to-b from-[rgb(255,46,46)] to-[rgb(114,5,5)] bg-clip-text text-transparent">
            SAE
          </span>
        </h3>
      </div>

      {/* Divider */}
      <div className="main-container mb-5 lg:mb-8">
        <div className="w-full h-[1px] bg-white/10" />
      </div>

      {/* Body Text */}
      <div className="main-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        {/* Left: Pull quote / highlight */}
        <p className="about-text font-heading text-white font-medium text-2xl sm:text-3xl md:text-3xl lg:text-[2.2vw] xl:text-[1.9vw] leading-[1.35] tracking-tight break-words hyphens-none">
          The largest technical club of NIT Durgapur - building engineers, innovators, and leaders.
        </p>

        {/* Right: Full description */}
        <p className="about-text text-white/100 font-sans text-base sm:text-lg md:text-xl lg:text-[1.1vw] xl:text-[1vw] leading-[1.75] tracking-normal break-words hyphens-none">
          The SAE Collegiate Club of NIT Durgapur organises a diverse range of innovative events, interactive workshops, and enlightening lectures throughout the year - including F.I.S.T, cryptech, SDV workshop, Drag &amp; Drift Competition, and TEDx Talks. As a pivotal force, SAE, being a part of Team Aavishkar, coordinates Aarohan, the second-largest techno-management festival in Eastern India. The club maintains a robust online presence through Instagram, LinkedIn, Facebook, and YouTube, regularly sharing technology-related content to engage automobile enthusiasts worldwide.
        </p>
      </div>

      {/* Stats Row */}
      <div className="main-container stats-container mt-8 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 lg:gap-x-12 border-t border-white/10 pt-10 justify-items-center">
        {[
          { val: 100, suffix: "+", label: "Active Members" },
          { val: 25, suffix: "+", label: "Annual Events" },
          { val: 38, suffix: "th", label: "BAJA Rank Nationwide" },
          { val: 9, suffix: "th", label: "Among IITs & NITs" },
        ].map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-1 text-center">
            <span className="font-heading font-bold text-white text-4xl lg:text-5xl tracking-tight">
              <span className="stat-num" data-val={stat.val}>0</span>
              {stat.suffix}
            </span>
            <span className="text-white/50 text-xs sm:text-sm uppercase tracking-widest max-w-[140px] lg:max-w-none">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;