import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        {/* Logo */}
        <a
          href="#"
          className="text-3xl font-bold text-cyan-400 hover:text-white transition"
        >
          Hamid.
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-cyan-400"
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy
              smooth
              offset={-80}
              duration={500}
              activeClass="text-cyan-400"
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              spy
              smooth
              offset={-80}
              duration={500}
              activeClass="text-cyan-400"
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy
              smooth
              offset={-80}
              duration={500}
              activeClass="text-cyan-400"
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="achievements"
              spy
              smooth
              offset={-80}
              duration={500}
              activeClass="text-cyan-400"
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Achievements
            </Link>
          </li>
          <li>
            <Link
              to="github"
              spy
              smooth
              offset={-80}
              duration={500}
              activeClass="text-cyan-400"
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy
              smooth
              offset={-80}
              duration={500}
              activeClass="text-cyan-400"
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-white"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block px-8 py-4 hover:bg-cyan-500 hover:text-black transition"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="block px-8 py-4 hover:bg-cyan-500 hover:text-black transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="block px-8 py-4 hover:bg-cyan-500 hover:text-black transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block px-8 py-4 hover:bg-cyan-500 hover:text-black transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
