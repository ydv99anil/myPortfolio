import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import aLogo from "../../assets/icons/LogoA.png";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const handleMenuItem = (pageId) => {
    setActive(pageId);
    setIsOpen(false);

    const section = document.getElementById(pageId);
    if (section) {
      section.scrollIntoView({behavior: "smooth"})
    } 
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full h-fit z-100 transition duration-300 px-[15vw] md:px-[15vw] lg:px-[15vw] bg-transparent bg-opacity-50 backdrop-blur-xl shadow-md`}
    >
      <div className="text-white py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xlg font-bold cursor-pointer text-2xl flex flex-row items-center gap-2">
          <img src={aLogo} alt="LogoImage" className="w-8 h-8"/>
          <h1 className="font-serif italic bg-amber-700 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-gray-600 to-orange-400">ANIL</h1>
        </div>

        {/* navItems */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#405ed4] ${
                active === item.id ? "text-[#405ed4]" : ""
              }`}
            >
              <button onClick={() => handleMenuItem(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* mediaItems */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/ydv99anil"
            target="_self"
            rel="noopener npreferrer"
            className="text-gray-300 hover:text-[#405ed4]"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/anil-yadav-b12a21257"
            target="_self"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#405ed4]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* mobileMenuicons */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-white cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* mobile nav items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  active === item.id ? "text-[#405ed4]" : ""
                }`}
              >
                <button onClick={() => handleMenuItem(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/ydv99anil"
                target="_self"
                rel="noopenner npreferrer"
                className="text-gray-300 hover:text-[#405ed4]"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/anil-yadav-b12a21257"
                target="_self"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#405ed4]"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
