import React, { useState } from "react";
import { FaMobileAlt, FaDesktop, FaDollarSign, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuCamera } from "react-icons/lu";
import { BiMessageAltDetail } from "react-icons/bi";

// ✅ Project Card Component (Inside same file)
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-neutral-800 rounded-2xl overflow-hidden shadow-lg w-full max-w-md sm:mx-auto transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-40 flex justify-center items-center">
        <div className="text-white text-5xl">{project.icon}</div>
        <span className="absolute top-2 right-2 bg-neutral-900/80 text-sm px-3 py-1 rounded-full shadow-md">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="text-neutral-400 mt-2 text-base leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                tag === "Firebase" || tag === "MySQL"
                  ? "bg-pink-700 text-white"
                  : tag === "Flutter" || tag === "React Native" || tag === "Laravel"
                  ? "bg-blue-700 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between mt-6 text-sm font-semibold">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
          >
            Live Demo <FaExternalLinkAlt size={14} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 hover:text-pink-400 transition flex items-center gap-1"
          >
            GitHub <FaGithub size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

// ✅ Main Projects Component
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "E-Commerce Mobile App",
      description:
        "A feature-rich shopping application with seamless checkout process and real-time inventory tracking.",
      tags: ["Flutter", "Firebase", "State Management"],
      category: "Mobile App",
      demo: "#",
      github: "#",
      icon: <FaMobileAlt />,
    },
    {
      title: "Corporate Portal",
      description:
        "A comprehensive business management system with employee dashboard, task management, and analytics.",
      tags: ["Laravel", "MySQL", "Vue.js"],
      category: "Websites",
      demo: "#",
      github: "#",
      icon: <FaDesktop />,
    },
    {
      title: "Expense Tracker",
      description:
        "A personal finance app with budget planning, expense tracking, and visual reports.",
      tags: ["React Native", "Redux", "Charts"],
      category: "Mobile App",
      demo: "#",
      github: "#",
      icon: <FaDollarSign />,
    },
    {
      title: "Inventory Management System",
      description:
        "A custom software solution for tracking inventory, managing suppliers, and generating reports.",
      tags: ["Java", "SQL", "Desktop App"],
      category: "Custom Software",
      demo: "#",
      github: "#",
      icon: <IoSettingsOutline />,
    },
    {
      title: "Photography Portfolio",
      description:
        "A visually stunning website showcasing a photographer's work with galleries and booking system.",
      tags: ["PHP", "JavaScript", "Responsive"],
      category: "Websites",
      demo: "#",
      github: "#",
      icon: <LuCamera />,
    },
    {
      title: "Chat Application",
      description:
        "A real-time messaging platform with group chats, file sharing, and encryption.",
      tags: ["Kotlin", "Firebase", "Real-time"],
      category: "Mobile App",
      demo: "#",
      github: "#",
      icon: <BiMessageAltDetail />,
    },
  ];

  const categories = ["All", "Mobile App", "Websites", "Custom Software"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="w-full bg-black text-white py-10">
      <div className="text-center">
        <h1 className="md:text-5xl font-bold text-3xl py-5">Projects</h1>
        <div className="h-2 w-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <p className="text-xl mt-5">
          Explore my latest work and see how I bring ideas to life with code and creativity.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`h-10 w-40 rounded-3xl transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold"
                : "bg-neutral-700 hover:bg-neutral-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-10 w-full flex justify-center">
        <div className="grid gap-8 w-[95%] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="text-center mt-10">
        <button className="text-xl bg-gradient-to-r from-[#3A86FF] to-[#FF006E] px-8 py-3 rounded-2xl transition duration-300 hover:scale-105">
          Load More Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;

