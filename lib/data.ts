import React from "react";

import { FaReact } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { GiClassicalKnowledge } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdWork } from "react-icons/md";

import { FooterQuotesInterface } from "@/lib/types";
import brewdLogo from "@/public/logos/brewd-logo.png";
import rollForInitLogo from "@/public/logos/roll-for-init-logo.png";
import seanPixelPortrait from "@/public/logos/sean-pixelated-512.png";
import ufSeal from "@/public/logos/uf-seal.png";
import ufVergLogo from "@/public/logos/uf-verg-logo.jpeg";
import xdgLogo from "@/public/logos/xdg-logo.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: React.createElement(IoHome),
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
  {
    name: "Experience",
    hash: "#experience",
    icon: React.createElement(MdWork),
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(FaReact),
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: React.createElement(GiClassicalKnowledge),
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: React.createElement(MdEmail),
  },
];

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    location: "Burnley Consulting",
    description:
      "Developed computer vision software using open-source machine-learning libraries for autonomous robotics. Used OpenCV's pre-trained deep neural networks (DNN) module with Java to facilitate recognition of several kinds of objects that the robot interacted with contextually.",
    icon: React.createElement(MdWork),
    date: "May 2018 - August 2018",
    tags: ["Java", "OpenCV"],
  },
  {
    title: "Undergraduate Researcher",
    location: "University of Florida",
    description:
      "Worked in UF's Human-Centered Computing Lab on two projects, PPCards and BlockXR. Both projects centered on augmented reality (AR) interfaces designed to incorporate AR into tangible circuit-building and coding tutorials. Incorporated real-time feedback projected onto the workspace to alert users to mistakes, and provided contextual suggestions to correct errors. Co-authored published research papers on both projects.",
    icon: React.createElement(FaGraduationCap),
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
    icon: React.createElement(MdWork),
    date: "June 2021 - Present",
    tags: [
      "Sprint Planning",
      "Test-Driven Development",
      "xUnit.net",
      ".NET Core",
      "Java",
      "JavaScript",
      "React",
      "Postman",
      "Swagger",
      "Selenium",
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
      github: {
        link: "https://github.com/CEN30315A/Site/",
        accessibilityText:
          "GitHub project page for the XDG Technologies Website.",
      },
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
      github: {
        link: "https://github.com/seanpstanley/react-gator-trader",
        accessibilityText: "GitHub project page for Gator Trader.",
      },
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
      deployment: null,
      github: {
        link: "https://github.com/Roll-For-Init",
        accessibilityText: "GitHub project page for Roll for Init.",
      },
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
      deployment: {
        link: "https://dl.acm.org/doi/abs/10.1145/3430524.3440643",
        accessibilityText: "ACM Digital Library page for PPCards publication.",
      },
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
      deployment: {
        link: "https://ieeexplore.ieee.org/document/9576344",
        accessibilityText: "IEEE Xplore page for BlockXR publication.",
      },
      github: null,
    },
  },
  {
    title: "Portfolio Website v1",
    description:
      "I wanted to test my skills by creating a React app using React-Router and React Hooks without using any template. I also wanted to avoid using Bootstrap or any other CSS libraries. This experience reminded me that those tools exist for a reason. The website turned out okay, if a little clunky.",
    tags: ["React.js", "React-Router", "Netlify"],
    image: seanPixelPortrait,
    links: {
      deployment: null,
      github: {
        link: "https://github.com/seanpstanley/personal-website",
        accessibilityText:
          "GitHub project page for my first portfolio website.",
      },
    },
  },
  {
    title: "This Website, Portfolio Website v2",
    description:
      "Used Tailwind + Framer to implement flashier stuff, faster. Heavily focused on accessibility--including full compat. with screen readers and keyboard navigation. Used axe DevTools/WCAG 2.1 to verify compliance.",
    tags: [
      "Next.js",
      "Server Actions",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Context API",
      "Resend",
      "React Hot Toast",
      "Vercel",
      "axe DevTools",
    ],
    image: seanPixelPortrait,
    links: {
      deployment: {
        link: "https://www.seanpstanley.dev/",
        accessibilityText: "My current portfolio website.",
      },
      github: {
        link: "https://github.com/seanpstanley/personal-website-v2",
        accessibilityText:
          "GitHub project page for my current portfolio website.",
      },
    },
  },
  {
    title: "Brewd - A Social Coffee Experience",
    description:
      "Currently brewing. Brewd is a coffee-rating webapp that helps users discover, rate, and share their coffee experiences, inspired by platforms like Letterboxd, Untappd, and Backloggd.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Dynamic Routes",
      "Google Places API",
      "Postgres",
      "Drizzle ORM",
      "Vercel",
    ],
    image: brewdLogo,
    links: {
      deployment: {
        link: "https://brewd.org/",
        accessibilityText: "Brewd homepage.",
      },
      github: {
        link: "hhttps://github.com/Brewd-Co/Brewd",
        accessibilityText: "GitHub project page for Brewd.",
      },
    },
  },
];

