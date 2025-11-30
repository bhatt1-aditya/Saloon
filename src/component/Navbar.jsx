import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out overflow-hidden ${
        isFixed
          ? "bg-[#e9e4dc]/95 shadow-md backdrop-blur-sm"
          : "bg-black/20 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className={`relative flex items-center justify-center transition-all duration-700 ease-in-out ${
        isFixed ? "py-6 px-6" : "py-6 px-6"
      }`}>
        {/* Left Section */}
        <div className={`absolute left-6 flex items-center space-x-8 transition-colors duration-700 ${
          isFixed ? "text-black" : "text-white"
        }`}>
          <a
            href="#services"
            className="hover:text-gray-300 font-medium transition"
          >
            Service & Price ←
          </a>
          <a
            href="#about"
            className="hover:text-gray-300 font-medium transition"
          >
            About
          </a>
          <a
            href="#inspired"
            className="hover:text-gray-300 font-medium transition"
          >
            Get Inspired
          </a>
        </div>

        {/* Center Logo (Perfectly Centered) - Acts as Home Button */}
        <a
          href="/"
          className={`font-extrabold tracking-wider transition-all duration-700 ease-in-out cursor-pointer ${
            isFixed 
              ? "text-[#9b2c2c] text-xl hover:text-red-700" 
              : "text-white text-6xl hover:text-gray-200"
          }`}
        >
          RENASANZ
        </a>

        {/* Right Section */}
        <div className={`absolute right-6 transition-colors duration-700 ${
          isFixed ? "text-black" : "text-white"
        }`}>
          <a
            href="#book"
            className="hover:text-gray-300 font-medium transition"
          >
            → Book Here
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;