import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useQuery } from "react-query";
import { getCoursesData } from "../utils/Courses/coursesApi";

// Mock contact info
const contactInfo = {
  phone: "+1 111 (564) 568 25",
  email: "info@edura.com",
  hours: "Mon - Sat: 8:00 - 15:00",
};


const flattenCourses = (data) =>
  data?.data?.flatMap((course) =>
    course.submenu
      ? course.sublinks.flatMap((sublink) =>
          sublink.sublink.map((slink) => ({
            name: `${sublink.Head} - ${slink.courses_name}`,
            path: slink.link || `#${slink.courses_name}`,
          }))
        )
      : [{ name: course.courses_name, path: course.link }]
  ) || [];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false); 


  const { data, isLoading, isError } = useQuery("getCourses", getCoursesData);
  const courses = flattenCourses(data); 

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
        timeoutId = null;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
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
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{contactInfo.hours}</span>
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
            <a href="" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300" >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </nav>

      {/* Second Navbar */}

      <nav className="bg-white rounded-tl-3xl rounded-tr-3xl shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-gray-800">College</span>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-2xl text-gray-800" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} >
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

            <li className="h-10 flex items-center relative" onMouseEnter={() => setIsCoursesOpen(true)} onMouseLeave={() => setIsCoursesOpen(false)}>
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                <span>Courses</span>
                <FaChevronDown className={`text-xs transition-transform ${isCoursesOpen ? "rotate-180" : ""}`} />
              </div>
              {isCoursesOpen && (
                <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-48 z-50">

                  {!isLoading &&
                    !isError &&
                    courses.map((course) => (
                      <li key={course.path} className="px-4 py-2 hover:bg-gray-100">
                        <Link to={course.path} className="text-gray-800 hover:text-blue-600">
                          {course.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </li>

            <li className="h-10 flex items-center">
              <Link to="/services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
          </ul>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setOpen(false)}></div>
      )}
      <ul role="menu" aria-hidden={!open} className={`md:hidden bg-white fixed w-3/4 max-w-xs top-0 bottom-0 left-0 py-16 pl-4 transition-transform duration-500 z-50 ${ open ? "translate-x-0" : "-translate-x-full" }`}>
        <li role="menuitem" className="py-2">
          <Link to="/" className="text-gray-800 hover:text-blue-600 text-sm" onClick={() => setOpen(false)} >
            Home
          </Link>
        </li>
        <li role="menuitem" className="py-2">
          <Link to="/about"className="text-gray-800 hover:text-blue-600 text-sm" onClick={() => setOpen(false)}>
            About Us
          </Link>
        </li>

        <li role="menuitem" className="py-2">
          <div className="flex items-center gap-1 text-gray-800 hover:text-blue-600 text-sm cursor-pointer" onClick={() => setIsCoursesOpen(!isCoursesOpen)} role="button" aria-expanded={isCoursesOpen} aria-controls="courses-submenu">
            <span>Courses</span>
            {isCoursesOpen ? (
              <FaChevronDown className="text-xs" />
            ) : (
              <FaChevronRight className="text-xs" />
            )}
          </div>
          {isCoursesOpen && (
            <ul id="courses-submenu" className="pl-4" aria-hidden={!isCoursesOpen}>
       
              {!isLoading &&
                !isError &&
                courses.map((course) => (
                  <li key={course.path} className="py-2">
                    <Link 
      
                      className="text-gray-800 hover:text-blue-600 text-sm"
                      onClick={() => setOpen(false)}
                    >
                      {course.name}
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </li>


        <li role="menuitem" className="py-2">
          <Link
            to="/services"
            className="text-gray-800 hover:text-blue-600 text-sm"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
        </li>
        <li role="menuitem" className="py-2">
          <Link to="/contact" onClick={() => setOpen(false)}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
              CONTACT US
            </button>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;