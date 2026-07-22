import { FaCode, FaLaptopCode, FaProjectDiagram, FaGraduationCap } from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaProjectDiagram />,
      title: "3+ Major Projects",
      desc: "Built full-stack MERN and frontend applications.",
    },
    {
      icon: <FaCode />,
      title: "DSA Practice",
      desc: "Solved 50+ Data Structures & Algorithms problems in Java.",
    },
    {
      icon: <FaLaptopCode />,
      title: "MERN Stack",
      desc: "Hands-on experience with React, Node.js, Express & MongoDB.",
    },
    {
      icon: <FaGraduationCap />,
      title: "B.Tech CSE(AI)",
      desc: "Babu Banarasi Das University (2024–2028).",
    },
  ];

  return (
    <section id="achievements" className="bg-[#050505] text-white py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl text-cyan-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievements;