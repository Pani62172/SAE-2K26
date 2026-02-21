import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Logo from "../assets/images/saelogo.png";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useGSAP(() => {
    // Initial entry animation
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -100,
      duration: 0.6,
      ease: "power3.out",
    });

    let lastScroll = 0;

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const currentScroll = self.scroll();

        // Only trigger after scrolling 80px
        if (currentScroll > 80) {
          if (self.direction === 1) {
            // scrolling DOWN
            gsap.to(navbarRef.current, {
              y: "-100%",
              duration: 0.35,
              ease: "power2.out",
            });
          } else {
            // scrolling UP
            gsap.to(navbarRef.current, {
              y: "0%",
              duration: 0.35,
              ease: "power2.out",
            });
          }
        }

        lastScroll = currentScroll;
      },
    });
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-0 z-30 w-full mix-blend-difference"
      >
        <div className="main-container py-6 flex justify-between items-center">
          {/* Logo */}
          <div className="font-vogue text-4xl">
            <img src={Logo} alt="Logo" className="h-15 w-auto" />
          </div>

          {/* Hamburger */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="menubar flex flex-col gap-1.5 cursor-pointer"
          >
            <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            ></span>

            <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            ></span>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div
        className={`fixed z-20 inset-0 bg-black text-white flex flex-col items-center justify-center text-2xl gap-6 transition-transform duration-500 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <Link to="/" className="menu-link">
          Home
        </Link>
        <Link to="/projects" className="menu-link">
          Events
        </Link>
        <Link to="/" className="menu-link">
          Teams
        </Link>
        <Link to="/" className="menu-link">
          TED-X
        </Link>
        <Link to="/" className="menu-link">
          AAROHAN
        </Link>
        <Link to="/" className="menu-link">
          Alumni
        </Link>
      </div>
    </>
  );
};

export default Navbar;