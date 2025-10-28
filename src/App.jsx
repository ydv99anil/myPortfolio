import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import BlurEffect from "./BlurEffect";
import { TestimonialsSection } from "./components/Testimonials/Testimonial";
import { testimonials } from "./rawData";


function App() {
  return (
    <>
      <div className="bg-[#040c14]">
        <BlurEffect
          position={{ top: "4%", left: "25%" }}
          size={{ width: "30%", height: "40%" }}
        />
        <BlurEffect
          position={{ top: "50%", left: "70%" }}
          size={{ width: "20%", height: "30%" }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="relative pt-16 w-full scroll-smooth">
          <Navbar />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <TestimonialsSection
            testimonials={testimonials}
          />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
