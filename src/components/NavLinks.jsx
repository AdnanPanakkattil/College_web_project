import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { links } from "./Mylinks";

const NavLinks = ({ isMobile = false }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <li key={link.name} className="relative">
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-2 flex justify-between items-center md:pr-0 pr-5 text-black hover:text-blue-600 transition-colors duration-200"
              onClick={() => {
                if (isMobile) {
                  heading !== link.name ? setHeading(link.name) : setHeading("");
                  setSubHeading("");
                } else {
                  setHeading(heading !== link.name ? link.name : "");
                }
              }}
              aria-expanded={heading === link.name}
              aria-controls={`menu-${link.name}`}
            >
              {link.name}
              {link.submenu && isMobile && (
                <span className="text-base sm:text-lg inline transition-transform duration-200">
                  {heading === link.name ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              )}
              {link.submenu && !isMobile && (
                <span className="text-base sm:text-lg md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 transition-transform duration-200">
                  <FaChevronDown />
                </span>
              )}
            </h1>
            {link.submenu && !isMobile && (
              <div
                className={`absolute z-20 top-full left-1/2 -translate-x-1/2 hidden group-hover:md:block hover:md:block ${
                  heading === link.name ? "md:block" : ""
                }`}
              >
                <div className="py-3">
                  <div className="w-4 h-4 left-1/2 -translate-x-1/2 absolute mt-1 bg-white rotate-45"></div>
                </div>
                <div className="bg-white text-black rounded-2xl p-1 grid grid-cols-1 w-[200px] sm:w-[250px] pl-4 gap-10 shadow-lg">
                  {link.sublinks.map((mysublinks) => (
                    <div key={mysublinks.Head}>
                      <h1 className="text-base sm:text-lg font-semibold text-black">
                        {mysublinks.Head}
                      </h1>
                      {mysublinks.sublink.map((slink) => (
                        <li key={slink.name} className="text-sm my-2.5">
                          <Link
                            to={slink.link}
                            className="text-black hover:text-blue-600 transition-colors duration-200"
                          >
                            {slink.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {isMobile && link.submenu && heading === link.name && (
            <ul className="pl-4 max-h-[70vh] overflow-y-auto transition-all duration-300">
              {link.sublinks.map((slinks) => (
                <li key={slinks.Head}>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 font-semibold text-black hover:text-blue-600 transition-colors duration-200 flex justify-between items-center"
                    aria-expanded={subHeading === slinks.Head}
                    aria-controls={`submenu-${slinks.Head}`}
                  >
                    {slinks.Head}
                    <span className="text-base sm:text-lg inline transition-transform duration-200">
                      {subHeading === slinks.Head ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </h1>
                  {subHeading === slinks.Head && (
                    <ul className="pl-4 transition-all duration-300">
                      {slinks.sublink.map((slink) => (
                        <li key={slink.name} className="py-2">
                          <Link
                            to={slink.link}
                            className="text-black hover:text-blue-600 transition-colors duration-200 text-sm"
                          >
                            {slink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

export default NavLinks;