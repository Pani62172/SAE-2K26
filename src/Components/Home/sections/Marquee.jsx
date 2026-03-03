import React from 'react'
import star from '../assets/images/star.svg'

const Marquee = () => {
  return (
    <>
      <div className="overflow-hidden bg-white text-black pb-28 lg:pb-44 pt-20">

        {/* Row 1 */}
        <div className="whitespace-nowrap animate-marquee text-red-500 text-5xl lg:text-[4vw] font-heading font-semibold leading-[1] tracking-tight">
          <span className="flex gap-4 lg:gap-8 mx-8">
            ENDURANCE <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
            INNOVATION <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
            PRECISION <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
            ENDURANCE <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
            INNOVATION  <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
            PRECISION <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
          </span>
        </div>

        {/* Row 2 (reverse) */}
        <div className="whitespace-nowrap animate-marquee-reverse text-6xl lg:text-[5vw] font-heading font-semibold leading-[1] tracking-tight">
          <span className="flex gap-4 lg:gap-8 mx-8">
            ENDURANCE <img src={star} alt="" className="marquee-star2 w-[7vw]" /> 
            INNOVATION <img src={star} alt="" className="marquee-star2 w-[7vw]" /> 
            PRECISION <img src={star} alt="" className="marquee-star2 w-[7vw]" />
            ENDURANCE <img src={star} alt="" className="marquee-star2 w-[7vw]" /> 
            INNOVATION <img src={star} alt="" className="marquee-star2 w-[7vw]" /> 
            PRECISION <img src={star} alt="" className="marquee-star2 w-[7vw]" /> 
          </span>
        </div>
        
      </div>
    </>
  )
}

export default Marquee