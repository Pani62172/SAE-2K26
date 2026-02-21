import React from 'react'
import './Event.css'

const Event = () => {
  return (
    <>
      <section className="homevents-section data">
        <div className="homhlo-sae" data-aos="fade-right">
          <h1 className='font-bold'>Events</h1>
        </div>
      </section>
      <section className='homevents-section-data px-4'>
        <div className="homcontainer-fluid">
          <div className="homevent-content">
            <div className="homfist-image">
              <img
                src="https://i.ibb.co/m4yp2vJ/Screenshot-2024-10-28-193138.png"
                alt="Image"
                data-aos="fade-right"
              />
            </div>
            <div className="homabout-fist" data-aos="fade-up-left">
              <h1 data-aos="fade-right">F.I.S.T</h1>
              <p>
                Team SAE-NITD’s "Forum for Ideas on Science and Technology" (F.I.S.T.) is dedicated to cultivating a research-focused environment through engaging webinars and hands-on workshops on cutting-edge topics like generative AI. By bringing in industry experts, F.I.S.T. bridges crucial knowledge gaps, inspires innovation, and empowers students to explore and develop technology-based solutions to real-world challenges, fostering a spirit of inquiry and advancement.
              </p>
            </div>
          </div>
        </div>

        <div className="homcontainer-fluid">
          <div className="homevent-content">
            <div className="homabout-baja">
              <h1 data-aos="fade-left">BAJA SAEINDIA</h1>
              <p data-aos="fade-up-right">BAJA SAEINDIA is a renowned national event that challenges university students to design, build, and race off-road vehicles, promoting teamwork, innovation, and engineering skills.

NIT Durgapur’s Team NDORS, made up of 25 talented students, excelled in the competition, achieving 38th place nationwide and ranking 7th among IITs and NITs, reflecting their technical expertise and dedication.</p>
            </div>
            <div className="hombaja-image">
              <img
                src="https://saenitdgp-self.vercel.app/static/media/fullvehicle.72e6f860c848885980de.png"
                alt="Image"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>

        <div className="homcontainer-fluid">
          <div className="homevent-content">
            <div className="homaiml-image mt-4">
              <img
                   src="./SDV.jpg" 
                alt="Image"
                data-aos="fade-right"
              />
            </div>
            <div className="homabout-aiml">
              <h1 data-aos="fade-right">SDV Workshop</h1>
              <p data-aos="fade-up-left">SAE’s self-driving vehicle workshop offers an in-depth experience in building a prototype autonomous vehicle, ideal for tech enthusiasts and aspiring engineers. As autonomous vehicles become central to the future of transportation, this workshop covers key principles of autonomous driving, robotics, and algorithm development. Through hands-on sessions and expert-led guidance, participants will engage with the cutting-edge technologies propelling the evolution of self-driving systems, gaining valuable insights into the innovations shaping tomorrow’s mobility landscape.</p>
            </div>
          </div>
        </div>


      





        <div className="homcontainer-fluid">
  <div className="homevent-content homaiml-content"> {/* Added homaiml-content */}
 
    <div className="homabout-aiml">
      <h1 data-aos="fade-left">AI ML Workshop</h1>
      <p data-aos="fade-up-right">
        This workshop provides participants with practical, in-depth experience in Artificial Intelligence (AI) and Machine Learning (ML), focusing on Convolutional Neural Networks (CNNs) and deep learning models. Attendees will tackle real-world challenges and gain hands-on expertise by designing and implementing neural network architectures. They’ll explore applications in image and speech recognition, autonomous systems, and data-driven decision-making, making it ideal for those seeking to deepen their AI and ML knowledge with an emphasis on modern solutions and industry standards.
      </p>
    </div>
    <div className="homaiml-image ">
      <img
        src="https://github.com/Suke2004/Birthday-django-/blob/main/IMG-20240821-WA0076.jpg?raw=true"
        alt="Image"
        data-aos="fade-left"
      />
    </div>
  </div>
</div>

      </section> 
    </>
  )
}

export default Event
