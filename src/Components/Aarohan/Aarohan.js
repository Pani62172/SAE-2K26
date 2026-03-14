import { useEffect, useState } from "react";
import "./Aarohan.css";
import CardCarousel from "./Carousel.jsx";
import { events, arhn_gallary } from "./AarohanData.js";
import './DarkVeil.css';
import AOS from "aos";
import "aos/dist/aos.css";
import DarkVeil from "./DarkVeil.js";
// import AarohanOrg from "./AarohanOrg.js";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "bootstrap";

function Aarohan() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
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

    const heroCarouselElement = document.querySelector("#heroCarousel");
    let bootstrapCarouselInstance = null;
    if (heroCarouselElement) {
      bootstrapCarouselInstance =
        new Carousel(heroCarouselElement, { interval: 4000, ride: "carousel", pause: false });
      bootstrapCarouselInstance.cycle();
    }

    const cards = document.querySelectorAll(".arhn-card");
    
    const handleMouseMove = (e) => {
      
    };
    const handleMouseLeave = (e) => {
   
    };
    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    const cursor = document.querySelector(".glow-cursor"); 
    const moveCursor = (e) => {
       if(cursor) {
         cursor.style.left = e.clientX + "px";
         cursor.style.top = e.clientY + "px";
       }
    };
    window.addEventListener("mousemove", moveCursor);

    return () => {
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
    const rotateX = ((y - centerY) / centerY) * -25;
    const rotateY = ((x - centerX) / centerX) * 25;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };
  const eventCards = events.map((event) => {
    let imgSrc = "";
    if (event.posters) {
      if (typeof event.posters === "string") {
        imgSrc = event.posters; 
      } else if (event.posters.src) {
        imgSrc = event.posters.src;
      } else if (Array.isArray(event.posters) && event.posters.length > 0) {
        imgSrc = event.posters[0].src;
      }
    } else {
      imgSrc = event.image || ""; 
    }
    
    return (
      <div key={event.id} className="carousel-item-wrapper w-full flex justify-center">
        <div 
          className="arhn-card"
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
        >
          <img src={imgSrc} alt={event.name} className="w-full h-full object-cover" />
          <div className="arhn-card-content">
            <h2 className="absolute top-6 w-full px-4 z-20 text-2xl lg:text-3xl font-bold text-white text-center drop-shadow-xl break-words leading-tight">{event.name}</h2>
            <div className="absolute top-25 left-1/2 -translate-x-1/2 h-1 w-12 bg-red-600 rounded-full z-20 drop-shadow-md"></div>
            <p className="text-sm text-gray-300 px-4">{event.content}</p>
          </div>
        </div>
      </div>
    );
  });

