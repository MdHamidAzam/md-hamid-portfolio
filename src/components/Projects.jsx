import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Projects() {
  return (
    <SectionWrapper>
      <section id="projects" className="bg-[#050505] text-white py-24 px-8">
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Featured Projects
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-500"
            >
              {/* Image */}
              {project.images.length > 0 ? (
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop={project.images.length > 1}
                  className="h-56"
                >
                  {project.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative overflow-hidden h-56">
                        <img
                          src={image}
                          alt={`${project.title} ${index + 1}`}
                          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-cyan-500 text-black px-6 py-3 rounded-full font-bold hover:bg-cyan-400"
                          >
                            View Project
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="w-full h-56 flex items-center justify-center bg-gray-800 text-gray-500">
                  No Preview Available
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {project.featured && (
                  <span className="bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ Featured Project
                  </span>
                )}

                <h3 className="text-2xl font-bold mt-4 text-cyan-400">
                  {project.title}
                </h3>
                <span
                  className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Live"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {project.status}
                </span>

                <p className="text-gray-300 mt-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 px-3 py-1 rounded-full text-sm hover:bg-cyan-500 hover:text-black transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center border border-cyan-400 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition font-semibold"
                  >
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center bg-cyan-500 text-black py-3 rounded-xl hover:bg-cyan-400 transition font-semibold"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Projects;
