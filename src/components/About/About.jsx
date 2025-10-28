import React from "react";
import { ReactTyped } from "react-typed";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/portProfile1.png";
import BgWave from "../../background";
import { ArrowUpRightFromSquare } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="relative p-[80px] md:p-30 text-center px-[15vw] md:px-[15vw] lg:px-[15vw] font-sans items-start"
    >
      <BgWave />
      <div className="relative mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-10 w-full">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block bg-clip-text text-transparent">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent mb-4 leading-tight bg-gradient-to-t from-amber-400 via-gray-600 to-orange-400 bg-clip-text">
            Anil Yadav
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#ba6215] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTyped
              strings={[
                "Frontend Developer",
                "Data Analyst",
                "UI/UX Designer",
                "Graphic Designer",
                "MERN Stack Engineer",
              ]}
              typeSpeed={50}
              backSpeed={50}
              startDelay={500}
              backDelay={2000}
              loop
              cursorRenderer={(cursor) => (
                <span className="text-[#45c8ec]">{cursor}</span>
              )}
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-500 mb-10 mt-8 leading-relaxed">
            I’m a Frontend Developer and React.js enthusiast pursuing B.Tech in
            Chemical Engineering at NIT Agartala. Skilled in HTML, CSS,
            JavaScript, and React.js, with experience in building interactive
            web apps and data analytics projects. Passionate about learning,
            problem-solving, and creating impactful solutions.
          </p>

          <button className="group absolute w-32 cursor-pointer bg-white overflow-hidden rounded-full border p-2 text-center font-semibold items-start">
            <span className="translate-x-1 transition-all duration-800 group-hover:translate-x-12 group-hover:opacity-0 text-lg font-bold">
              Hover Here
            </span>
            <a
              href="https://drive.google.com/file/d/12zhka66t96wQ-K0XX9h9Gs-4IvPPi3hq/view?usp=drive_link"
              target="_self"
              rel="noopener noreferrer"
              className="absolute top-0 z-10 flex h-full w-full translate-x-1 items-center justify-center gap-1 opacity-0 transition-all duration-800 group-hover:-translate-x-2 group-hover:opacity-100 text-lg font-bold"
            >
              Resume
              <ArrowUpRightFromSquare
                className="text-teal-700 w-4 h-4 font-extrabold"
                strokeWidth={3}
              />
            </a>
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-4xl"
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Anil Yadav"
              className="w-full h-full rounded-4xl border-b-amber-100 object-cover drop-shadow-[0_10px_20px_rgba(130,69,43,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default About;
