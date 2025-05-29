import React from "react";

import { IoSettingsOutline } from "react-icons/io5";
import { LuCamera } from "react-icons/lu";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaMobileAlt, FaDesktop, FaDollarSign } from "react-icons/fa";
import Teamcards from "./Teamcards";


function Team() {
   const teams = [
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
    <section className=" bg-neutral-800 ">
      <div className="container text-neutral-300 bg-neutral-800">
        <div className="text-center">
          <h1 className="md:text-5xl font-bold text-white text-3xl  py-5">
            Our Team
          </h1>
          <div className=" h-2 w-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <p className="text-xl mt-5 mb-10 ">
            Meet the talented professionals behind our exceptional work. Each
            member brings unique expertise to deliver quality solutions.
          </p>
        </div>
        <div>
           <div className="min-h-screen bg-neutral-900 text-white flex justify-center items-center p-6">
              <div className="grid md:grid-cols-3 gap-8">
                {teams.map((team, index) => (
                  <Teamcards key={index} team={team} />
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
