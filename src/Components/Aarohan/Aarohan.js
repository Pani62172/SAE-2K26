import { useEffect } from "react";
import "./Aarohan.css";
import CardCarousel from "./Carousel.jsx";
import { events, arhn_gallary } from "./AarohanData.js";
import AOS from "aos";
import "aos/dist/aos.css";
import LiquidChrome from "./LiquidChrome.jsx";
// import AarohanOrg from "./AarohanOrg.js";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "bootstrap";

function Aarohan() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-quart",
      once: true,
      offset: 100,
      delay: 50,
      anchorPlacement: "top-bottom",
      mirror: false,
      disable: window.innerWidth < 768? true : false,
});
const carouselElement = document.querySelector("#heroCarousel");
    // const bootstrapCarousel = new Carousel(carouselElement, {
    //   interval: 4000,
    //   ride: "carousel",
    //   pause: false, 
    // });
    // bootstrapCarousel.cycle();

    const heroCarouselElement = document.querySelector("#heroCarousel");
    let bootstrapCarouselInstance = null;
    if (heroCarouselElement) {
      bootstrapCarouselInstance =
        new Carousel(heroCarouselElement, { interval: 4000, ride: "carousel", pause: false });
      bootstrapCarouselInstance.cycle();
    }

    const cards = document.querySelectorAll(".arhn-card");
    
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -12; 
      const rotateY = ((x - centerX) / centerX) * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };
    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    };
    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    const cursor = document.querySelector(".glow-cursor"); // Ensure you add this div in JSX or create dynamically
    const moveCursor = (e) => {
       if(cursor) {
         cursor.style.left = e.clientX + "px";
         cursor.style.top = e.clientY + "px";
       }
    };
    window.addEventListener("mousemove", moveCursor);

    return () => {
      // cards.forEach((card) => {
      //   card.removeEventListener("mousemove", handleMouseMove);
      //   card.removeEventListener("mouseleave", handleMouseLeave);
      // });
      // Fix: Use the instance we created earlier
      if (bootstrapCarouselInstance){ bootstrapCarouselInstance.dispose();
    }
      window.removeEventListener("mousemove", moveCursor);
    };
}, []);

const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Tilt intensity
    const rotateX = ((y - centerY) / centerY) * -25;
    const rotateY = ((x - centerX) / centerX) * 25;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

