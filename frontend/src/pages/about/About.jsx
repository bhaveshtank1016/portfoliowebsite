import React from "react";
import { Briefcase, Zap, Lightbulb, Clock } from "lucide-react";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiMongoose,
} from "react-icons/si";

function About() {
  const techs = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3 / Tailwind CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Mongoose", icon: <SiMongoose className="text-green-600" /> },
    { name: "Multer & Nodemailer", icon: <FaEnvelope className="text-red-400" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-400" /> },
  ];

 

  const features = [
    {
      icon: <Briefcase className="text-white" />,
      title: "Experience",
      description: "1+ years in Full-Stack Web Development",
      bg: "bg-blue-500",
    },
    {
      icon: <Lightbulb className="text-white" />,
      title: "Creative Solutions",
      description: "Innovative approaches to problems",
      bg: "bg-yellow-500",
    },
    {
      icon: <Zap className="text-white" />,
      title: "Fast Delivery",
      description: "Quick turnaround time on projects",
      bg: "bg-pink-500",
    },
    {
      icon: <Clock className="text-white" />,
      title: "Timely Support",
      description: "Responsive and reliable assistance",
      bg: "bg-green-500",
    },
  ];

  return (
    <div className="w-full bg-black text-white pt-15 pb-20">
      <div className="container mx-auto px-4 py-4">
        <div className="text-center mb-12">
          <h2 className="md:text-5xl sm:text-5xl font-bold text-white text-3xl py-5">
            About Me
          </h2>
          <div className="h-2 w-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <p className="text-xl mt-5">
            Get to know me better and see how I can help bring your digital ideas to life.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 container mx-auto">
          {/* Left section */}
          <div className="sm:w-full sm:h-full  p-8 flex justify-center">
            <img
              className="sm:4xl bg-neutral-900 rounded-full  p-10"
              src="https://i.pinimg.com/236x/3f/d8/bf/3fd8bf9a259e8e4b0ed3bb8c67b17884.jpg"
              alt="Profile"
            />
          </div>

          {/* Right Section */}
          <div>
            <div className="text-neutral-400">
              <h3 className="text-start text-2xl md:text-3xl sm:text-xl  text-white font-bold mt-10">
                Full-Stack Mobile & Web Developer | MERN
              </h3>
              <p className="text-xl text-start mt-5">
                Hi, I’m Bhavesh Tank, a passionate Full-Stack Web Developer from Jaipur, Rajasthan,
                with 1 year of hands-on experience in building dynamic and scalable web applications.
                I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and also have
                strong experience in Java for backend development.
              </p>
              <p className="text-xl text-start mt-5">
                My expertise includes developing real-world projects like a Daily Status Report (DSR)
                module with role-based access, file uploads, and email notifications using Mongoose,
                Multer, and Nodemailer. With a strong foundation in JavaScript, HTML, CSS, and
                problem-solving skills from my programming background, I’m dedicated to creating
                applications that are efficient, user-friendly, and visually appealing.
              </p>
            </div>

            {/* My Tech Stack */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 mb-10 mt-10">
              {techs.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800 transition p-4 rounded-lg shadow-md"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>

           

            {/* Key Info */}
            <div className="text-white  py-10 text-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className={`rounded-full p-3 ${feature.bg}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
