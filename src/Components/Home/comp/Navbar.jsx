"use client";

import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/saelogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useGSAP(() => {
    // Initial Navbar Entry
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -80,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  // Menu Animation Logic
  useGSAP(() => {
    if (menuOpen) {
      // Background Slide Down
      gsap.to(menuRef.current, {
        y: "0%",
        duration: 0.7,
        ease: "power4.inOut",
      });
      // Staggered Link Entry
      gsap.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power3.out", delay: 0.4 }
      );
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.6,
        ease: "power4.inOut",
      });
    }
  }, [menuOpen]);

  const navLinks = ["HOME", "EVENTS", "TEAMS", "TED-X", "AAROHAN", "ALUMNI"];

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-0 z-[100] w-full transition-colors duration-300"
      >
        <div className="w-full px-8 py-6 flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="SAE Logo" className="h-10 lg:h-12 w-auto object-contain" />
          </Link>

          {/* Hamburger / Close Icon */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[110] w-10 h-6 cursor-pointer flex flex-col justify-between items-end"
          >
            <span className={`h-[2px] bg-white transition-all duration-500 ${menuOpen ? "w-10 rotate-45 translate-y-2.5" : "w-10"}`} />
            <span className={`h-[2px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : "w-6"}`} />
            <span className={`h-[2px] bg-white transition-all duration-500 ${menuOpen ? "w-10 -rotate-45 -translate-y-2.5" : "w-10"}`} />
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[90] bg-black flex flex-col items-center justify-center -translate-y-full"
      >
        <div className="flex flex-col items-center gap-6 lg:gap-10">
          {navLinks.map((item, index) => (
            <Link
              key={item}
              ref={(el) => (linksRef.current[index] = el)}
              to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter hover:text-red-600 transition-colors no-underline uppercase"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;