import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import { FaMobileAlt, FaDesktop, FaDollarSign } from "react-icons/fa";
import ProjectCards from "./Projectscards";
import { IoSettingsOutline } from "react-icons/io5";
import { LuCamera } from "react-icons/lu";
import { BiMessageAltDetail } from "react-icons/bi";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description:
        "A feature-rich shopping application with seamless checkout process and real-time inventory tracking.",
      tags: ["Flutter", "Firebase", "State Management"],
      category: "Flutter",
      demo: "#",
      github: "#",
      icon: <FaMobileAlt />,
    },
    {
      title: "Corporate Portal",
      description:
        "A comprehensive business management system with employee dashboard, task management, and analytics.",
      tags: ["Laravel", "MySQL", "Vue.js"],
      category: "Laravel",
      demo: "#",
      github: "#",
      icon: <FaDesktop />,
    },
    {
      title: "Expense Tracker",
      description:
        "A personal finance app with budget planning, expense tracking, and visual reports to help users manage finances.",
      tags: ["React Native", "Redux", "Charts"],
      category: "React Native",
      demo: "#",
      github: "#",
      icon: <FaDollarSign />,
    },
    {
      title: "Inventory Management System",
      description:
        "A custom software solution for tracking inventory, managing suppliers, and generating reports.",
      tags: ["Java", "Sql", "Desktop App"],
      category: "Java",
      demo: "#",
      github: "#",
      icon: <IoSettingsOutline />,
    },
    {
      title: "Photography Portfolio",
      description:
        "A visually stunning website showcasing a photographer's work with image galleries and booking system.",
      tags: ["PHP", "JavaScript", "Responsive"],
      category: "PHP",
      demo: "#",
      github: "#",
      icon: <LuCamera />,
    },
    {
      title: "Chat Application",
      description:
        "A real-time messaging platform with group chats, file sharing, and end-to-end encryption..",
      tags: ["Kotlin", "Firebase", "Real-time"],
      category: "Kotlin",
      demo: "#",
      github: "#",
      icon: <BiMessageAltDetail />,
    },
  ];
  return (
    <section className="bg-neutral-900">
      <div className=" text-neutral-300 bg-neutral-900">
        <div className="text-center">
          <h1 className="md:text-5xl font-bold text-white text-3xl  py-5">
            Projects
          </h1>
          <div className=" h-2 w-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <p className="text-xl mt-5 ">
            Explore my latest work and see how I bring ideas to life with code
            and creativity.
          </p>
        </div>
        <div>
          <div className=" gap-4 mt-10 w-full  p-4 ">
            <ul className=" container  flex items-center justify-center gap-5 text-md font-bold">
              <button className="bg-neutral-700 h-10 w-40 rounded-3xl">
                All Projects
              </button>
              <button className="bg-neutral-700 h-10 w-40 rounded-3xl">
                Mobile App
              </button>
              <button className="bg-neutral-700 h-10 w-40 rounded-3xl">
                Websites
              </button>
              <button className="bg-neutral-700 h-10 w-40 rounded-3xl">
                Custom Software
              </button>
            </ul>
          </div>
          <div>
            <div className="min-h-screen bg-neutral-900 text-white flex justify-center items-center p-6">
              <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCards key={index} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Load More Projects  */}
        <div className="text-center font-bold text-white">
          <button class="text-xl  mb-10 mt-10 bg-gradient-to-r from-[#3A86FF] to-[#FF006E] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 w-50 h-20 rounded-2xl">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
