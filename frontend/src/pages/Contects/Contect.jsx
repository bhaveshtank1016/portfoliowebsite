import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin ,FaInstagram} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Contectform from "./Contectform";
function Contect() {
  return (
    <section className="w-full sm:w-full bg-neutral-900  text-white pt-15 pb-20">
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
                We're eager to hear about your project and how we can help.{" "}
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
                <div className="mt-10">
                  <h4 className="font-bold text-xl text-white">
                    Contact With Us
                  </h4>
                  <div className="flex mt-3 space-x-5">
                    <NavLink
                      to="/"
                      className="text-3xl flex justify-center gap-8"
                    >
                      <FaGithub />
                      <FaLinkedin />
                      <FaInstagram />
                      <FaWhatsapp />
                    </NavLink>
                  </div>
                </div>
                <div className="mt-10 bg-[#25D266]/30 p-6 rounded-xl">
                  <div className="flex items-center">
                    <div className="h-15 w-15 rounded-full bg-[#25D266]/50 flex items-center justify-center mr-4 shrink-0">
                      {" "}
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

// import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {
//   faGithub,
//   faLinkedinIn,
//   faInstagram,
//   faWhatsapp,
// } from "@fortawesome/free-brands-svg-icons";
// import React, { useState } from "react";

// function Contect() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [contactData, setContactData] = useState([]);
//   const [showTable, setShowTable] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5124/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         alert("Message sent successfully");
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         alert("Failed to send message");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//     }
//   };

//   const fetchContacts = async () => {
//     try {
//       const response = await fetch("http://localhost:5124/api/contact");
//       const data = await response.json();
//       setContactData(data);
//       setShowTable(true);
//     } catch (error) {
//       console.error("Error fetching contacts:", error);
//     }
//   };

//   return (
//     <div className="mx-auto bg-neutral-900 text-white  overflow-hidden container px-4 pt-10 w-full h-full">
//       <div className="flex relative justify-center pb-2">
//         <h1 className="text-center text-4xl font-bold">
//           Get In Touch
//           <span
//             id="se"
//             className="w-28 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full"
//           ></span>
//         </h1>
//       </div>
//       <p className="pt-2 text-center">
//         Ready to discuss your project? Reach out to us for a consultation or just to say hello.
//       </p>

//       <div
//         id="main"
//         className="md:grid-cols-1 lg:grid-cols-2 gap-6 grid grid-cols-1 p-7 mb-17"
//       >
//         {/* Left Section (Contact Info) */}
//         <div id="left" className="bg-neutral-700 p-6 rounded-2xl">
//           <h2 className="text-3xl pb-5">Contact Information</h2>
//           <p>
//             Feel free to reach out to us through any of these channels. We're
//             eager to hear about your project and how we can help.
//           </p>

//           {/* Icons */}
//           <div className="grid grid-cols-1">
//             {/* Phone */}
//             <div className="flex pb-4 pt-4">
//               <div className="w-12 h-12 rounded-full bg-blue-500/30 hover:bg-blue-300 hover:border-blue-600 hover:border-2 mr-4 shrink-0 text-center">
//                 <span className="material-icons text-blue-500 pt-3">call</span>
//               </div>
//               <div className="flex flex-col">
//                 <h4 className="text-xl font-bold">Phone</h4>
//                 <p>+91 9786543210</p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex pb-4 pt-4">
//               <div className="w-12 h-12 rounded-full bg-red-500/30 hover:bg-red-300 hover:border-red-600 hover:border-2 mr-4 shrink-0 text-center">
//                 <span className="material-icons text-red-500 pt-3">mail</span>
//               </div>
//               <div className="flex flex-col">
//                 <h4 className="text-xl font-bold">Email</h4>
//                 <p>jitendrasingh97850@gmail.com</p>
//               </div>
//             </div>

//             {/* Location */}
//             <div className="flex pb-4 pt-4">
//               <div className="w-12 h-12 rounded-full bg-blue-500/30 hover:bg-blue-300 hover:border-blue-600 hover:border-2 mr-4 shrink-0 text-center">
//                 <span className="material-icons text-blue-500 pt-3">
//                   location_on
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <h4 className="text-xl font-bold">Location</h4>
//                 <p>Jaipur, India</p>
//               </div>
//             </div>

//             {/* Social Icons */}
//             <h2 className="text-xl pt-2">Comment With Us</h2>
//             <div className="flex gap-4 items-center pt-3">
//               <a
//                 href="https://github.com/jitendra784/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-12 h-12 rounded-full bg-[#2e2f33] flex items-center justify-center hover:bg-blue-500"
//               >
//                 <FontAwesomeIcon icon={faGithub} size="lg" />
//               </a>

//               <a
//                 href="linkedin.com/in/jitendra-singh-bhandari-a42755290/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-12 h-12 rounded-full bg-[#2e2f33] flex items-center justify-center hover:bg-blue-500"
//               >
//                 <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
//               </a>

//               <a
//                 href="https://instagram.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-12 h-12 rounded-full bg-[#2e2f33] flex items-center justify-center hover:bg-red-500"
//               >
//                 <FontAwesomeIcon icon={faInstagram} size="lg" />
//               </a>

//               <a
//                 href="https://wa.me/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-12 h-12 rounded-full bg-[#2e2f33] flex items-center justify-center hover:bg-green-500"
//               >
//                 <FontAwesomeIcon icon={faWhatsapp} size="lg" />
//               </a>
//             </div>
//             <div className="bg-green-500/30 container px-4 py-5 mt-7 rounded-xl"> 
//             <div className="w-full flex">
//             <div>
//             <a
//           href="https://wa.me/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="w-12 h-12 rounded-full  flex items-center justify-center bg-green-500"
//         >
//           <FontAwesomeIcon icon={faWhatsapp} size="lg" />
//         </a>
//          </div>
//          <div className="ml-3 mb-4">
//             <h1 className="text-xl font-semibold ">WhatsApp Business</h1>
//             <p>Get instant responses to your queries</p>
//         </div>
//         </div >
//             <div className="w-full bg-green-500 flex justify-center p-2 rounded-xl">
//          <a href="https://api.whatsapp.com/">
//             Chat Now
//          </a>
//          </div>
//             </div>

//           </div>
//         </div>

//         {/* Right Section (Form + Table) */}
//         <div id="right">
//           <div className="bg-[#1f1f1f] p-10 rounded-xl shadow-lg">
//             <h2 className="text-white text-2xl font-bold mb-6">Send Us a Message</h2>

//             <form className="space-y-6" onSubmit={handleSubmit}>
//               {/* Inputs */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-white mb-1">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 rounded-md bg-[#2e2f33] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-white mb-1">
//                     Your Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 rounded-md bg-[#2e2f33] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-white mb-1">
//                   Phone Number
//                 </label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded-md bg-[#2e2f33] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-white mb-1">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded-md bg-[#2e2f33] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-white mb-1">
//                   Your Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="4"
//                   className="w-full px-4 py-2 rounded-md bg-[#2e2f33] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                 ></textarea>
//               </div>

//               <div className="flex items-start">
//                 <input type="checkbox" className="mr-2 mt-1" />
//                 <p className="text-sm text-white">
//                   I consent to having this website store my submitted information so
//                   they can respond to my inquiry.
//                 </p>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-2 rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 transition"
//               >
//                 Send Message
//               </button>

//               {/* Validate Button */}
//               <button
//                 type="button"
//                 onClick={fetchContacts}
//                 className="w-full py-2 rounded-md text-white font-medium mt-2 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition"
//               >
//                 Validate It
//               </button>
//             </form>

//             {/* Table Display */}
//             {showTable && (
//               <div className="mt-6 overflow-x-auto bg-white text-black rounded-lg shadow-md">
//                 <table className="min-w-full border border-gray-300">
//                   <thead className="bg-gray-100">
//                     <tr>
//                       <th className="py-2 px-4 border-b">Name</th>
//                       <th className="py-2 px-4 border-b">Email</th>
//                       <th className="py-2 px-4 border-b">Phone</th>
//                       <th className="py-2 px-4 border-b">Subject</th>
//                       <th className="py-2 px-4 border-b">Message</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {contactData.map((item, index) => (
//                       <tr key={index} className="text-sm text-center">
//                         <td className="py-2 px-4 border-b">{item.name}</td>
//                         <td className="py-2 px-4 border-b">{item.email}</td>
//                         <td className="py-2 px-4 border-b">{item.phone}</td>
//                         <td className="py-2 px-4 border-b">{item.subject}</td>
//                         <td className="py-2 px-4 border-b">{item.message}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contect;