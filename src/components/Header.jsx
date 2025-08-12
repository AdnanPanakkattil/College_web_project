import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaChevronDown, FaChevronRight, FaUser } from "react-icons/fa";
import { useQuery } from "react-query";
import { getCoursesData } from "../utils/Courses/coursesApi";

// Mock contact info
const contactInfo = {
  phone: "+1 111 (564) 568 25",
  email: "info@edura.com",
  hours: "Mon - Sat: 8:00 - 15:00",
};


const flattenCourses = (data) => {
  if (!data?.data) {
    return [];
  }
  const courses = data.data.flatMap((course) =>
    course.submenu
      ? course.sublinks.flatMap((sublink) =>
          sublink.sublink.map((slink) => ({
            id: slink.id || slink.courses_name,
            name: `${sublink.Head} - ${slink.courses_name}`,
            path: `/universityPage/${slink.id || slink.courses_name}`,
          }))
        )
      : [
          {
            id: course.id || course.courses_name,
            name: course.courses_name,
            path: `/universityPage/${course.id || course.courses_name}`,
          },
        ]
  );
  console.log("Flattened Courses:", courses);
  return courses;
};


const Header = () => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const { data, isLoading, isError } = useQuery("getCourses", getCoursesData);
  const courses = flattenCourses(data);

  const location = useLocation();

  // Close menus when the route changes
  
  useEffect(() => {
    console.log("Location changed, closing menus");
    setIsCoursesOpen(false);
    setOpen(false);
  }, [location.pathname]);

  // Handle scroll to show/hide the top navbar

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
      {/* Top Navbar (Visible on medium and larger screens) */}
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
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav className="bg-white rounded-tl-3xl rounded-tr-3xl shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-gray-800">College</span>
            </Link>
          </div>
          {/* Hamburger Button for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setOpen(!open);
              }}
              className="text-2xl text-gray-800 border border-gray-300 p-2 rounded hover:bg-gray-100"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          {/* Desktop Menu */}
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
            <li
              className="h-10 flex items-center relative"
              onMouseEnter={() => {
                console.log("Opening Courses Dropdown");
                setIsCoursesOpen(true);
              }}
              onMouseLeave={() => {
                console.log("Closing Courses Dropdown");
                setIsCoursesOpen(false);
              }}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                <span>Courses</span>
                <FaChevronDown className={`text-xs transition-transform ${isCoursesOpen ? "rotate-180" : ""}`} />
              </div>
              {isCoursesOpen && (
                <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-48 z-[1000]">
                  {isLoading && <li className="px-4 py-2 text-gray-600">Loading...</li>}
                  {isError && <li className="px-4 py-2 text-red-600">Error loading courses</li>}
                  {!isLoading && !isError && courses.length === 0 && (
                    <li className="px-4 py-2 text-gray-600">No courses available</li>
                  )}
                  {!isLoading &&
                    !isError &&
                    courses.map((course) => (
                      <li key={course.id} className="px-4 py-2 hover:bg-gray-100">
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
          {/* Desktop Buttons and Login Icon */}
          <div className="hidden md:flex items-center gap-4">

            <Link to="/contact">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => {
            console.log("Closing mobile menu via overlay");
            setOpen(false);
          }}
        ></div>
      )}
      {/* Mobile Menu */}
      <ul
        role="menu"
        aria-hidden={!open}
        className={`md:hidden bg-white fixed w-3/4 max-w-xs top-0 bottom-0 left-0 py-16 pl-4 transition-transform duration-500 z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <li role="menuitem" className="py-2">
          <Link to="/" className="text-gray-800 hover:text-blue-600 text-sm" onClick={() => { setOpen(false); }}>
            Home
          </Link>
        </li>
        <li role="menuitem" className="py-2">
          <Link to="/about" className="text-gray-800 hover:text-blue-600 text-sm" onClick={() => { console.log("Closing mobile menu: About"); setOpen(false); }}>
            About Us
          </Link>
        </li>
        <li role="menuitem" className="py-2">
          <div
            className="flex items-center gap-1 text-gray-800 text-sm cursor-pointer"
            onClick={() => {
              console.log("Toggling Courses Submenu:", !isCoursesOpen);
              setIsCoursesOpen(!isCoursesOpen);
            }}
            role="button"
            aria-expanded={isCoursesOpen}
            aria-controls="courses-submenu"
          >
            <span>Courses</span>
            {isCoursesOpen ? <FaChevronDown className="text-xs" /> : <FaChevronRight className="text-xs" />}
          </div>
          {isCoursesOpen && (
            <ul id="courses-submenu" className="pl-4 mt-2" aria-hidden={!isCoursesOpen}>
              {isLoading && <li className="py-2 text-gray-600">Loading...</li>}
              {isError && <li className="py-2 text-red-600">Error loading courses</li>}
              {!isLoading && !isError && courses.length === 0 && (
                <li className="py-2 text-gray-600">No courses available</li>
              )}
              {!isLoading &&
                !isError &&
                courses.map((course) => (
                  <li key={course.id} className="py-2">
                    <Link
                      to={course.path}
                      className="text-gray-800 text-sm"
                      onClick={() => {
                        console.log("Closing mobile menu: Course", course.name);
                        setOpen(false);
                      }}
                    >
                      {course.name}
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </li>
        <li role="menuitem" className="py-2">
          <Link to="/services" className="text-gray-800 hover:text-blue-600 text-sm" onClick={() => { setOpen(false); }}>
            Services
          </Link>
        </li>
        <li role="menuitem" className="py-2">
          <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm" onClick={() => { console.log("Closing mobile menu: Contact"); setOpen(false); }}>
            CONTACT US
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;