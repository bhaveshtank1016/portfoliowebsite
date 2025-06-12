import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";

function Home() {
  const [actionBtn, SetActionBtn] = useState([
    { title: "View My Projects", link: "/projects" },
    { title: "Contect Me", link: "/contect" },
  ]);
  const [skill, setSkill] = useState([
    { title: "Flutter", textcolor: "text-[#3A86FF]" },
    { title: "React Native", textcolor: "text-[#FF006E]" },
    { title: "Flutter", textcolor: "text-[#3A86FF]" },
    { title: "Java", textcolor: "text-[#FF006E]" },
    { title: "Kotlin", textcolor: "text-[#3A86FF]" },
    { title: "Laravel", textcolor: "text-[#FF006E]" },
    { title: "PHP", textcolor: "text-[#3A86FF]" },
    { title: "Javascript", textcolor: "text-[#FF006E]" },
    { title: "HTML/CSS", textcolor: "text-[#3A86FF]" },
  ]);
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
              
                strings={
                  (["UI/UX designer","Mobile App Spacilist","Full Stack Developer","react native"])
                }
                typeSpeed={140}
                backSpeed={50}
                loop
                
              />
            </h2>
            <p className="text-gray-300 mb-10 text-md  mt-8 ">
              Crafting high-performance, visually stunning applications with
              cutting-edge technologies and sleek UI/UX design.
            </p>

            <div className="flex flex-wrap gap-6 mt-20">
              {actionBtn.map((actions, index) => (
                <NavLink
                  key={index}
                  to={actions.link}
                  className="text-white sm:text-2xl text-xl  p-3 bg-[#2A76EF] rounded-xl hover:bg-pink-600 text-center"
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

        <div className=" mt-16 overflow-hidden">
          <div className="py-6 relative">
            <div className="absolute left-0 top-0 buttom-0 w-20 bg-gradient-to-r from-netural-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 buttom-0 w-20 bg-gradient-to-r from-netural-900 to-transparent z-10"></div>
            <div className="flex justify-center space-x-8 ticker-animation ">
              {/* <div className="flex space-x-8 ">
                {skill.map((skills) => (
                  <div className="flex items-center bg-netural-900 border px-6 py-4 rounded-lg">
                    <span className={` mr-2 ${skills.textcolor}`}>
                      {skills.title}
                    </span>
                  </div>
                ))}
              </div> */}
              <div className="flex overflow-x-auto space-x-4 py-4">
                {skill.map((skills, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-neutral-900 border border-gray-600 px-4 py-2 rounded-lg"
                  >
                    <span className={`mr-2 ${skills.textcolor}`}>
                      {skills.title}
                    </span>
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

export default Home;
