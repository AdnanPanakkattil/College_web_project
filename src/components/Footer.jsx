import React from 'react';
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="min-h-[200px] w-full text-center bg-blue-600 font-bold text-white py-8 md:py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-4">
        {/* Quick Links */}
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-xs md:text-sm">
            <li><a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Home</a></li>
            <li><a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">About Us</a></li>
            <li><a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Apply Now</a></li>
            <li><a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4">CONTACT INFO</h3>
          <p className="text-xs md:text-sm mb-2">
            1st Floor, Karthikeyan Complex, Rayiladi Street, Attur, Salem - 636102
          </p>
          <p className="text-xs md:text-sm mb-2">+91-9042379954</p>
          <p className="text-xs md:text-sm">admin@jseducation.in</p>
           <div className="flex justify-center items-center gap-4 py-5">
                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-300">
                   <FaFacebookF/>
                 </a>
                 <a href=" " target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gray-300">
                   <FaTwitter/>
                 </a>
                 <a href=" " target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-300">
                   <FaInstagram/>
                 </a>
                 <a href=" " target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300">
                   <FaLinkedinIn/>
                 </a>

               </div>
        </div>

        {/* Map Section */}
        <div>
          {/* <h3 className="text-base md:text-lg font-semibold mb-4">REACH US</h3> */}
          <div className="bg-gray-300 min-h-[120px] xl:w-[600px] md:min-h-[160px] w-full rounded-lg overflow-hidden">
            <div className="h-full w-full flex items-center justify-center text-gray-600 text-xs md:text-sm">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.971909362352!2d75.98869769598804!3d11.001591126577207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b4a66b9e1243%3A0x57ad4731fa4b1279!2sKottakkal%2C%20Kerala!5e0!3m2!1sen!2sin!4v1744087532318!5m2!1sen!2sin"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;