import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import { Menu, X } from "lucide-react"; // optional icons
function Header() {
  const linkbtn = [
    { link: "/", title: "Home" },
    { link: "about", title: "About" },
    { link: "services", title: "Services" },
    { link: "projects", title: "Projects" },
    { link: "team", title: "Team" },
    { link: "testimonials", title: "Testimonials" },
    { link: "contect", title: "Contect" },
  ];
   
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-neutral-950 text-white fixed bg-opacity-90 backdrop-blur-sm shadow-lg z-50 ">
      <div className=" container mx-auto px-4 py-4">
        <div className=" flex justify-between items-center">
          {/* logo  */}

          <NavLink
            to="/"
            id="brand"
            className="gap-2 flex justify-between items-center"
          >
            <span className="text-4xl font-bold text-bold bg-gradient-to-r from-[#3A86FF] to-[#FF006E]  bg-clip-text text-transparent">
              Bhavesh Tank
            </span>
          </NavLink>

          <ul className=" hidden md:flex text-2xl gap-7 items-center justify-between ">
            {linkbtn.map((navi) => (
              <li>
                <NavLink
                  to={navi.link}
                  className=" hover:text-[#FF006E] transition-colors duration-300"
                >
                  {navi.title}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* mobile navigation  */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
        {/* mobile menu  */}
        <div
          id="mobilemenu"
          className="  md:hidden mt-4 bg-neutral-800 rounded-lg"
        >
          {isOpen && (
            <div  className="md:hidden bg-neutral-800 px-4 pb-4 space-y-2">
            {linkbtn.map((nevee) => (
             <NavLink
             key={nevee.link}
              to={nevee.link}
              className="block py-2 px-4 hover:bg-neutral-400 rounded-lg transition-colors duration-300  "
            >
              {nevee.title}
            </NavLink>
             ))}
           </div>
           
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
