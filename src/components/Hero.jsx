import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full"></div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col lg:flex-row items-center justify-center gap-16"
      >
        <div>
          <p className="text-cyan-400 text-xl">👋 Hello, I'm</p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mt-4">
            Md Hamid Azam
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack MERN Developer",
              2000,
              "Java Developer",
              2000,
              "DSA Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-cyan-400 text-2xl mt-6"
          />

          <div className="flex justify-center lg:justify-start gap-6 mt-8 text-3xl">
            <a
              href="https://github.com/MdHamidAzam"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition duration-300 hover:scale-125"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/md-hamid-azam-54aaab309"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition duration-300 hover:scale-125"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="flex gap-5 mt-10">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-cyan-500 hover:bg-cyan-400 hover:scale-105 transition-all duration-300 text-black px-8 py-3 rounded-full font-bold shadow-lg"
            >
              View Projects
            </button>

            <a
              href="/resume.pdf"
              download
              className="border border-cyan-400 hover:bg-cyan-400 hover:text-black hover:scale-105 transition-all duration-300 px-8 py-3 rounded-full"
            >
              Download Resume
            </a>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-10 mt-12">
            <div>
              <h2 className="text-4xl font-bold text-cyan-400">3+</h2>
              <p className="text-gray-400">Projects</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">50+</h2>
              <p className="text-gray-400">DSA Problems</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">100%</h2>
              <p className="text-gray-400">Passion</p>
            </div>
          </div>
        </div>
        <motion.div
          className="relative"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 bg-cyan-400 rounded-full blur-3xl opacity-30"></div>

          <img
            src={profile}
            alt="Md Hamid Azam"
            className="relative w-80 h-80 rounded-full object-cover border-4 border-cyan-400 shadow-2xl transition duration-500 hover:scale-105"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
