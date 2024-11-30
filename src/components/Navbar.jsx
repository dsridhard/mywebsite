import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <nav className="bg-gray-800 text-white  w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Portfolio
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="block sm:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Links for larger screens */}
        <div className="hidden sm:flex space-x-4">
          {" "}
          <Link
            to="/"
            className={`hover:text-gray-400 ${
              activeLink === "/" ? "active-link" : ""
            }`}
            onClick={() => handleLinkClick("/")}
          >
            {" "}
            Home{" "}
          </Link>{" "}
          <Link
            to="/portfolio"
            className={`hover:text-gray-400 ${
              activeLink === "/portfolio" ? "active-link" : ""
            }`}
            onClick={() => handleLinkClick("/portfolio")}
          >
            {" "}
            Portfolio{" "}
          </Link>{" "}
          <Link
            to="/about"
            className={`hover:text-gray-400 ${
              activeLink === "/about" ? "active-link" : ""
            }`}
            onClick={() => handleLinkClick("/about")}
          >
            {" "}
            About{" "}
          </Link>{" "}
          <Link
            to="/contact"
            className={`hover:text-gray-400 ${
              activeLink === "/contact" ? "active-link" : ""
            }`}
            onClick={() => handleLinkClick("/contact")}
          >
            {" "}
            Contact{" "}
          </Link>{" "}
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-800">
          <div className="flex flex-col items-center space-y-2 py-4">
            <Link
              to="/"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
