import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { TbBriefcase } from "react-icons/tb";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";

import Teamcards from "./Teamcards";

function Team() {
  const status = [
    {
      icon: <IoMdContacts />,
      number: "5+",
      p: "Team Members",
      color: "bg-[#FF006E]",
    },
    {
      icon: <TbBriefcase />,
      number: "20+",
      p: "Projects Completed",
      color: "bg-[#3A86FF]",
    },
    {
      icon: <FaRegSmile />,
      number: "15+",
      p: "Happy Clients",
      color: "bg-[#FF006E]",
    },
    {
      icon: <MdOutlineWatchLater />,
      number: "24/7",
      p: "Support Available",
      color: "bg-[#3A86FF]",
    },
  ];
  const teams = [
    {
      title: "Rahul",
      skill: "Laravel Developer",
      description:
        "Passionate developer with expertise in Laravel framework and modern web development practices.",
      // tags: ["Flutter", "Firebase", "State Management"],
      category: ["Flutter", "java"],
      demo: "#",
      github: "#",
      icon: <IoPersonOutline />,
    },
    {
      title: "Suraj",
      skill: "Software Developer",
      description:
        "Skilled programmer specializing in custom software solutions and application development.",
      // tags: ["Laravel", "MySQL", "Vue.js"],
      category: ["Flutter", "java"],
      demo: "#",
      github: "#",
      icon: <IoPersonOutline />,
    },
    {
      title: "Tushar",
      skill: "QA Tester",
      description:
        "Quality assurance expert with experience in Selenium and Java for comprehensive testing solutions.",
      // tags: ["React Native", "Redux", "Charts"],
      category: ["Flutter", "java"],
      demo: "#",
      github: "#",
      icon: <IoPersonOutline />,
    },
    {
      title: "Sagar Kalra",
      skill: "Accountant",
      description:
        "Expert in financial management and accounting with comprehensive knowledge of Tally software.",
      // tags: ["Java", "Sql", "Desktop App"],
      category: ["Flutter", "java"],
      demo: "#",
      github: "#",
      icon: <IoPersonOutline />,
    },
    {
      title: "Hemant",
      skill: "Laravel/PHP Developer",
      description:
        "Expert in building robust backend systems and RESTful APIs with Laravel and PHP.",
      // tags: ["PHP", "JavaScript", "Responsive"],
      category: ["Flutter", "java"],
      demo: "#",
      github: "#",
      icon: <IoPersonOutline />,
    },
  ];
  return (
    <section className="w-full sm:w-full bg-neutral-900  text-white sm:pt-20 pb-20">
      <div >
        <div className="text-center">
          <h1 className="md:text-5xl text-4xl lg-6xl font-bold text-white  py-5">
            Our Team
          </h1>
          <div className=" h-2 w-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <p className="text-xl mt-5 mb-10 ">
            Meet the talented professionals behind our exceptional work. Each
            member brings unique expertise to deliver quality solutions.
          </p>
        </div>
        <div className="min-h-screen bg-neutral-900 text-white flex justify-center items-center p-6">
          <div className="grid md:grid-cols-3 gap-8">
            {teams.map((team, index) => (
              <Teamcards key={index} team={team} />
            ))}
          </div>
        </div>
        <div className="mt-auto mb-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         
            {status.map((stat) => (
              <div className="bg-neutral-700 rounded-xl p-8 shadow-lg text-center m-5 ">
               <div className="flex items-center justify-center "> 
                <div
                  className={`w-17 h-17  rounded-full flex items-center justify-center ${stat.color}`}
                >
                  <span className="text-4xl text-center">{stat.icon}</span>
                </div></div>
                <h2 className="text-4xl font-bold mb-3 text-white">
                  {stat.number}
                </h2>
                <p className="text-neutral-300 ">{stat.p}</p>
              </div>
            ))}
       
        </div>
        <div className="mt-20 text-center">
          <h1 className="text-3xl font-bold">Ready to Work With Our Team?</h1>
          <p className=" mt-5 text-neutral-300 ">Let's collaborate to transform your ideas into exceptional digital experiences.</p>
          <div className="text-center font-bold text-white">
          <button class="text-xl  mb-10 mt-10 bg-gradient-to-r from-[#3A86FF] to-[#FF006E] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 w-50 h-20 rounded-2xl">
            Get In Touch
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
