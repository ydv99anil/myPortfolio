import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        
      <div className="text-xlg font-semibold cursor-pointer text-2xl">
        <span className="text-[#8245ec]">&lt;</span>
        <span className="text-white">Anil</span>
        <span className="text-[#8245ec]">/</span>
        <span className="text-white">Yadav</span>
        <span className="text-[#8245ec]">&gt;</span>
      </div>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaTwitter />, link: "https://x.com/ydvanil09" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/anil-yadav-b12a21257" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/arj_edi.tz/" },
            { icon: <FaYoutube />, link: "http://www.youtube.com/@arj_edit.z" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Anil Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;