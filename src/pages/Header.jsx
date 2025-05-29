import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-neutral-900 text-white h-13 ">
     
        <div className=" container flex justify-between items-center">
          <NavLink
            to="/"
            id="brand"
            className="gap-2 flex justify-between items-center"
          >
            <span className="text-4xl font-bold text-bold bg-gradient-to-r from-[#3A86FF] to-[#FF006E]  bg-clip-text text-transparent">
              Bhavesh Tank
            </span>
          </NavLink>
          <ul className="flex text-2xl gap-7 items-center justify-between ">
            <li>
              <NavLink
                to="/"
                className=" hover:text-[#FF006E] transition-colors duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className=" hover:text-[#FF006E] transition-colors duration-300"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="services" className="  ">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="projects"
                className=" hover:text-[#FF006E] transition-colors duration-300"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="team"
                className=" hover:text-[#FF006E] transition-colors duration-300"
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Testimonials"
                className=" hover:text-[#FF006E] transition-colors duration-300"
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Contect"
                className=" hover:text-[#FF006E] transition-colors duration-300"
              >
                Contect
              </NavLink>
            </li>
          </ul>
        </div>
    
    </header>
  );
}

export default Header;
