import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import NavLinks from "./NavLinks";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header>
      {/* Top Navbar */}
      <nav
        className={`bg-blue-600 text-white py-3 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } hidden md:block`}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span>+1 111 (564) 568 25</span>
            </div>
            <div className="flex items-center gap-2">
              <span>info@edura.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Mon - Sat: 8:00 - 15:00</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs sm:text-sm">FOLLOW US:</span>
            <a href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300">
              <FaLinkedinIn />
            </a>
            {/* <Link to="/login" className="text-xs sm:text-sm hover:text-gray-300">
              LOGIN / REGISTER
            </Link> */}
          </div>
        </div>
      </nav>

      {/* Second Navbar */}
      <nav className="bg-white rounded-tl-3xl rounded-tr-3xl shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-gray-800">LOGO</span>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl text-gray-800"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <ul className="hidden md:flex items-center gap-6 uppercase text-gray-800 font-medium text-sm">
            <li className="h-10 flex items-center">
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li className="h-10 flex items-center">
              <Link to="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li className="h-10">
              <NavLinks />
            </li>
            <li className="h-10 flex items-center">
              <Link to="/services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
          </ul>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/Contact">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                CONTACT US
              </button>
            </Link>
          </div>
          <ul
            className={`md:hidden bg-white fixed w-3/4 max-w-xs top-0 bottom-0 left-0 py-16 pl-4 transition-transform duration-500 z-50 ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <li className="py-2">
              <Link to="/" className="text-gray-800 hover:text-blue-600 text-sm" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link to="/about" className="text-gray-800 hover:text-blue-600 text-sm" onClick={() => setOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="py-2">
              <NavLinks/>
            </li>
            <li className="py-2">
              <Link to="/services" className="text-gray-800 hover:text-blue-600 text-sm" onClick={() => setOpen(false)}>
                Services
              </Link>
            </li>
            <li className="py-2">
              <Link to="/contact" onClick={() => setOpen(false)}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm">
                  CONTACT US
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;