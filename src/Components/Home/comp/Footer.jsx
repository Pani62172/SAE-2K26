import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-[#000000] text-white w-full font-sans relative z-20 overflow-hidden text-left">
      
      {/* Top Divider (Optional: retained from your current layout to keep spacing clean) */}
      <div className='max-w-[1500px] m-auto h-[1px] bg-white/10'></div>

      <footer className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 py-5 items-start">
        
        {/* Logo and Follow Us */}
        <div className="flex flex-col justify-start">
          <img src="./saelogo.png" alt="Logo" className="w-[120px] mb-2" />
          <h5 className="text-[#ca3435] text-2xl mb-3 relative after:content-[''] after:w-[50px] after:h-[2px] after:bg-[#ca3435] after:absolute after:-bottom-2.5 after:left-0">
            Follow us
          </h5>
          <div className="flex gap-[15px]">
            <Link target='_blank' to="https://www.facebook.com/SAENITD?mibextid=ZbWKwL" className="text-white text-2xl transition-colors duration-300 hover:text-[#ca3435]">
              <FaFacebook />
            </Link>
            <Link target='_blank' to="https://www.linkedin.com/company/sae-india-nit-dgp-collegiate-chapter/mycompany/" className="text-white text-2xl transition-colors duration-300 hover:text-[#ca3435]">
              <FaLinkedin />
            </Link>
            <Link target='_blank' to="https://www.youtube.com/@saenitdgp" className="text-white text-2xl transition-colors duration-300 hover:text-[#ca3435]">
              <FaYoutube />
            </Link>
            <Link target='_blank' to="https://www.instagram.com/sae.nitd?igsh=MTd6a3l6cnZtNnY3cA==" className="text-white text-2xl transition-colors duration-300 hover:text-[#ca3435]">
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col justify-start">
          <h5 className="text-[#ca3435] text-2xl mb-3 relative after:content-[''] after:w-[50px] after:h-[2px] after:bg-[#ca3435] after:absolute after:-bottom-2.5 after:left-0">
            Contact Us
          </h5>
          <p className="mb-1 font-sans text-lg">Mahatma Gandhi Avenue, A-zone</p>
          <p className="mb-1 font-sans text-lg">Durgapur, West Bengal, 713209</p>
          <div className="mb-1 font-sans text-lg flex items-center gap-2">
            <FaEnvelope />
            <Link className="text-white no-underline font-serif text-base hover:text-[#ca3435] transition-colors" to="mailto:saeindia@nitdgp.ac.in">
              saeindia@nitdgp.ac.in
            </Link>
          </div>
        </div>

        {/* Contact Info: President */}
        <div className="flex flex-col justify-start">
          <h5 className="text-[#ca3435] text-2xl mb-3 relative after:content-[''] after:w-[50px] after:h-[2px] after:bg-[#ca3435] after:absolute after:-bottom-2.5 after:left-0">
            Debjit Banerjee
          </h5>
          <p className="mb-1 font-sans text-lg">President</p>
          <div className="mb-1 font-sans text-lg flex items-center gap-2">
            <FaEnvelope />
            <Link className="text-white no-underline font-serif text-base hover:text-[#ca3435] transition-colors" to="mailto:president.saeindia@nitdgp.ac.in">
              president.saeindia@nitdgp.ac.in
            </Link>
          </div>
          <div className="mb-1 font-sans text-lg flex items-center gap-2">
            <FaPhoneAlt />
            <Link to="tel:+91 91430 34962" className="text-white no-underline font-serif text-base hover:text-[#ca3435] transition-colors">
              +91 91430 34962
            </Link>
          </div>
        </div>

        {/* Contact Info: Corporate Communication */}
        <div className="flex flex-col justify-start">
          <h5 className="text-[#ca3435] text-2xl mb-3 relative after:content-[''] after:w-[50px] after:h-[2px] after:bg-[#ca3435] after:absolute after:-bottom-2.5 after:left-0">
            Chandan Kumar Roy
          </h5>
          <p className="mb-1 font-sans text-lg">Head of Corporate Communications</p>
          <div className="mb-1 font-sans text-lg flex items-center gap-2">
            <FaEnvelope />
            <Link to="mailto:prasant999.sahu@gmail.com" className="text-white no-underline font-serif text-base hover:text-[#ca3435] transition-colors">
              prasant999.sahu@gmail.com
            </Link>
          </div>
          <div className="mb-2.5 font-sans text-lg flex items-center gap-2">
            <FaPhoneAlt />
            <Link to="tel:+91 7439778324" className="text-white no-underline font-serif text-base hover:text-[#ca3435] transition-colors">
              +91 7439778324
            </Link>
          </div>
        </div>

      </footer>

      {/* Copyright Section */}
      <section className="bg-[#000000] relative z-10 text-white text-center pb-2 pt-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 font-medium">
          Made with ❤️ By SAE-Dev Team @ 2026 
          <Link to="/" className="text-[#ca3435] no-underline hover:underline ml-1"> SAE </Link>. © All rights reserved.
        </div>
      </section>
      
    </div>
  );
}

export default Footer;