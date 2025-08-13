import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Contectform from "./Contectform";
function Contect() {
  return (
    <section className="w-full sm:w-full bg-black text-white pt-15 pb-20">
      <div className="container mx-auto px-4 py-4   ">
        <div className="text-center  ">
          <h2 className="md:text-5xl font-bold text-white text-3xl  py-5">
            Get In Touch
          </h2>

          <div className=" h-2 w-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

          <p className="text-xl mt-5 ">
            Ready to discuss your project? Reach out to us for a consultation or
            just to say hello.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 ">
          {/* contect info  */}
          <div className="lg:w-1/2 mt-10  ">
            <div className="bg-neutral-800 rounded-2xl p-8 shadow-lg  h-full ">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h3>
              <p>
                Feel free to reach out to us through any of these channels.
               
              </p>
              {/* contact details  */}
              <div className="space-y-6 mt-10 ">
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full bg-[#3A86FF]/10 flex items-center justify-center mr-4 shrink-0">
                    <IoCallOutline className="lg:text-3xl md:text-2xl text-1xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 ">Phone</h4>
                    <p className="text-neutral-300 ">+91 7375833508</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full bg-[#3A86FF]/10 flex items-center justify-center mr-4 shrink-0">
                    <MdOutlineMailOutline className="lg:text-3xl md:text-2xl text-1xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 ">Email</h4>
                    <p className="text-neutral-300 ">
                      Bhavesh.tank1016@gamil.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full bg-[#3A86FF]/10 flex items-center justify-center mr-4 shrink-0">
                    <SlLocationPin className="lg:text-3xl md:text-2xl text-1xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 ">Location</h4>
                    <p className="text-neutral-300 ">Jaipur ,Rajasthan </p>
                  </div>
                </div>
                {/* social media */}
                {/* social media */}
                <div className="mt-10">
                  <h4 className="font-bold text-xl text-white">
                    Contact With Us
                  </h4>
                  <div className="flex mt-3 space-x-5 text-3xl">
                    <a
                      href="https://github.com/bhaveshtank1016"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-400"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bhavesh-tank-502334314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://www.instagram.com/your-username/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-400"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://wa.me/917375833508"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-400"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>

                <div className="mt-10 bg-[#25D266]/30 p-6 rounded-xl">
                  <div className="flex items-center">
                    <div className="h-15 w-15 rounded-full bg-[#25D266]/50 flex items-center justify-center mr-4 shrink-0">
                      <FaWhatsapp className="text-4xl" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-white text-2xl">
                        WhatsApp Business
                      </h4>
                      <p className="text-neutral-300 text-sm">
                        Get Instant response to your queires
                      </p>
                    </div>
                  </div>
                  <NavLink
                    to="#"
                    className="mt-4 w-full block bg-[#25D366] text-white text-center rounded-2xl text-xl p-3"
                  >
                    Chat Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* contect form  */}
          <Contectform />
        </div>
      </div>
    </section>
  );
}

export default Contect;
