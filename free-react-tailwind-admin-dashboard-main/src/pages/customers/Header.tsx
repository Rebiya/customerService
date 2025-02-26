import React from "react";

const Header: React.FC = () => {
  return (
    <header
      id="header"
      className="fixed top-0 w-full bg-black bg-opacity-35 shadow-md z-50" // Added bg-opacity-75 for faded black background
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <a
          href="index.html"
          className="flex items-center text-lg font-bold text-white"
        >
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt="Logo" className="h-8 mr-2" /> */}
          <h1 className="sitename text-white">GP</h1>
          <span className="text-white">.</span>
        </a>

        <nav id="navmenu" className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#hero" className="text-white hover:text-gray-300 active">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-white hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-white hover:text-gray-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#team" className="text-white hover:text-gray-300">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <a
          className="btn-getstarted bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          href="index.html#about"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
