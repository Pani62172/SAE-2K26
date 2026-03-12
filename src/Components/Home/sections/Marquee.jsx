import React from 'react';
import star from '../assets/images/star.svg';

const Marquee = () => {
  return (
    <>
      <div className="overflow-hidden bg-black text-white pb-20 lg:pb-22 pt-20">

        {/* Row 1 */}
        {/* CHANGES MADE:
            1. [animation-duration:8s] lg:[animation-duration:15s] -> Faster on mobile (8s), normal on desktop (15s)
            2. hover:[animation-play-state:running] -> Forces the animation to NEVER pause on hover
        */}
        <div className="whitespace-nowrap animate-marquee hover:[animation-play-state:running] [animation-duration:8s] lg:[animation-duration:15s] text-red-500 text-5xl lg:text-[4vw] font-heading font-semibold leading-[1] tracking-tight">
          <span className="flex gap-4 lg:gap-8 mx-8">
            ENDURANCE <img src={star} alt="" className="marquee-star1 w-[7vw] invert" /> 
            INNOVATION <img src={star} alt="" className="marquee-star1 w-[7vw] invert" /> 
            PRECISION <img src={star} alt="" className="marquee-star1 w-[7vw] invert" /> 
            ENDURANCE <img src={star} alt="" className="marquee-star1 w-[7vw] invert" /> 
            INNOVATION  <img src={star} alt="" className="marquee-star1 w-[7vw] invert" /> 
            PRECISION <img src={star} alt="" className="marquee-star1 w-[7vw] invert" /> 
          </span>
        </div>

        {/* Row 2 (reverse) */}
        <div className="whitespace-nowrap animate-marquee-reverse hover:[animation-play-state:running] [animation-duration:10s] lg:[animation-duration:18s] text-6xl lg:text-[5vw] font-heading font-semibold leading-[1] tracking-tight">
          <span className="flex gap-4 lg:gap-8 mx-8">
            ENDURANCE <img src={star} alt="" className="marquee-star2 w-[7vw] invert" /> 
            INNOVATION <img src={star} alt="" className="marquee-star2 w-[7vw] invert" /> 
            PRECISION <img src={star} alt="" className="marquee-star2 w-[7vw] invert" />
            ENDURANCE <img src={star} alt="" className="marquee-star2 w-[7vw] invert" /> 
            INNOVATION <img src={star} alt="" className="marquee-star2 w-[7vw] invert" /> 
            PRECISION <img src={star} alt="" className="marquee-star2 w-[7vw] invert" /> 
          </span>
        </div>
        
      </div>
    </>
  );
};

export default Marquee;