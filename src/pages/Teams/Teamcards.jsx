import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const Teamcards = ({ team }) => {
  return (
    <div className="bg-neutral-800 rounded-2xl overflow-hidden shadow-lg w-full max-w-md">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-40 flex justify-center items-center">
        <div className="text-white text-5xl">{team.icon}</div>
        <span className="absolute top-2 right-2 bg-neutral-700 text-sm px-3 py-1 rounded-full">
          {team.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{team.title}</h3>
        <p className="text-neutral-400 mt-2 text-sm">{team.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {team.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-sm ${
                tag === "Firebase" || tag === "MySQL"
                  ? "bg-pink-700 text-white"
                  : tag === "Flutter" || tag === "React Native" || tag === "Laravel"
                  ? "bg-blue-700 text-white"
                  : "bg-gray-600 text-white"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between mt-6 text-sm">
          <a href="#" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline flex items-center gap-1">
            Live Demo <FaExternalLinkAlt />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="text-pink-500 hover:underline flex items-center gap-1">
            GitHub <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Teamcards;