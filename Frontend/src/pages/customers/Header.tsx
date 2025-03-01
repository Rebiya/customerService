import React from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  return (
    <header
      id="header"
      className="fixed top-0 w-full bg-black bg-opacity-35 shadow-md z-50"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2 cursor-pointer">
        <Link
          to="hero" // This should match the section id
          smooth={true}
          duration={500}
          className="flex items-center text-lg font-bold text-white"
        >
          <h1 className="sitename text-yellow-600">GP</h1>
          <span className="text-white">.</span>
        </Link>

        <nav id="navmenu" className="hidden md:flex space-x-4 cursor-pointer">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="text-white hover:text-yellow-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-white hover:text-yellow-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="text-white hover:text-yellow-600"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="text-white hover:text-yellow-600"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="team"
                smooth={true}
                duration={500}
                className="text-white hover:text-yellow-600"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-white hover:text-yellow-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <a
          className="btn-getstarted bg-yellow-600 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
          href="index.html#about"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
