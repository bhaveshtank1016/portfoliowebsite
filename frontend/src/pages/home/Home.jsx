import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiStreamlit,
  SiExpress,
  SiPostman,
} from "react-icons/si";

function Home() {
  const [actionBtn, SetActionBtn] = useState([
    { title: "View My Resume", link: "/Resume" },
    { title: "View My Project", link: "/project" },
  ]);
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500 text-3xl" />,
      border: "pink",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
      border: "blue",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400 text-3xl" />,
      border: "pink",
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400 text-3xl" />,
      border: "blue",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 text-3xl" />,
      border: "pink",
    },
    
    {
      name: "C++",
      icon: <SiCplusplus className="text-purple-500 text-3xl" />,
      border: "pink",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-red-500 text-3xl" />,
      border: "blue",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500 text-3xl" />,
      border: "pink",
    },
    
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
      border: "pink",
    },
    {
      name: "REST API",
      icon: <SiPostman className="text-orange-500 text-3xl" />,
      border: "blue",
    },
    {
      name: "Express",
      icon: <SiExpress className="text-gray-300 text-3xl" />,
      border: "pink",
    },
   
  ];

  return (
    <div className="w-full  bg-neutral-900  text-white  pt-30 pb-5">
      <div className="  container mx-auto px-4 py-4  ">
        <div className=" grid gap-4  lg:grid-cols-2  items-center justify-between ">
          {/* left section  */}
          <div className=" sm:w-1/1   md:flex-row  text-start">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
              Hi, I'm
              <span className=" ml-5 bg-gradient-to-r from-[#3A86FF] to-[#FF006E]  bg-clip-text text-transparent">
                Bhavesh Tank
              </span>
            </h1>
            <h2 className=" text-xl lg:text-3xl sm:text-2xl mt-8">
              Full-Stack Mobile & Web Developer
            </h2>
            <h2 className=" text-blue-600  sm:text-2xl mt-8">
              <ReactTyped
                className="text-3xl "
                strings={[
                  "UI/UX designer",
                  "Mobile App Spacilist",
                  "Full Stack Developer",
                  "react native",
                ]}
                typeSpeed={140}
                backSpeed={50}
                loop
              />
            </h2>
            <p className="text-gray-300 mb-10 text-md  mt-8 ">
              Crafting high-performance, visually stunning applications with
              cutting-edge technologies and sleek UI/UX design.
            </p>

            <div className="flex flex-wrap space-x-10 mt-20">
              {actionBtn.map((actions, index) => (
                <NavLink
                  key={index}
                  to={actions.link}
                  className="text-white sm:text-2xl text-xl shadow-lg shadow-cyan-400  p-3 bg-[#2A76EF] rounded-xl hover:bg-pink-600 text-center"
                >
                  {actions.title}
                </NavLink>
              ))}
            </div>
          </div>
          {/* right section  */}
          {/* img section  */}
          <div className="sm:w-full sm:h-full  flex justify-center  ">
            <img
              className="h-120 max-w-sm mx-auto  rounded-2xl "
              src="https://payload-cms.code-b.dev/media/react-logo@3x%201react%20logo%20(1).svg"
              alt="bfbfb"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 mt-20 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-2 px-8 py-2 rounded-full border-2 ${
                skill.border === "pink"
                  ? "border-pink-500 hover:shadow-pink-500/50"
                  : "border-blue-500 hover:shadow-blue-500/50"
              } transition-all duration-300 hover:scale-105 shadow-md`}
            >
              {skill.icon}
              <span className="text-white font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
