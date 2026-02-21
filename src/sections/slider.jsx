import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

import slide1 from "../assets/images/swipe-1.webp";
import slide2 from "../assets/images/swipe-2.jpg";
import slide3 from "../assets/images/swipe-3.jpg";
import slide4 from "../assets/images/swipe-4.png";
import slide5 from "../assets/images/swipe-5.jpg";
import slide6 from "../assets/images/swipe-6.jpg";
import slide7 from "../assets/images/swipe-7.jpg";

const slides = [
  { id: 1, image: slide1, title: "Cryptech", aspectRatio: "16:9" },
  { id: 2, image: slide2, title: "Self Driving Vehicle", aspectRatio: "16:9" },
  { id: 3, image: slide3, title: "Robotics Workshop", aspectRatio: "4:3" },
  { id: 4, image: slide4, title: "Tech Conference", aspectRatio: "1:1" },
  { id: 5, image: slide5, title: "ML Workshop", aspectRatio: "3:4" },
  { id: 6, image: slide6, title: "AAROHAN Event", aspectRatio: "4:3" },
  { id: 7, image: slide7, title: "TEDx NIT Durgapur", aspectRatio: "16:9" },
];

export const slider = ({ 
  slides: customSlides = slides,
  className = "" 
}) => {
  const swiperRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      slideRefs.current.slice(0, 3),
      { opacity: 0, y: 30, scale: 0.95 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      }
    );
  }, []);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    const slidesPerView = 3;

    const visibleSlides = slideRefs.current.slice(
      activeIndex, 
      activeIndex + slidesPerView
    );
    
    gsap.fromTo(
      visibleSlides,
      { opacity: 0.7, scale: 0.98 },
      { 
        opacity: 1, 
        scale: 1,
        duration: 0.6,
        ease: "power2.out"
      }
    );
  };

  const handleNavClick = () => {
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-4xl font-bold text-foreground md:text-5xl font-NB">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground font-heading">
            Explore our collection of events and innovations
          </p>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={handleSlideChange}
            className="!pb-4"
          >
            {customSlides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <div
                  ref={(el) => (slideRefs.current[index] = el)}
                  className="group relative overflow-hidden rounded-2xl bg-card shadow-lg transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0">
                      <h3 className="text-xl font-semibold text-foreground">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            className="swiper-button-prev-custom absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-x-6 -translate-y-1/2 items-center justify-center rounded-full bg-card shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:scale-110 active:scale-95 disabled:opacity-50 disabled:hover:bg-card md:-translate-x-6"
            aria-label="Previous slide"
            onClick={handleNavClick}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            className="swiper-button-next-custom absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 translate-x-6 items-center justify-center rounded-full bg-card shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:scale-110 active:scale-95 disabled:opacity-50 disabled:hover:bg-card md:translate-x-6"
            aria-label="Next slide"
            onClick={handleNavClick}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};


export default slider;