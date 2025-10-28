import React, { useState } from "react";
import { projects } from "../../rawData";
import ProBG from "./ProBG";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative mx-auto w-full h-fit py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <ProBG />
      {/* Section Title */}
      <div className="relative text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-45 h-0.5 bg-[#405ed4] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-rows-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#405ed4] text-xs font-semibold text-black rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-15 justify-start">
                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block text-center bg-gradient-to-r from-cyan-400/80 to-blue-600/80 hover:from-orange-300 hover hover:via-purple-500 hover:to-amber-500 text-white font-semibold px-4 py-1 rounded-lg shadow-lg transition-all duration-300"
                  >
                    🔗View Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block text-center bg-[#405ed4] hover:bg-[#3049a8] text-white font-semibold px-4 py-1 rounded-lg shadow-lg transition-all duration-300"
                  >
                    🧑‍💻View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
