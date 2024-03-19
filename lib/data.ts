import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import rollForInitLogo from "@/public/logos/roll-for-init-logo.png";
import seanPixelPortrait from "@/public/logos/sean-pixelated-512.png";
import ufSeal from "@/public/logos/uf-seal.png";
import xdgLogo from "@/public/logos/xdg-logo.png";

import ufVergLogo from "@/public/uf-verg-logo.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    location: "Burnley Consulting",
    description:
      "Developed computer vision software using open-source machine-learning libraries for autonomous robotics. Used OpenCV's pre-trained deep neural networks (DNN) module with Java to facilitate recognition of several kinds of objects that the robot interacted with contextually.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2018 - August 2018",
    tags: [
      "Redux",
      "React.js",
      "React-Router",
      "Bootstrap",
      "Sass",
      "Express",
      "Heroku",
      "Webpack",
    ],
  },
  {
    title: "Undergraduate Researcher",
    location: "University of Florida",
    description:
      "Working in UF's Human-Centered Computing Lab on PPCards, a card-based augmented reality learning platform for prototyping electronic circuits using OpenCV's deep learning libraries with Python. Incorporates real-time feedback on mistakes made by users. Co-authoring a soon-to-be published research paper on the project.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2020 – October 2021",
    tags: [
      "Redux",
      "React.js",
      "React-Router",
      "Bootstrap",
      "Sass",
      "Express",
      "Heroku",
      "Webpack",
    ],
  },
  {
    title: "Software Engineer I",
    location: "CAE USA",
    description:
      "Developed computer vision software using open-source machine-learning libraries for autonomous robotics. Used OpenCV's pre-trained deep neural networks (DNN) module with Java to facilitate recognition of several kinds of objects that the robot interacted with contextually.",
    icon: React.createElement(FaReact),
    date: "June 2021 - Present",
    tags: [
      "Redux",
      "React.js",
      "React-Router",
      "Bootstrap",
      "Sass",
      "Express",
      "Heroku",
      "Webpack",
    ],
  },
];

export const projectsData = [
  {
    title: "XDG Technologies Website",
    description:
      "Worked with XDG to replace their outdated Wordpress site with a responsive React web app. Used Figma to mock up high-fidelity prototypes of modular components. Included order and payment processing functionality via Stripe.",
    tags: ["React.js", "React-Router", "Bootstrap", "Heroku", "MongoDB"],
    image: xdgLogo,
    links: {
      deployment: null,
      github: "https://github.com/CEN30315A/Site/",
    },
  },
  {
    title: "Gator Trader, University of Florida",
    description:
      "Worked on a team with UF faculty to develop a responsive React replacement for UF's Textbook Exchange web service with goals of modernizing the site's look and reducing load times by at least 50%.",
    tags: ["React.js", "React-Router", "Bootstrap", "Express"],
    image: ufSeal,
    links: {
      deployment: null,
      github: "https://github.com/seanpstanley/react-gator-trader",
    },
  },
  {
    title: "Roll for Init, 5E Tabletop RPG Aide",
    description:
      "Created an Open Gaming License-compliant alternative to sites like <span className='italic'>D&D Beyond</span>. Used React with Redux to manage the state of each player's character. Included multiplayer party functionality.",
    tags: [
      "React.js",
      "Redux",
      "React-Router",
      "Bootstrap",
      "Sass",
      "Express",
      "Heroku",
      "Webpack",
    ],
    image: rollForInitLogo,
    links: {
      deployment: "https://rollforinit.herokuapp.com/",
      github: "https://github.com/Roll-For-Init",
    },
  },
  {
    title: "PPCards",
    description:
      "Created an Open Gaming License-compliant alternative to sites like <span className='italic'>D&D Beyond</span>. Used React with Redux to manage the state of each player's character. Included multiplayer party functionality.",
    tags: [
      "React.js",
      "Redux",
      "React-Router",
      "Bootstrap",
      "Sass",
      "Express",
      "Heroku",
      "Webpack",
    ],
    image: rollForInitLogo,
    links: {
      deployment: "https://rollforinit.herokuapp.com/",
      github: "https://github.com/Roll-For-Init",
    },
  },
  {
    title: "BlockXr",
    description:
      "Created an Open Gaming License-compliant alternative to sites like <span className='italic'>D&D Beyond</span>. Used React with Redux to manage the state of each player's character. Included multiplayer party functionality.",
    tags: [
      "React.js",
      "Redux",
      "React-Router",
      "Bootstrap",
      "Sass",
      "Express",
      "Heroku",
      "Webpack",
    ],
    image: rollForInitLogo,
    links: {
      deployment: "https://rollforinit.herokuapp.com/",
      github: "https://github.com/Roll-For-Init",
    },
  },
  {
    title: "Portfolio Website v1",
    description:
      "I wanted to test my skills by creating a React app using React-Router and React Hooks without using any template. I also wanted to avoid using Bootstrap or any other CSS libraries. however, i learned those tools exist for a reason. the website turned out okay, if a little clunky.",
    tags: ["React.js", "React-Router", "Netlify"],
    image: seanPixelPortrait,
    links: {
      deployment: null,
      github: "https://github.com/seanpstanley/personal-website",
    },
  },
  {
    title: "This Website, Portfolio Website v2",
    description:
      "The new hotness. Used Tailwind and Framer Motion to learn how to implement flashier stuff with as little work as possible. I feel like it turned out pretty well. The jury's still out on Tailwind, though.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Context API",
      "Resend",
      "React Email",
      "Toast",
      "Vercel",
    ],
    image: seanPixelPortrait,
    links: {
      deployment: "https://www.seanpstanley.dev/",
      github: "https://github.com/seanpstanley/personal-website-v2",
    },
  },
  {
    title: "TBD Seartin Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["?", "??", "???", "..."],
    image: seanPixelPortrait,
    links: {
      deployment: null,
      github: "https://github.com/seanpstanley/personal-website-v2",
    },
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript ES6+",
  "TypeScript",
  "React.js",
  "Next.js",
  "Git",
  "Tailwind CSS",
  "Framer Motion",
  "React Redux",
  "SQL",
  "Unity",
  "Python",
  "Java",
  "Blender",
  "Figma",
];
