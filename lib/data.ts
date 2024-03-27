import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import { FooterQuotesInterface } from "@/lib/types";
import rollForInitLogo from "@/public/logos/roll-for-init-logo.png";
import seanPixelPortrait from "@/public/logos/sean-pixelated-512.png";
import ufSeal from "@/public/logos/uf-seal.png";
import ufVergLogo from "@/public/logos/uf-verg-logo.jpeg";
import xdgLogo from "@/public/logos/xdg-logo.png";

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
    icon: React.createElement(CgWorkAlt),
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
      "Worked in UF's Human-Centered Computing Lab on two projects, PPCards and BlockXR. Both projects centered on augmented reality (AR) interfaces designed to incorporate AR into tangible circuit-building and coding tutorials. Incorporated real-time feedback projected onto the workspace to alert users to mistakes, and provided contextual suggestions to correct errors. Co-authored published research papers on both projects.",
    icon: React.createElement(LuGraduationCap),
    date: "December 2020 – October 2021",
    tags: [
      "Unity",
      "Python",
      "OpenCV",
      "Open Sound Control",
      "3D Design/Printing",
      "Augmented Reality",
    ],
  },
  {
    title: "Software Engineer I",
    location: "CAE USA",
    description:
      "Worked on bleeding-edge products for use on classified network environments. Wore multiple hats as a Developer, Tester, and Product Owner while holding Top Secret security clearance.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2021 - Present",
    tags: [
      "Sprint Planning",
      "Test-Driven Development",
      "xUnit.net",
      "Java",
      "JavaScript",
    ],
  },
];

export const projectsData = [
  {
    title: "XDG Technologies Website",
    description:
      "Worked with XDG to replace their outdated Wordpress site with a responsive React web app. Used Figma to mock up high-fidelity prototypes of modular components. Included order and payment processing functionality via Stripe.",
    tags: ["React.js", "React-Router", "Basic-Auth", "Heroku", "MongoDB"],
    image: xdgLogo,
    links: {
      deployment: null,
      github: "https://github.com/CEN30315A/Site/",
    },
  },
  {
    title: "Gator Trader, University of Florida",
    description:
      "Worked with UF faculty to develop a responsive React replacement for UF's Textbook Exchange web service with goals of modernizing the site's look and reducing load times by at least 50%.",
    tags: [
      "React.js",
      "React-Router",
      "Bootstrap",
      "Material UI",
      "Basic-Auth",
      "Express",
    ],
    image: ufSeal,
    links: {
      deployment: null,
      github: "https://github.com/seanpstanley/react-gator-trader",
    },
  },
  {
    title: "Roll for Init, 5E Tabletop RPG Aide",
    description:
      "Created an Open Gaming License-compliant alternative to sites like D&D Beyond. Used React with Redux to manage the state of each player's character. Included multiplayer party functionality.",
    tags: [
      "React.js",
      "Redux",
      "React-Router",
      "Bootstrap",
      "Sass",
      "Express",
      "OAuth",
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
      "Designed and built prototypes of PPCards, a card-based augmented reality learning platform for prototyping electronic circuits. Presented a prototype at the ACM TEI2021 conference in February 2021.",
    tags: [
      "Unity",
      "Python",
      "OpenCV",
      "Open Sound Control",
      "3D Design/Printing",
      "Augmented Reality",
    ],
    image: ufVergLogo,
    links: {
      deployment: "https://dl.acm.org/doi/abs/10.1145/3430524.3440643",
      github: null,
    },
  },
  {
    title: "BlockXR",
    description:
      "Used technology and lessons learned while working on the previous project, PPCards, to create blockXR, a tangible version of Google’s Blockly. Conducted user studies on campus, and presented a showpiece at VL/HCC in October 2021.",
    tags: [
      "Unity",
      "Python",
      "OpenCV",
      "Open Sound Control",
      "3D Design/Printing",
      "Augmented Reality",
    ],
    image: ufVergLogo,
    links: {
      deployment: "https://ieeexplore.ieee.org/document/9576344",
      github: null,
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

export const footerQuotes = {
  8: {
    quote: '"Some guys, they just hate for no reason, capisce?"',
    source: "Rocky",
    year: 1976,
  },
  9: {
    quote: '"Talk to me, Goose."',
    source: "Top Gun",
    year: 1986,
  },
  10: {
    quote:
      "\"When it comes to the safety of these people, there's me and then there's God, understand?\"",
    source: "The Abyss",
    year: 1989,
  },
  11: {
    quote: '"Congratulations!"',
    source: "Neon Genesis Evangelion",
    year: 1995,
  },
  12: {
    quote: "It was a little corny, but you're a violin maker, not a writer.",
    source: "Whisper of the Heart",
    year: 1995,
  },
  13: {
    quote: "\"Oh, he's a little guy, kind of funny-lookin'.\"",
    source: "Fargo",
    year: 1996,
  },
  14: {
    quote: '"A woman’s heart is a deep ocean of secrets."',
    source: "Titanic",
    year: 1997,
  },
  15: {
    quote:
      '"Anywhere can be paradise as long as you have the will to live. After all, you are alive, so you will always have the chance to be happy."',
    source: "The End of Evangelion",
    year: 1997,
  },
  16: {
    quote:
      '"As long as the Sun, the Moon, and the Earth exist, everything will be all right."',
    source: "The End of Evangelion",
    year: 1997,
  },
  17: {
    quote: "See you space cowboy...",
    source: "Cowboy Bebop",
    year: 1998,
  },
  18: {
    quote: "This land is made of... LOVE AND PEACE!",
    source: "Trigun",
    year: 1998,
  },
  19: {
    quote: "Nothing can happen until you swing the bat.",
    source: "FLCL",
    year: 2000,
  },
  20: {
    quote: '"Hey man, you got somethin\' to eat up in there? We hongry."',
    source: "2 Fast 2 Furious",
    year: 2003,
  },
  21: {
    quote:
      "Do you not know that in the service, one must always choose the lesser of two weevils?",
    source: "Master and Commander: The Far Side of the World",
    year: 2003,
  },
  22: {
    quote: "You are without a doubt the worst pirate I’ve ever heard of.",
    source: "Pirates of the Caribbean: The Curse of the Black Pearl",
    year: 2003,
  },
  23: {
    quote:
      "Sometimes, to do what's right, we have to be steady and give up the thing we want the most, even our dreams.",
    source: "Spider-Man 2",
    year: 2004,
  },
  24: {
    quote: '"More like a NON-ja. Terrible what passes for a ninja these days."',
    source: "Speed Racer",
    year: 2008,
  },
  25: {
    quote: '"How can you not be romantic about baseball?"',
    source: "Moneyball",
    year: 2011,
  },
  26: {
    quote:
      "It's not about winning or losing! It's about me taking you on right here, right now!",
    source: "One Punch Man",
    year: 2015,
  },
  27: {
    quote: "I'm the protagonist of my own life.",
    source: "Mob Psycho 100",
    year: 2018,
  },
  28: {
    quote: "Guess why I smile a lot. Uh, 'cause it's worth it.",
    source: "Marcel the Shell with the Shoes On",
    year: 2021,
  },
  29: {
    quote: '"It’s Not The Plane, It’s The Pilot."',
    source: "Top Gun: Maverick",
    year: 2022,
  },
  30: {
    quote: "It's my fear that brought me this far.",
    source: "Frieren: Beyond Journey's End",
    year: 2023,
  },
  31: {
    quote: "To live is to be known and remembered by others.",
    source: "Frieren: Beyond Journey's End",
    year: 2023,
  },
} as FooterQuotesInterface;

export const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
