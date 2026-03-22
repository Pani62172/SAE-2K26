import React, { useState, useEffect, useRef } from 'react';
import './Sdv.css';
import sdv1 from './sdv1.png';
import sdv2 from './sdv2.jpg';
import sdv3 from './sdv3.jpg';

const galleryImages = [ sdv1, sdv2, sdv3];

const Sdv = () => {
  const [headingInView, setHeadingInView] = useState(false);
  const [paragraphInView, setParagraphInView] = useState(false);
  const [galleryInView, setGalleryInView] = useState(false);

  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === headingRef.current) {
          setHeadingInView(entry.isIntersecting);
        }
        if (entry.target === paragraphRef.current) {
          setParagraphInView(entry.isIntersecting);
        }
        if (entry.target === galleryRef.current) {
          setGalleryInView(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
      if (galleryRef.current) observer.unobserve(galleryRef.current);
    };
  }, []);

  return (
    <div className="sdv">
      <h1
        className={`Sdv-heading ${headingInView ? 'in-view' : ''}`}
        ref={headingRef}
      >
        SDV
      </h1>
      <p
        className={`Sdv-paragraph ${paragraphInView ? 'in-view' : ''}`}
        ref={paragraphRef}
      >
       SAE organizes an engaging workshop centered on developing a self-driving vehicle prototype. As autonomous vehicles continue to gain momentum and become more widespread, this workshop explores the core principles of autonomous driving, robotics, and algorithm design. It offers participants an opportunity to understand and work with the advanced technologies driving the future of transportation.
      </p>
      <div
        className={`Sdv-gallery ${galleryInView ? 'in-view' : ''}`}
        ref={galleryRef}
      >
        {galleryImages.map((src, index) => (
          <div key={index} className="Sdv-gallery-item">
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="animated-line"></div>
    </div>
  );
};

export default Sdv;
