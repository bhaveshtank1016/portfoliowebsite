import React from "react";
import {
  FaAward,
  FaCheckCircle,
  FaRocket,
  FaStar,
  FaCogs,
  FaLaptopCode,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaAward size={40} className="text-blue-400" />,
    text: "Completed 20+ Projects",
  },
  {
    icon: <FaCheckCircle size={40} className="text-pink-400" />,
    text: "Solved 400+ DSA Problems",
  },
  {
    icon: <FaRocket size={40} className="text-blue-400" />,
    text: "Internshala Student Partner Leader",
  },
  {
    icon: <FaStar size={40} className="text-pink-400" />,
    text: "Participant - Smart City Hackathon",
  },
  {
    icon: <FaCogs size={40} className="text-blue-400" />,
    text: "Built Real ML Models in Projects",
  },
  {
    icon: <FaLaptopCode size={40} className="text-pink-400" />,
    text: "6-months Full-Stack Practice (MERN)",
  },
];

export default function AchievementsSection() {
  return (
    <div className="bg-neutral-900 text-white px-4 sm:px-6 lg:px-10 py-12 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 mb-2 text-center">
        My Achievements
      </h2>
      <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full mb-4"></div>
      <p className="text-gray-400 mb-8 text-center max-w-2xl text-sm sm:text-base">
        Highlights of my technical journey and project-based accomplishments.
      </p>

      {/* Cards */}
      <div className="grid gap-6 sm:gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-black rounded-2xl p-6 sm:p-8 flex items-center gap-4 sm:gap-6 shadow-lg hover:scale-105 transition-transform duration-300 min-h-[100px]"
          >
            {achievement.icon}
            <span className="font-medium text-sm sm:text-lg lg:text-xl leading-snug">
              {achievement.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
