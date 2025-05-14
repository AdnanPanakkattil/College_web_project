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
                }
              }}
            >
              {link.name}
              {link.submenu && isMobile && (
                <span className="text-xl md:hidden inline">
                  {heading === link.name ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              )}
              {link.submenu && !isMobile && (
                <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <FaChevronDown />
                </span>
              )}
            </h1>
            {link.submenu && !isMobile && (
              <div className="absolute z-20 top-full left-0 hidden group-hover:md:block hover:md:block">
                <div className="py-3">
                  <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                </div>
                <div className= "  bg-white text-black rounded-2xl p-1 grid grid-cols-1 w-[200px] pl-4 gap-10 shadow-lg">
                  {link.sublinks.map((mysublinks) => (
                    <div key={mysublinks.Head}>
                      <h1 className="text-lg font-semibold text-black">
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
            <ul className="pl-4">
              {link.sublinks.map((slinks) => (
                <li key={slinks.Head}>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 font-semibold text-black hover:text-blue-600 transition-colors duration-200 flex justify-between items-center"
                  >
                    {slinks.Head}
                    <span className="text-xl inline">
                      {subHeading === slinks.Head ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </h1>
                  {subHeading === slinks.Head && (
                    <ul className="pl-4">
                      {slinks.sublink.map((slink) => (
                        <li key={slink.name} className="py-2">
                          <Link
                            to={slink.link}
                            className="text-black hover:text-blue-600 transition-colors duration-200"
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