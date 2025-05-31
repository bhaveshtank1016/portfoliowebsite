
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
const Teamcards = ({ team }) => {
  return (
    <div className=" bg-neutral-800 rounded-2xl overflow-hidden shadow-lg w-full max-w-md">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-40 flex justify-center items-center">
        <div className="text-white text-8xl">{team.icon}</div>
       <div className="absolute bottom-0 left-1/3 space-x-4    bg-neutral-700 text-sm px-3 py-1 rounded-full">
       {team.category.map((categori)=>(
        <span className="text-center" key={categori}>{categori}</span>

       ))}

       
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h1 className="text-xl font-bold text-white">{team.title}</h1>
        <h2 className="text-xl font-bold text-white">{team.skill}</h2>

        <p className="text-neutral-400 mt-2 text-sm">{team.description}</p>

        

        {/* Links */}
        <div className="flex justify-evenly mb-10 mt-10 text-sm">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline flex items-center gap-2"
          >
           <FaGithub />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 hover:underline flex items-center gap-1"
          >
          <FaLinkedin />
          </a>
            <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 hover:underline flex items-center gap-1"
          >
        <SiInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Teamcards;
