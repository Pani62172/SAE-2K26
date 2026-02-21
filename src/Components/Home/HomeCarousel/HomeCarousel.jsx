import React, { useState, useEffect } from "react";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://i.ibb.co/WcGVBVF/Screenshot-2024-11-07-111109.png",
    "https://i.ibb.co/PmhCKrk/Screenshot-2024-11-07-110412.png",
    "https://i.ibb.co/RvxYTk5/Screenshot-2024-11-07-110701.png"
  ];

  const prevSlide = () => {
    console.log("Prev clicked");
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    console.log("Next clicked");
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [slides.length]);

  return (
    <div className="hom-carousel-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hom-slide ${index === currentSlide ? "active" : ""}`}
        >
          <img
            src={slide}
            alt={`Slide ${index + 1}`}
            className="hom-slide-image"
          />
        </div>
      ))}

<div key={currentSlide} className="hom-text-overlay">
  <h1 className="top-heading">
    <span className="hom-highlight">SAE</span>-NITD
  </h1>
  <p className="hom-carousel-description">
    Endurance <span className="hom-highlight">|</span> Innovation{" "}
    <span className="hom-highlight">|</span> Precision
  </p>
</div>

      {/* Navigation buttons */}
      {/* <button
        onClick={() => {
          console.log("Prev clicked");
          prevSlide();
        }}
        className="hom-nav-button hom-prev-button"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={() => {
          console.log("Next clicked");
          nextSlide();
        }}
        className="hom-nav-button hom-next-button"
      >
        <i className="fas fa-chevron-right"></i>
      </button> */}
    </div>
  );
};

export default HomeCarousel;



// import React from "react";
// import "./HomeCarousel.css";

// const HomeCarousel = () => {
//   return (
//     <div className=" carousel-background ">
//       <h1 className="top-heading">
//         <span className="text-red-500">SAE</span>-NITD
//       </h1>
//       <p>Endurance <span className="line-color">|</span> Innovation <span className="line-color">|</span> Precision</p>
//     </div>
//   );
// };

// export default HomeCarousel;