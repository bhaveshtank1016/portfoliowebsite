import React from "react";
import Cardsdata from "../api/Cardsdata.json";
import StepService from "../api/StepService.json";

function Services() {
  return (
    <section className="w-full sm:w-full bg-neutral-900  text-white lg:pt-10  pb-20 ">
      <div className="container mx-auto ">
        <div className="text-center">
          <h1 className="md:text-5xl font-bold text-white text-3xl  py-5">
            Services
          </h1>
          <div className=" h-2 w-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <div>
            <p className="text-xl mt-5 mb-10 ">
              Services Specialized services tailored to meet your digital needs
              with cutting-edge technologies and expert solutions.
            </p>
          </div>
          {/* cards */}
          <div>
            <div className="  bg-neutral-900 min-h-screen flex items-center justify-center p-6  ">
              <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8  w-full">
                {Cardsdata.map((service, index) => (
                  <div
                    key={index}
                    className="bg-[#090808] lg:p-15 p-8 max-h-[900px] rounded-2xl shadow-xl  text-center text-white"
                  >
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`bg-[#2c2c2c] py-2 rounded text-sm font-medium ${tag.color}`}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* how we work  */}
        <div className=" bg-neutral-900 mt-10 pb-10">
          <h1 className="relative text-center text-white text-3xl mb-10 font-bold">
            How We Work
          </h1>
          <div className="grid grid-cols-1 md:-grid-cols-2 lg:grid-cols-4 gap-8">
            {StepService.map((Step, index) => (
              <div
                key={index}
                className="bg-neutral-800 text-white rounded-xl p-6 text-center relative"
              >
                <div
                  className={`absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 ${Step.color} rounded-full flex items-center justify-center text-white font-bold`}
                >
                  {Step.number}
                </div>
                <h3 className="text-lg font-bold mt-6 ">{Step.title}</h3>
                <p className="text-neutral-400">{Step.description}</p>
              </div>
            ))}

            {/* step-1  */}
          </div>
        </div>
        <div className="text-center font-bold text-white">
          <h1 className="text-center md:text-4xl text-2xl ">Ready to bring your idea to life?</h1>
          <button class="text-2xl  mb-10 mt-10 bg-gradient-to-r from-[#3A86FF] to-[#FF006E] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 w-50 h-20 rounded-2xl">
  Get Started
</button>
        </div>
      </div>
    </section>
  );
}

export default Services;
