import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            Md Hamid Azam
          </h2>

          <p className="text-gray-400 mt-2">
            MERN Stack Developer | Java | DSA Enthusiast
          </p>
        </div>

        <div className="flex gap-6 text-2xl mt-6 md:mt-0">

          <a
            href="https://github.com/MdHamidAzam"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-cyan-400 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/md-hamid-azam-54aaab309"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>

        </div>
      </div>

      <div className="text-center mt-8 text-gray-500 text-sm">
        Made with <FaHeart className="inline text-red-500" /> using React &
        Tailwind CSS
        <br />
        © 2026 Md Hamid Azam. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;