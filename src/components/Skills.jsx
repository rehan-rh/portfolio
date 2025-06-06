import {
  FaReact, FaNodeJs, FaDatabase, FaCode, FaGitAlt, FaHtml5,
} from "react-icons/fa";
import { SiTailwindcss, SiPostman } from "react-icons/si";

export default function Skills() {
  const technicalSkills = [
    { name: "Java", icon: <FaCode className="text-orange-400 text-3xl" /> },
    { name: "JavaScript", icon: <FaCode className="text-yellow-400 text-3xl" /> },
    { name: "Python", icon: <FaCode className="text-blue-400 text-3xl" /> },
    { name: "React.js & Redux", icon: <FaReact className="text-blue-400 text-3xl" /> },
    { name: "Express.js & Node.js", icon: <FaNodeJs className="text-green-400 text-3xl" /> },
    { name: "MongoDB & MySQL", icon: <FaDatabase className="text-green-300 text-3xl" /> },
    { name: "HTML & CSS", icon: <FaHtml5 className="text-red-400 text-3xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500 text-3xl" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-gray-400 text-3xl" /> },
    { name: "VS Code & Postman", icon: <SiPostman className="text-orange-400 text-3xl" /> },
  ];

  const softSkills = [
    "Problem-Solving",
    "Team Collaboration",
    "Communication",
    "Critical Thinking",
    "Adaptability",
    "Leadership",
    "Debugging",
  ];

  return (
    <section
      id="skills"
      className="py-10 sm:py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-8">
          Skills & Technologies
        </h2>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {technicalSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 p-4 sm:p-5 rounded-xl shadow-lg transition transform hover:scale-105"
            >
              {skill.icon}
              <p className="text-gray-300 mt-2 text-sm sm:text-base">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-10 sm:mt-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-4">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 text-gray-300 px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-md text-xs sm:text-sm transition hover:bg-blue-500 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