return (
    <>
    <div className="darkveil-wrapper">
        <DarkVeil 
              hueShift={240}
              noiseIntensity={0.05}
              scanlineIntensity={0.15}
              speed={0.5}
              scanlineFrequency={1}
              warpAmount={3}
              resolutionScale={2}
        />
      </div>
    <div className="noise-overlay"></div>
    <div className="glow-cursor"></div>
      <div className="hero-section">
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

        <div className="hero-overlay">
          <h1 className="main-title" data-aos="zoom-out" data-aos-duration="1500">
            AAROHAN
          </h1>
        </div>
      </div>

      <div className="w-full relative z-10 bg-transparent">
        
        <main className="parallax-main">
          
          <section className="parallax-section">
            <figure className="parallax-image-container">
              <img src="./IMG_0406.JPG" alt="Aarohan Who We Are" />
            </figure>
            <article className="parallax-content">
              <h1 
  className="w-full text-center"
  style={{
    display: "block",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: '"Montserrat", "Roboto", sans-serif',
    fontWeight: 900,
    textTransform: "uppercase",
    fontSize: "clamp(2.5rem, 8vw, 4rem)",
    lineHeight: 1.2,
    marginBottom: "1rem",
    backgroundImage: "linear-gradient(to bottom, rgb(255, 46, 46), rgb(114, 5, 5))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "rgb(202, 52, 53)", 
    animation: "fadeIn 2s ease-in-out"
  }}
>
  WHO WE ARE
</h1>
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                Aarohan is not just a fest; it is a legacy. As the second-largest techno-management 
                fest in Eastern India, hosted by Team Aavishkar at NIT Durgapur, we have been 
                curating the future for over 50 years. It is the convergence of code, creativity, 
                and culture.
              </p>
            </article>
          </section>
         
          <section className="parallax-section">
            <figure className="parallax-image-container">
              <img src="./Roboliga_Aarohan_25_verified.png" alt="SAE X Aarohan" />
            </figure>
            <article className="parallax-content">
             <h1 
  className="w-full text-center"
  style={{

    display: "block",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: '"Montserrat", "Roboto", sans-serif',
    fontWeight: 900,
    textTransform: "uppercase",
    fontSize: "clamp(2.5rem, 8vw, 4rem)", 
    lineHeight: 1.2,
    marginBottom: "1rem",
    backgroundImage: "linear-gradient(to bottom, rgb(255, 46, 46), rgb(114, 5, 5))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "rgb(202, 52, 53)", 
    animation: "fadeIn 2s ease-in-out"
  }}
>
  SAE X AAROHAN
</h1>
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                The SAE India Collegiate Club of NIT Durgapur powers the mechanical heart of Aarohan. 
                From the roar of engines in Car Auction to the precision of Flying UAVs, SAE brings 
                engineering to life, transforming theoretical concepts into adrenaline-fueled reality.
              </p>
            </article>
          </section>
          </main>

        </div>

        <div className="px-6 lg:px-32 py-20">
          <div className="mb-16 text-center" data-aos="fade-up">
            <h1 className="thearena">
              The Arena
            </h1>
            <p className="text-gray-500 mt-4 tracking-widest uppercase text-lg">Our Events and Workshops in AAROHAN</p>
          </div>
          {isMobile ? (
          <div style={{ height: '600px', width: '100%', position: 'relative' }}>
            <CardCarousel baseWidth={350} autoplay={true} loop={true}>
              {eventCards}
            </CardCarousel>
          </div>
        ) : (
          <div className="arhn-grid-container w-full max-w-7xl mx-auto">
            {eventCards}
          </div>
        )}
        </div>
          {/* <div style={{ height: '600px', width: '100%', position: 'relative' }}>
          <CardCarousel baseWidth={350} autoplay={true} loop={true}>
              {events.map((event) => {
                let imgSrc = "";
               if (event.posters) {
    if (typeof event.posters === "string") {
        imgSrc = event.posters; 
    } else if (event.posters.src) {
        imgSrc = event.posters.src;
    } else if (Array.isArray(event.posters) && event.posters.length > 0) {
        imgSrc = event.posters[0].src;
    }
} else {
    imgSrc = event.image || ""; 
}
                return (
                 <div key={event.id} className="carousel-item-wrapper">
                    <div 
                      className="arhn-card"
                      onMouseMove={handleCardMouseMove}
                      onMouseLeave={handleCardMouseLeave}
                    >
                      <img src={imgSrc} alt={event.name} />
                      <div className="arhn-card-content">
                        <h2 className="absolute top-6 w-full px-4 z-20 text-2xl lg:text-3xl font-bold text-white text-center drop-shadow-xl break-words leading-tight">{event.name}</h2>
                        <div className="absolute top-25 left-1/2 -translate-x-1/2 h-1 w-12 bg-red-600 rounded-full z-20 drop-shadow-md"></div>
                        <p className="text-sm text-gray-300 px-4">{event.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardCarousel>
              </div>
        </div> */}
 
        <div className="px-6 lg:px-32 py-20">
          <div className="mb-16 text-center" data-aos="fade-up">
            <h1 className="thearena">
              AAROHAN GALLERY
            </h1>
          </div>
          {isMobile ? (
          /* MOBILE VIEW: The infinite sliding track */
          <div className="arhn-slider">
            <div className="arhn-slide-track">
              {/* Note: We double the array here so the infinite scroll doesn't glitch */}
              {[...arhn_gallary, ...arhn_gallary].map((arhn_img, idx) => (
                <div key={`mobile-gal-${idx}`} className="arhn-single-slide w-[300px] h-[200px] mx-4">
                  <img src={arhn_img.posters} alt="gallery" className="w-full h-full object-cover rounded-xl shadow-md" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* DESKTOP VIEW: A sleek, responsive Tailwind Grid */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-4">
            {/* Note: We only map through the gallery once here! */}
            {arhn_gallary.map((arhn_img, idx) => (
              <div 
                key={`desktop-gal-${idx}`} 
                className="w-full h-[250px] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <img src={arhn_img.posters} alt="gallery" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

      </div>
    </>
  );
}

export default Aarohan;
