import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaGreaterThan, FaArrowRightLong, FaArrowUp } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          
          {/* Company Info */}
          <div>
            <NavLink to="/" id="brand" className="gap-2 flex justify-center md:justify-start items-center">
              <span className="text-4xl font-bold bg-gradient-to-r from-[#3A86FF] to-[#FF006E] bg-clip-text text-transparent">
                Bhavesh Tank
              </span>
            </NavLink>
            <p className="mb-6 mt-6 text-neutral-400">
              Professional Full-Stack Mobile & Web Developer providing high-quality development services and innovative solutions for your digital needs.
            </p>
            <div className="text-3xl flex justify-center md:justify-start items-center gap-4">
              {[
                { icon: <FaGithub />, link: "#" },
                { icon: <FaLinkedin />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FiTwitter />, link: "#" },
                { icon: <FaWhatsapp />, link: "#" }
              ].map((item, idx) => (
                <a key={idx} href={item.link} className="w-12 h-12 rounded-full bg-neutral-600 flex items-center justify-center hover:bg-neutral-500 transition">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Quick Links</h3>
            <div className="h-1 w-20 mx-auto md:mx-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <ul className="mt-5 text-lg space-y-3">
              {["Home", "About", "Services", "Projects", "Team", "Contact", "Privacy Policy"].map((link, idx) => (
                <li key={idx}>
                  <NavLink to="#" className="flex justify-center md:justify-start items-center text-neutral-400 hover:text-white transition-colors duration-300">
                    <FaGreaterThan className="mr-3 text-blue-900" /> {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Services</h3>
            <div className="h-1 w-20 mx-auto md:mx-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <ul className="mt-5 text-lg space-y-3">
              {["Mobile App Development", "Web Development", "Custom Software Solutions", "UI/UX Optimization", "E-Commerce Solutions"].map((service, idx) => (
                <li key={idx}>
                  <NavLink to="#" className="flex justify-center md:justify-start items-center text-neutral-400 hover:text-white transition-colors duration-300">
                    <FaGreaterThan className="mr-3 text-pink-600" /> {service}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
            <div className="h-1 w-20 mx-auto md:mx-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <div className="space-y-4 mt-5">
              <div className="flex justify-center md:justify-start items-center">
                <IoCallOutline className="text-2xl text-blue-800 mr-3" /> 
                <p className="text-neutral-300">+91 7375833508</p>
              </div>
              <div className="flex justify-center md:justify-start items-center">
                <MdOutlineMailOutline className="text-2xl text-pink-700 mr-3" />
                <p className="text-neutral-300">bhavesh.tank1016@gmail.com</p>
              </div>
              <div className="flex justify-center md:justify-start items-center">
                <SlLocationPin className="text-2xl text-blue-800 mr-3" />
                <p className="text-neutral-300">Jaipur, Rajasthan</p>
              </div>
              {/* Newsletter */}
              <div className="mt-6">
                <h3 className="text-white text-lg">Subscribe to Newsletter</h3>
                <form className="flex mt-2">
                  <input type="email" placeholder="Your Email" className="px-4 py-2 bg-neutral-700 text-white rounded-l-lg focus:outline-none w-full" />
                  <button type="submit" className="bg-gradient-to-r from-[#3A86FF] to-[#FF006E] text-white px-4 rounded-r-lg hover:opacity-80 transition-opacity">
                    <FaArrowRightLong />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-600 my-8"></div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 px-4 text-center md:text-left">
        <div className="text-sm text-neutral-500">© 2025 Bhavesh Tank. All rights reserved.</div>
        <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4 text-neutral-500">
          <NavLink to="#">Privacy Policy</NavLink>
          <NavLink to="#">Terms of Service</NavLink>
          <NavLink to="#">Cookie Policy</NavLink>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="flex justify-center mt-6">
        <NavLink to="/home" className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center hover:bg-[#3A86FF] transition-colors duration-300">
          <FaArrowUp />
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
