import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import canvaLogo from "./assets/tech_logo/Canva.png";

// Experience Section Logo's
import externsLogo from "./assets/company_logo/Externs_Club.png";
import navoditaLogo from "./assets/company_logo/Navodita-logo.webp";

// Education Section Logo's
import NITAlogo from "./assets/education_logo/NITA-LOGO.png";
import APSLogo from "./assets/education_logo/APS-logo.png";
import VGPSLogo from "./assets/education_logo/Vedanta-logo.webp";

// Project Section Logo's
import currencyLogo from "./assets/work_logo/currency.jpg";
import pgLogo from "./assets/work_logo/PW.jpg";
import spotGharLogo from "./assets/work_logo/spotProperty.jpg";

// Testimonial Section Images
import RinkuPhoto from "./assets/TestimonialPhotos/Rinku.png"
import SachinPhoto from "./assets/TestimonialPhotos/Sachin.jpg"
import JangraPhoto from "./assets/TestimonialPhotos/Jangra.jpg"
import DheerajPhoto from "./assets/TestimonialPhotos/Dheeraj.jpg"

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Canva", logo: canvaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: externsLogo,
    role: "Fullstack Developer",
    company: "Externs Club Pvt. Ltd.",
    date: "May 2024 - June 2024",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: navoditaLogo,
    role: "Frontend Engineer",
    company: "Navodita Infotech",
    date: "May 2025 - June 2025",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: NITAlogo,
    school: "National Institute of Technology Agartala, Tripura",
    date: "Nov 2022 - July 2026",
    grade: "7.5+ CGPA",
    desc: "Currently pursuing a Bachelor of Technology in Chemical Engineering, gaining strong foundations in thermodynamics, fluid mechanics, mass transfer, heat transfer, process design, and reaction engineering. Alongside core academics, actively building skills in data analytics (Power BI, SQL, Excel) and web development (MERN stack, Tailwind, React) to integrate engineering knowledge with digital solutions.",
    degree: "Bachelor of Technology - CHE",
  },
  {
    id: 1,
    img: APSLogo,
    school: "APS Science School, Sikar",
    date: "June 2020 - June 2021",
    grade: "94.20%",
    desc: "I completed my class 12 education from Adarsh Public School, Sikar, under the RBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Hindi & English.",
    degree: "RBSE(XII) - PCM",
  },
  {
    id: 3,
    img: VGPSLogo,
    school: "Vedanta Gurukul Public School Ringas, Sikar",
    date: "June 2018 - June 2019",
    grade: "87.5%",
    desc: "I completed my class 10 education from Vedanta Gurukul Public School Ringas, Sikar, under the RBSE board.",
    degree: "RBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Spot Property",
    description:
      "A real estate themed MERN stack web app for property listing, searching, and exploring homes with a modern and responsive interface.",
    image: spotGharLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/ydv99anil/spotProperty",
    webapp: "https://spot-property.vercel.app/",
  },
  {
    id: 1,
    title: "Password Generator",
    description:
      "A lightweight React app that generates secure, customizable random passwords with options for length and character sets.",
    image: pgLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/ydv99anil/PasswordGenerator",
    webapp: "https://password-generator-xi-azure-31.vercel.app/",
  },
  {
    id: 2,
    title: "Currecncy Converter",
    description:
      "A React-based web app that provides real-time currency conversions using live API integration, ensuring accurate and quick results with a clean UI.",
    image: currencyLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/ydv99anil/Currency-Convertor",
    webapp: "https://currency-convertor-two-livid.vercel.app/",
  },
  {
    id: 3,
    title: "Task Management Web App",
    description:
      "A React-based web app that provides real-time currency conversions using live API integration, ensuring accurate and quick results with a clean UI.",
    image: currencyLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/ydv99anil/Currency-Convertor",
    webapp: "https://currency-convertor-two-livid.vercel.app/",
  },
];

export const testimonials = [
  {
    author: {
      name: "Gaurav Jangra",
      handle: "@emmaai",
      avatar: JangraPhoto,
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai",
  },
  {
    author: {
      name: "Dheeraj Kumar",
      handle: "@davidtech",
      avatar: DheerajPhoto,
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech",
  },
  {
    author: {
      name: "Sachin Sihag",
      handle: "@davidtech",
      avatar: SachinPhoto,
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech",
  },
  {
    author: {
      name: "Rinku Jai",
      handle: "@rinkujai",
      avatar: RinkuPhoto,
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
  },
];
