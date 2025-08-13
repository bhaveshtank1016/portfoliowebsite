import React from "react";
import { FaLaptopCode, FaServer, FaTools } from "react-icons/fa";

const skills = [
  {
    icon: <FaLaptopCode size={40} className="text-[#b8125a]" />,
    title: "Frontend Development",
    description:
      "Craft responsive and interactive user interfaces using modern frontend technologies with clean, maintainable code.",
    tech: [
      { name: "HTML", color: "text-blue-400" },
      { name: "CSS", color: "text-blue-400" },
      { name: "JavaScript", color: "text-pink-400" },
      { name: "React.js", color: "text-pink-400" },
      { name: "Tailwind CSS", color: "text-blue-400" },
    ],
  },
  {
    icon: <FaServer size={40} className="text-[#b8125a]" />,
    title: "Backend Development",
    description:
      "Build secure, efficient, and scalable server-side applications with robust APIs and database integrations.",
    tech: [
      { name: "Node.js", color: "text-pink-400" },
      { name: "Express.js", color: "text-pink-400" },
      { name: "MongoDB", color: "text-blue-400" },
      { name: "Mongoose", color: "text-blue-400" },
    ],
  },
  {
    icon: <FaTools size={40} className="text-[#b8125a]" />,
    title: "Tools & Other Skills",
    description:
      "Proficient with developer tools and utilities that streamline the development process.",
    tech: [
      { name: "Git", color: "text-blue-400" },
      { name: "Postman", color: "text-pink-400" },
      { name: "Multer", color: "text-pink-400" },
      { name: "VS Code", color: "text-blue-400" },
    ],
  },
];
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
            <div className="  bg-neutral-900 min-h-screen flex  items-center justify-center p-6  ">
              <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8  w-full">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#090808] lg:p-15 p-8 max-h-[900px] text-center rounded-2xl shadow-xl flex flex-col items-center text-white"
                  >
                    <div className="text-5xl  mb-4">{skill.icon}</div>
                    <h2 className="text-xl font-bold mb-4">{skill.title}</h2>
                    <p className="text-gray-400 mb-6">{skill.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {skill.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`bg-neutral-800 px-4 py-2 rounded-lg text-sm font-medium ${tech.color}`}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
