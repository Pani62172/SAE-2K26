
import React, { useState, useEffect } from 'react';
import './HeaderImg.css';
import img1 from './images/IMG-7279.jpg';
import img2 from './images/IMG-7319.jpg';
import img3 from './images/Whats-App-Image-2024-08-21-at-23-50-49-9d4f2cd5.jpg';

const images = [img1, img2, img3
];

const clipPaths = [
  'translate-x-[16%] scale-[10]',
  'translate-x-[-30%] scale-[15]',
  'translate-x-[260%] scale-[16]',
  'translate-x-[-660%] translate-y-[-250%] scale-[25]'
];

const HeaderImg = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const schedule = () => {
      progress();
      setTimeout(schedule, 3000); 
    };
    const timeoutId = setTimeout(schedule, 500); 

    return () => clearTimeout(timeoutId); 
  }, []);

  const progress = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
  };

  return (
    <div className="header-img-container">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`slide-image ${index === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {clipPaths.map((clipPath, index) => (
        <div
          key={index}
          className={`clip-path ${index === current ? clipPath : ''}`}
        />
      ))}
    </div>
  );
};

export default HeaderImg;
