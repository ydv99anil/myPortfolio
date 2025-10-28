// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../rawData";
import { TubesCursor } from "./bg";

const Skills = () => (
  <section
    id="skills"
    className="relative py-16 pb-24 px-[15vw] md:px-[15vw] lg:px-[15vw] font-sans bg-skills-gradient animate-marquee"
  >
    <TubesCursor />

    {/* Section Title */}
    <div className="relative text-center mb-1">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-30 h-0.5 bg-[#405ed4] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}

          <div className="overflow-hidden relative w-full h-fit">
            <div className="flex gap-15 animate-scroll whitespace-nowrap">
              {category.skills.concat(category.skills).map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-5 items-center justify-center space-x-2 bg-transparent py-8 px-2 sm:py-2 sm:px-2 text-center w-fit"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
