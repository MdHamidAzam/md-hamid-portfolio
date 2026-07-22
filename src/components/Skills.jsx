import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";

import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import SectionWrapper from "./SectionWrapper";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={45} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={45} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs size={45} className="text-yellow-400" /> },
    { name: "React", icon: <FaReact size={45} className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs size={45} className="text-green-500" /> },
    { name: "Express", icon: <SiExpress size={45} className="text-white" /> },
    { name: "MongoDB", icon: <SiMongodb size={45} className="text-green-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={45} className="text-sky-400" /> },
    { name: "Java", icon: <FaJava size={45} className="text-red-500" /> },
    { name: "Git", icon: <FaGitAlt size={45} className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub size={45} className="text-white" /> },
  ];

  return (
    <SectionWrapper>
    <section
      id="skills"
      className="bg-[#050505] text-white py-24 px-8"
      
    >
      <h2 className="text-5xl font-bold text-center text-cyan-400 mb-14">
        My Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center hover:scale-105 hover:border-cyan-400 border border-gray-700 transition duration-300"
          >
            {skill.icon}
            <h3 className="mt-4 text-lg font-semibold">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
    </SectionWrapper>
  );
}

export default Skills;