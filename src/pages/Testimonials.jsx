// import React from "react";

// function Testimonials() {
//   return (
//     <section className="bg-neutral-900 ">
//       <div className="container bg-neutral-900 py-10 text-neutral-300   ">
//         <div className="text-center  ">
//           <h2 className="md:text-5xl font-bold text-white text-3xl  py-5">
//             Testimonials
//           </h2>
//           <div className=" h-2 w-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
//           <p className="text-xl mt-5 ">
//             What our clients say about our expertise and delivered solutions.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, TechInnovate",
    initials: "JD",
    feedback:
      "Rahul and his team delivered an exceptional mobile application that exceeded our expectations. The UI is sleek, the performance is outstanding, and the user feedback has been overwhelmingly positive. Their communication throughout the project was excellent.",
  },
  {
    name: "Amanda Smith",
    title: "Marketing Director, StyleHouse",
    initials: "AS",
    feedback:
      "Our website redesign project was handled with utmost professionalism. The team's expertise in Laravel and frontend technologies resulted in a fast, responsive website that perfectly represents our brand. I highly recommend their services.",
  },
  {
    name: "Michael Johnson",
    title: "Operations Manager, LogisTech",
    initials: "MJ",
    feedback:
      "We needed a custom inventory management system, and Rahul's team delivered a solution that perfectly fits our business needs. The software is intuitive, efficient, and has significantly improved our operational workflow. Great job!",
  },
  // Add more testimonials if you like
];

const logo = [
  {
    name: "TechCorp",
  },
  {
    name: "Innovex",
  },
  {
    name: "DigiTrend",
  },
  {
    name: "NextWave",
  },
  {
    name: "FutureLab",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-neutral-900 ">
      <div className="container bg-neutral-900 py-10 text-neutral-300   ">
        <div className="text-center  ">
          <h2 className="md:text-5xl font-bold text-white text-3xl  py-5">
            Testimonials
          </h2>

          <div className=" h-2 w-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

          <p className="text-xl mt-5 ">
            What our clients say about our expertise and delivered solutions.
          </p>
        </div>
        <div className=" text-white min-h-screen flex items-center justify-center px-4">
          <div className="relative max-w-3xl h-50 w-full">
            <div className="bg-[#2a2a2a] rounded-xl p-6 shadow-xl text-white transition-all duration-300">
              <div className="flex items-center ">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-lg font-bold text-white">
                  {testimonials[index].initials}
                </div>
                <div className="ml-4">
                  <div className="flex space-x-1 text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-lg font-semibold">
                    {testimonials[index].name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonials[index].title}
                  </p>
                </div>
              </div>
              <p className="text-2xl text-neutral-300">
                {testimonials[index].feedback}
              </p>
            </div>

            {/* Arrows */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 rounded-full p-2"
            >
              <ChevronLeft className="text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 rounded-full p-2"
            >
              <ChevronRight className="text-white" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i === index ? "bg-blue-500" : "bg-gray-600"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* clint LOGO  */}
        <div className="mt-15">
          <h3 className="text-2xl font-semibold text-center mb-10  text-white">
            Trusted by Companies Worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
            {logo.map((logos) => (
              <div className="w-35 h-12 bg-neutral-600 flex justify-center items-center rounded-2xl ">
                <div className=" overflow-hidden text-white font-bold text-xl  bg-gradient-to-r from-[#3A86FF]/20 to-[#3A86FF] rounded-xl">
                  <span className="p-5">{logos.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Ready to Start Your Project?  */}
        <div className="mt-20   bg-gradient-to-r   from-[#3A86FF] to-[#FF000E]">
          <h3 className="text-3xl font-semibold text-center mb-10   text-white"> Ready to Start Your Project? </h3>
          <p className="text-xl text-center">Join our satisfied clients and let us bring your digital ideas to life with our expertise and <br /> creativity.</p>
         <div className="space-x-6 flex justify-center"> <button class="text-xl  mb-10 mt-10 bg-gradient-to-r from-[#3A86FF]/20 to-[#3A86FF] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 w-50 h-20 rounded-2xl">

         Contect Us Today
          </button>
        <NavLink to="/">
            <button  class="text-xl  mb-10 mt-10  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 w-50 h-20 rounded-2xl">
           Explore Projects 
          </button>
        </NavLink>
        </div>

        </div>
      </div>
    </section>
  );
}