export const skillsData = [
  "HTML5",
  "CSS/SCSS",
  "JavaScript ES6+",
  "TypeScript",
  "React.js",
  "Next.js",
  "Accessible Design",
  "Git",
  "Tailwind CSS",
  "Framer Motion",
  "Responsive Design",
  "REST APIs",
  "React Redux",
  "SQL",
  "Unity",
  "Python",
  "Java",
  ".NET/C#",
  "Blender",
  "Figma",
];

export const footerQuotes = {
  1: {
    quote: "Some guys, they just hate for no reason, capisce?",
    source: "Rocky",
    year: 1976,
  },
  2: {
    quote: "Talk to me, Goose.",
    source: "Top Gun",
    year: 1986,
  },
  3: {
    quote:
      "When it comes to the safety of these people, there's me and then there's God, understand?",
    source: "The Abyss",
    year: 1989,
  },
  4: {
    quote: "Congratulations!",
    source: "Neon Genesis Evangelion",
    year: 1995,
  },
  5: {
    quote: "It was a little corny, but you're a violin maker, not a writer.",
    source: "Whisper of the Heart",
    year: 1995,
  },
  6: {
    quote: "Sure, fine. Whatever.",
    source: "The X-Files",
    year: 1996,
  },
  7: {
    quote: "Oh, he's a little guy, kind of funny-lookin'.",
    source: "Fargo",
    year: 1996,
  },
  8: {
    quote: "A woman’s heart is a deep ocean of secrets.",
    source: "Titanic",
    year: 1997,
  },
  9: {
    quote:
      "Anywhere can be paradise as long as you have the will to live. After all, you are alive, so you will always have the chance to be happy.",
    source: "The End of Evangelion",
    year: 1997,
  },
  10: {
    quote:
      "As long as the Sun, the Moon, and the Earth exist, everything will be all right.",
    source: "The End of Evangelion",
    year: 1997,
  },
  11: {
    quote: "This land is made of... LOVE AND PEACE!",
    source: "Trigun",
    year: 1998,
  },
  12: {
    quote: "Nothing can happen until you swing the bat.",
    source: "FLCL",
    year: 2000,
  },
  13: {
    quote: "I'll use my trusty frying pan, as a drying pan!",
    source: "Pokémon: Mewtwo Returns",
    year: 2002,
  },
  14: {
    quote: "With great power comes great responsibility.",
    source: "Spider-Man",
    year: 2002,
  },
  15: {
    quote: "Hey man, you got somethin' to eat up in there? We hongry.",
    source: "2 Fast 2 Furious",
    year: 2003,
  },
  16: {
    quote:
      "Do you not know that in the service, one must always choose the lesser of two weevils?",
    source: "Master and Commander: The Far Side of the World",
    year: 2003,
  },
  17: {
    quote: "You are without a doubt the worst pirate I’ve ever heard of.",
    source: "Pirates of the Caribbean: The Curse of the Black Pearl",
    year: 2003,
  },
  18: {
    quote:
      "Sometimes, to do what's right, we have to be steady and give up the thing we want the most, even our dreams.",
    source: "Spider-Man 2",
    year: 2004,
  },
  19: {
    quote: "So just, like, evaporate or something, I don't know.",
    source: "Veronica Mars",
    year: 2005,
  },
  20: {
    quote: "No one writes songs about the ones that come easy.",
    source: "Veronica Mars",
    year: 2006,
  },
  21: {
    quote: "More like a NON-ja. Terrible what passes for a ninja these days.",
    source: "Speed Racer",
    year: 2008,
  },
  22: {
    quote: "How can you not be romantic about baseball?",
    source: "Moneyball",
    year: 2011,
  },
  23: {
    quote: "I don't play the odds, I play the man.",
    source: "Suits",
    year: 2012,
  },
  24: {
    quote:
      "It's not about winning or losing! It's about me taking you on right here, right now!",
    source: "One Punch Man",
    year: 2015,
  },
  25: {
    quote: "And being alive is pretty much a constant stream of embarrassment.",
    source: "Nier Automata",
    year: 2017,
  },
  26: {
    quote:
      "A future is not given to you. It is something that you must take for yourself.",
    source: "Nier Automata",
    year: 2017,
  },
  27: {
    quote: "I'm the protagonist of my own life.",
    source: "Mob Psycho 100",
    year: 2018,
  },
  28: {
    quote: "I'm the protagonist.",
    source: "Tenet",
    year: 2020,
  },
  29: {
    quote: "Guess why I smile a lot. Uh, 'cause it's worth it.",
    source: "Marcel the Shell with the Shoes On",
    year: 2021,
  },
  30: {
    quote:
      "Being afraid isn't a bad thing. It's my fear that brought me this far.",
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
