import React from 'react'
import { FaArrowTurnDown } from "react-icons/fa6";
const Services = () => {
  
  return (
    <>
      {/* Title Wrapper */}
      <div className="bg-white text-black ">
        <div className='main-container flex  overflow-hidden flex-col items-center justify-center  pb-8 lg:pb-12'>
          <h3 className=' text-black px-3 py-1 group-hover:underline border-b-2 border-red-200 '>EVENTS</h3>
        </div>
      </div>

      {/* Services List */}
      <div className='relative'>
        <div className="bg-black text-white pt-16 lg:pt-20 pb-[20rem] sticky top-4">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
              
            {/* Left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">01</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                   FIST
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                 Team SAE-NITD’s "Forum for Ideas on Science and Technology" (F.I.S.T.) is dedicated to cultivating a research-focused environment through engaging webinars and hands-on workshops on cutting-edge topics like generative AI. By bringing in industry experts, F.I.S.T. bridges crucial knowledge gaps, inspires innovation, and empowers students to explore and develop technology-based solutions to real-world challenges, fostering a spirit of inquiry and advancement.
              </p>
            </div>

          </div>
        </div>
        <div className="bg-red-600 text-black pt-30 lg:pt-10 pb-[40rem] sticky top-1/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
              
            {/* Left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">02</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                 BAJA SAENDIA
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                  BAJA SAEINDIA is a renowned national event that challenges university students to design, build, and race off-road vehicles, promoting teamwork, innovation, and engineering skills. NIT Durgapur’s Team NDORS, made up of 25 talented students, excelled in the competition, achieving 38th place nationwide and ranking 7th among IITs and NITs, reflecting their technical expertise and dedication.
              </p>
            </div>

          </div>
        </div>
        <div className="bg-white text-black pt-16 lt:pt-20 pb-[40rem] sticky top-2/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
              
            {/* Left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">03</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                     SDV WORKSHOP
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
               SAE’s self-driving vehicle workshop offers an in-depth experience in building a prototype autonomous vehicle, ideal for tech enthusiasts and aspiring engineers. As autonomous vehicles become central to the future of transportation, this workshop covers key principles of autonomous driving, robotics, and algorithm development. Through hands-on sessions and expert-led guidance, participants will engage with the cutting-edge technologies propelling the evolution of self-driving systems, gaining valuable insights into the innovations shaping tomorrow’s mobility landscape.
              </p>
            </div>

          </div>
        </div>
        <div className="bg-[#E9E9F0] text-black pt-16 lg:pt-20 pb-[10rem] sticky top-1">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
              
            {/* Left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">04</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                AI/ML Workshop 
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                  This workshop provides participants with practical, in-depth experience in Artificial Intelligence (AI) and Machine Learning (ML), focusing on Convolutional Neural Networks (CNNs) and deep learning models. Attendees will tackle real-world challenges and gain hands-on expertise by designing and implementing neural network architectures. They’ll explore applications in image and speech recognition, autonomous systems, and data-driven decision-making, making it ideal for those seeking to deepen their AI and ML knowledge with an emphasis on modern solutions and industry standards.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Services