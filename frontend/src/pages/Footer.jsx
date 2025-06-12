import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaGreaterThan } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";



function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* company info  */}
          <div>
            <div>
              <NavLink
                to="/"
                id="brand"
                className="gap-2 flex justify-between items-center"
              >
                <span className="text-4xl font-bold text-bold bg-gradient-to-r from-[#3A86FF] to-[#FF006E]  bg-clip-text text-transparent">
                  Bhavesh Tank
                </span>
              </NavLink>
            </div>
            <p className="mb-6 mt-6 text-neutral-400">
              Professional Full-Stack Mobile & Web Developer providing
              high-quality development services and innovative solutions for
              your digital needs.
            </p>
            <div className="text-3xl flex  items-center gap-6">
              <NavLink
                to="#"
                className="w-12 h-12 rounded-full bg-neutral-600 flex  items-center justify-center "
              >
                <FaGithub />{" "}
              </NavLink>
              <NavLink
                to="#"
                className="w-12 h-12 rounded-full bg-neutral-600 flex  items-center justify-center "
              >
                <FaLinkedin />{" "}
              </NavLink>
              <NavLink
                to="#"
                className="w-12 h-12 rounded-full bg-neutral-600 flex  items-center justify-center "
              >
                <FaInstagram />{" "}
              </NavLink>
              <NavLink
                to="#"
                className="w-12 h-12 rounded-full bg-neutral-600 flex  items-center justify-center "
              >
                <FiTwitter />{" "}
              </NavLink>
              <NavLink
                to="#"
                className="w-12 h-12 rounded-full bg-neutral-600 flex  items-center justify-center "
              >
                <FaWhatsapp />{" "}
              </NavLink>
            </div>
          </div>
          {/* quick link  */}
          <div className="">
            <h3 className="text-3xl font-bold mb-2 ">Quick Links</h3>
            <div className="h-2 w-20  rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <ul className="mt-5 text-xl space-y-5">
              <li>
                <NavLink
                  to="#"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-centern"
                >
                  <FaGreaterThan className="mr-3 text-blue-900" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <FaGreaterThan className="mr-3 text-blue-900" />
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <FaGreaterThan className="mr-3 text-blue-900" />
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <FaGreaterThan className="mr-3 text-blue-900" />
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <FaGreaterThan className="mr-3 text-blue-900" />
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <FaGreaterThan className="mr-3 text-blue-900" />
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <FaGreaterThan className="mr-3 text-blue-900" />
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* services  */}
          <div>
            <h3 className="text-3xl font-bold mb-2 ">Services</h3>
            <div className="h-2 w-20  rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <ul className="mt-5 text-xl space-y-5">
              <li>
                <NavLink
                  to="#"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-centern"
                >
                  <FaGreaterThan className="mr-3 text-pink-600" />
                  Mobile App Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-centern"
                >
                  <FaGreaterThan className="mr-3 text-pink-600" />
                  Web Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-centern"
                >
                  <FaGreaterThan className="mr-3 text-pink-600" />
                  custom Software solutions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-centern"
                >
                  <FaGreaterThan className="mr-3 text-pink-600" />
                  UI/UX Optimization
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-centern"
                >
                  <FaGreaterThan className="mr-3 text-pink-600" />
                  E-Commerce Solutions
                </NavLink>
              </li>
            </ul>
          </div>

          {/* contact us  */}
          <div>
            <h3 className="text-3xl font-bold mb-2 ">Contact Us</h3>
            <div className="h-2 w-20  rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <div className="space-y-3">
              <div className="flex items-center mt-5 ">
                <div className="mr-4  shrink-0"> <IoCallOutline className="lg:text-2xl md:text-2xl text-blue-800  text-1xl" /></div>
                <div><p className="text-neutral-300 ">+91 7375833508</p>  </div>
              </div>
               <div className="flex items-center mt-5 ">
                <div className="mr-4  shrink-0"> <MdOutlineMailOutline  className="lg:text-2xl md:text-2xl text-pink-700 text-1xl" /></div>
                <div><p className="text-neutral-300 ">bhavesh.tank1016@gamil.com</p>  </div>
              </div>
               <div className="flex items-center mt-5 ">
                <div className="mr-4  shrink-0"> <SlLocationPin className="lg:text-2xl md:text-2xl text-blue-800  text-1xl" /></div>
                <div><p className="text-neutral-300 ">Jaiput, Rajasthan</p>  </div>
              </div>
<div>
  <h3 className="text-white text-lg mt-10">Subscribe to Newsletter</h3>
  <form className="flex">
    <input type="Email" placeholder="Your Email" className="px-4 py-2 bg-neutral-700 text-white rounded-lg focus:outline-none w-full" />
    <button type="submit" className="bg-gradient-to-r form-[#3A86FF] to-[#FF006E] text-white px-4 rounded-r-lg hover:opacity-80 transition-opacity"><FaArrowRightLong /></button>
  </form>
</div>
            </div>
          </div>
        </div>
      </div>
      {/* divider  */}
      <div className="border-t border-neutral-600 my-10"></div>
      {/* bottom footer  */}
      <div className=" flex mt-5 flex-col md:flex-row justify-between items-center">
        <div className="text-sm  text-neutral-500 md:mb-0">© 2025 Bhavesh Tank. All rights reserved.</div>
        <div className="flex items-center space-x-4 text-neutral-500"> 
          <NavLink to="#">Privacy Policy</NavLink>
          <NavLink to="#">Terms of Service</NavLink>
          <NavLink to="#">Cookie Policy</NavLink>
        </div>
      </div>
      {/* back to Top button  */}
      <div className="flex justify-center mt-8 ">
        <NavLink to="/home" className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center hover:bg-[#3A86FF] transition-colors duration-300"><FaArrowUp /> </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
