import React from "react";
import { Briefcase, Zap, Lightbulb, Clock } from "lucide-react";

function About() {
  const techStack = [
    { name: "Flutter", initial: "F", color: "bg-[#FF006E]" },
    { name: "React Native", initial: "R", color: "bg-[#3A86FF]" },
    { name: "Java", initial: "J", color: "bg-[#FF006E]" },
    { name: "Kotlin", initial: "K", color: "bg-[#3A86FF]" },
    { name: "Laravel", initial: "L", color: "bg-[#FF006E]" },
    { name: "PHP", initial: "P", color: "bg-[#3A86FF]" },
  ];
  const features = [
    {
      title: "Experience",
      description: "1+ years in Full-Stack Development",
      icon: <Briefcase className="text-blue-200 w-6 h-6" />,
      bg: "bg-[#3A86FF]",
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround time on projects",
      icon: <Zap className="text-pink-200 w-6 h-6" />,
      bg: "bg-[#FF006E]",
    },
    {
      title: "Creative Solutions",
      description: "Innovative approaches to problems",
      icon: <Lightbulb className="text-blue-200 w-6 h-6" />,
      bg: "bg-[#3A86FF]",
    },
    {
      title: "Timely Support",
      description: "Responsive and reliable assistance",
      icon: <Clock className="text-pink-200 w-6 h-6" />,
      bg: "bg-[#FF006E]",
    },
  ];
  return (
   <div className="w-full  bg-neutral-900  text-white pt-15 pb-20  ">
    <div className=" container mx-auto px-4 py-4 ">
        <div className="text-center mb-12 ">
          <h2 className="md:text-5xl sm:text-5xl font-bold text-white text-3xl  py-5">
            About Me
          </h2>
          <div className=" h-2 w-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <p className="text-xl mt-5 ">
            Get to know me better and see how I can help bring your digital
            ideas to life.
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 container mx-auto">
          {/* Left section  */}
          <div className=" sm:w-full sm:h-full flex justify-center ">
            <img
              className=" sm:4xl  p-10"
              src="https://i.pinimg.com/236x/3f/d8/bf/3fd8bf9a259e8e4b0ed3bb8c67b17884.jpg"
              alt="gg"
            />
          </div>
          {/* RIGHT SECTION ABOUT  */}
          <div >
            <div className="text-neutral-400">
              <h3 className="text-start text-2xl md:text-3xl sm:text-xl text-white font-bold mt-10">
                Full-Stack Mobile & Web Developer
              </h3>
              <p className="text-xl text-start mt-5 ">
                Hi, I'm Bhavesh Tank, a passionate Full-Stack Developer with
                over a year of experience creating high-performance applications
                and intuitive user interfaces. I specialize in both mobile and
                web development, with expertise across multiple technologies and
                platforms.
              </p>
              <p className="text-xl text-start mt-5">
                My journey in software development has equipped me with the
                skills to turn complex problems into elegant solutions. I'm
                committed to writing clean, maintainable code and creating
                applications that not only look great but perform exceptionally
                well.
              </p>
            </div>
            {/* My Tech Stack  */}
            <div>
              <div className="text-white mt-5 mb-10">
                <div className="">
                  <h1 className="text-3xl text-start font-bold mb-6">
                    My Tech Stack
                  </h1>
                  <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ">
                      {techStack.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg shadow-lg"
                        >
                          <div
                            className={`w-10 h-10 flex items-center justify-center text-lg rounded-full text-white font-bold ${tech.color}`}
                          >
                            {tech.initial}
                          </div>
                          <span className="text-1xl">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Key Info  */}

            <div className=" text-white py-10 text-xl">
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
