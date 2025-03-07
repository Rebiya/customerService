import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header
      id="header"
      className="fixed top-0 w-full bg-black bg-opacity-35 shadow-md z-50"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2 cursor-pointer">
        <Link
          to="hero" // This should match the section id
          className="flex items-center text-lg font-bold text-white"
        >
          <h1 className="sitename text-blue-700">GP</h1>
          <span className="text-white">.</span>
        </Link>

        <nav id="navmenu" className="hidden md:flex space-x-4 cursor-pointer">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-white hover:text-blue-500">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/team" className="text-white hover:text-blue-500">
                Team
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <a
          className="btn-getstarted bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900 cursor-pointer"
          href="index.html#about"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
