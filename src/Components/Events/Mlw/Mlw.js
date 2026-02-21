import React, { useState, useEffect, useRef } from 'react';
import "./Mlw.css";

const Mlw = () => {
    const galleryImages = [
      {
        src: "https://i.ytimg.com/vi/KTGq9JG-3HI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3QDVWN6qzbbH6FklCDtBnHBiEmw",
        link: "https://www.youtube.com/watch?v=KTGq9JG-3HI",
      },
      {
        src: "https://i.ytimg.com/vi/GwShtAmNwjs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCxWkGF5m2rZNgeOksl-bcN5ieSfg",
        link: "https://www.youtube.com/watch?v=GwShtAmNwjs",
      },
    ];

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
    <>
      <div className="mlw">
        <h1
          className={`Mlw-heading ${headingInView ? 'in-view' : ''}`}
          ref={headingRef}
        >
          ML Workshop
        </h1>
        <p
          className={`Mlw-paragraph ${paragraphInView ? 'in-view' : ''}`}
          ref={paragraphRef}
        >
          SAE hosts an exciting workshop focused on building a machine learning prototype. As AI and machine learning gain traction and become increasingly prevalent, this workshop will delve into the essential aspects of machine learning, data science, and algorithm development. Join us to explore and master the cutting-edge technologies shaping the future of automation.
        </p>
        <div
          className={`Mlw-gallery ${galleryInView ? 'in-view' : ''}`}
          ref={galleryRef}
        >
          {galleryImages.map((item, index) => (
            <div key={index} className="Mlw-gallery-item">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.src} alt={`Gallery ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>
        <div className="animated-line"></div>
      </div>
    </>
  );
}

export default Mlw;