return (
    <>
     {/* LIQUID CHROME BACKGROUND */}
      <LiquidChrome />
    <div className="noise-overlay"></div>
    <div className="glow-cursor"></div>
    {/* <div className="blob-container">
  <div className="blob blob-1"></div>
  <div className="blob blob-2"></div>
</div> */}
      {/* --- 1. IMMERSIVE HERO SECTION --- */}
      <div className="hero-section">
        
        {/* Background Layer */}
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade hero-bg"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./assets/IMG_4746.jpg" className="d-block w-100" alt="Hero 1" />
            </div>
            <div className="carousel-item">
              <img src="./6617e9667ea53b0c8bd3b345.jpg" className="d-block w-100" alt="Hero 2" />
            </div>
            <div className="carousel-item">
              <img src="./Electra.jpg" className="d-block w-100" alt="Hero 3" />
            </div>
            <div className="carousel-item">
              <img src="./CarAuction.jpg" className="d-block w-100" alt="Hero 4" />
            </div>
            <div className="carousel-item">
              <img src="./IMG_4570.jpg" className="d-block w-100" alt="Hero 5" />
            </div>
          </div>
        </div>

        {/* Overlay Content Layer */}
        <div className="hero-overlay">
          <h1 className="main-title" data-aos="zoom-out" data-aos-duration="1500">
            AAROHAN
          </h1>

          {/* Animated Scroll Indicator
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrow-scroll">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div> */}
        </div>
      </div>

      {/* --- 2. MAIN CONTENT --- */}
      <div className="w-full relative z-10 bg-[#050505] overflow-hidden">
        
        {/* About Section */}
        <div className="flex max-w-full flex-col lg:flex-row mx-10 my-30 lg:mx-16 lg:my-32 lg:justify-between items-center">
          <div className="w-full lg:w-[50%] relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="./AbtArhn.jpg"
              alt="Aarohan"
              className="relative rounded-lg shadow-2xl w-full object-cover transform transition-transform duration-500 hover:scale-[1.01]"
              data-aos="fade-right"
            />
          </div>

          <div className="lg:w-[45%] mt-12 lg:mt-0 lg:pl-10">
            <h1 className="text-5xl font-black mb-6 section-heading" data-aos="fade-left">
              WHO WE ARE
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Aarohan is not just a fest; it is a legacy. As the second-largest techno-management 
              fest in Eastern India, hosted by Team Aavishkar at NIT Durgapur, we have been 
              curating the future for over 50 years. It is the convergence of code, creativity, 
              and culture.
            </p>
          </div>
        </div>

        {/* SAE Section (Reverse Layout) */}
        <div className="flex max-w-full flex-col lg:flex-row-reverse mx-10 my-80 lg:mx-16 lg:my-50 lg:justify-between items-center">
          <div className="w-full lg:w-[40%] relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="/assets/arhnFlying.jpg"
              alt="SAE"
              className="relative rounded-lg shadow-2xl w-full object-cover transform transition-transform duration-500 hover:scale-[1.01]"
              data-aos="fade-left"
            />
          </div>

          <div className="lg:w-[45%] mt-12 lg:mt-0 lg:pr-10 text-right lg:text-left">
            <h1 className="text-5xl font-black mb-6 section-heading" data-aos="fade-right">
              SAE x AAROHAN
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              The SAE India Collegiate Club of NIT Durgapur powers the mechanical heart of Aarohan. 
              From the roar of engines in Car Auction to the precision of Flying UAVs, SAE brings 
              engineering to life, transforming theoretical concepts into adrenaline-fueled reality.
            </p>
          </div>
        </div>

        {/* --- 3. EVENTS GRID --- */}
        <div className="px-6 lg:px-32 py-20">
          <div className="mb-16 text-center" data-aos="fade-up">
            <h1 className="text-5xl font-black section-heading uppercase">
              The Arena
            </h1>
            <p className="text-gray-500 mt-4 tracking-widest uppercase text-sm">Our Events and Workshops in AAROHAN</p>
          </div>
          <div style={{ height: '600px', width: '100%', position: 'relative' }}>
          <CardCarousel baseWidth={350} autoplay={false} loop={true}>
              {events.map((event) => {
                let imgSrc = "";
               if (event.posters) {
    if (typeof event.posters === "string") {
        // Handle case where posters is just a string path
        imgSrc = event.posters; 
    } else if (event.posters.src) {
        // Handle New Format: Object { src: "..." }
        imgSrc = event.posters.src;
    } else if (Array.isArray(event.posters) && event.posters.length > 0) {
        // Handle Old Format: Array [{ src: "..." }]
        imgSrc = event.posters[0].src;
    }
} else {
    // Fallback
    imgSrc = event.image || ""; 
}
                return (
                 <div key={event.id} className="carousel-item-wrapper">
                    <div 
                      className="arhn-card"
                      // FIX: Attach Tilt Handlers Here
                      onMouseMove={handleCardMouseMove}
                      onMouseLeave={handleCardMouseLeave}
                    >
                      <img src={imgSrc} alt={event.name} />
                      <div className="arhn-card-content">
                        <h2 className="text-3xl font-bold text-white mb-2">{event.name}</h2>
                        <div className="h-1 w-12 bg-red-600 mb-4 mx-auto rounded-full"></div>
                        <p className="text-sm text-gray-300 px-4">{event.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardCarousel>
              </div>
        </div>
        </div>
        {/* --- 4. INFINITE GALLERY --- */}
        <div className="px-6 lg:px-32 py-20">
          <div className="mb-16 text-center" data-aos="fade-up">
            <h1 className="text-5xl font-black section-heading uppercase">
              AAROHAN GALLERY
            </h1>
          </div>
          <div className="arhn-slider">
            <div className="arhn-slide-track">
              {/* Render twice for seamless loop */}
              {[...arhn_gallary, ...arhn_gallary].map((arhn_img, idx) => (
                <div key={`${arhn_img.id}-${idx}`} className="arhn-single-slide w-[300px] h-[200px] mx-4">
                  <img src={arhn_img.posters} alt="gallery" className="w-full h-full object-cover rounded-xl" />
                </div>
              ))}
            </div>
          </div>

        </div>
    </>
  );
}

export default Aarohan;
