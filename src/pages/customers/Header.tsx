import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserDropdown from "../../components/header/UserDropdown";
import { useAuth } from "../../context/AuthContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Icons for toggle button

const Header: React.FC = () => {
  const { isLoggedIn } = useAuth(); // Get auth state
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage mobile nav toggle

  // Toggle navigation menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header
      id="header"
      className="fixed top-0 w-full bg-black bg-opacity-35 shadow-md z-50"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo and Toggle Button (for mobile) */}
        <div className="flex items-center">
          <button
            onClick={toggleNav}
            className="md:hidden text-white focus:outline-none"
          >
            {isNavOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
          <Link
            to="/"
            className="flex items-center text-lg font-bold text-white ml-2"
          >
            <h1 className="sitename text-blue-700">GP</h1>
            <span className="text-white">.</span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav
          id="navmenu"
          className={`${
            isNavOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-black bg-opacity-90 md:bg-transparent p-4 md:p-0`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <li>
              <Link
                to="/"
                className="text-white hover:text-blue-500 block"
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-blue-500 block"
                onClick={() => setIsNavOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white hover:text-blue-500 block"
                onClick={() => setIsNavOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="text-white hover:text-blue-500 block"
                onClick={() => setIsNavOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/testimonial"
                className="text-white hover:text-blue-500 block"
                onClick={() => setIsNavOpen(false)}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-blue-500 block"
                onClick={() => setIsNavOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* User Dropdown or Get Started Button */}
        <div className="flex items-center">
          {isLoggedIn ? (
            <UserDropdown />
          ) : (
            <Link
              className="btn-getstarted bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900 cursor-pointer"
              to="/signin"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
