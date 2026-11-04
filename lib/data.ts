import type {
  Experience,
  FeaturedProject,
  FooterQuotesInterface,
  Project,
  SkillGroup,
} from "@/lib/types";

export const links = [
  { name: "About", short: "about", hash: "#about" },
  { name: "Experience", short: "work", hash: "#experience" },
  { name: "Projects", short: "projects", hash: "#projects" },
  { name: "Skills", short: "skills", hash: "#skills" },
  { name: "Contact", short: "contact", hash: "#contact" },
] as const;

export const resumeHref = "/files/sean-stanley-resume.pdf";

export const socials = {
  github: "https://github.com/seanpstanley",
  linkedin: "https://www.linkedin.com/in/seanpstanley/",
  email: "seans09comp@gmail.com",
};

// newest first
export const experiencesData: Experience[] = [
  {
    kind: "work",
    title: "Software Engineer I",
    org: "CAE USA",
    date: "Jun 2021 — Aug 2024",
    description:
      "Worked on bleeding-edge products for use on classified network environments. Wore multiple hats as a Developer, Tester, and Product Owner while holding Top Secret security clearance.",
    tags: [
      "Agile Sprint Planning",
      "Test-Driven Development",
      "Confluence",
      "Jira",
      "xUnit.net",
      ".NET Core",
      "Java",
      "TypeScript",
      "React",
      "Postman",
      "Swagger",
      "Selenium WebDriver",
    ],
  },
  {
    kind: "research",
    title: "Undergraduate Researcher",
    org: "University of Florida",
    date: "Dec 2020 — Oct 2021",
    description:
      "Worked in UF's Human-Centered Computing Lab on two projects, PPCards and BlockXR. Both projects centered on augmented reality interfaces designed to incorporate AR into tangible circuit-building and coding tutorials. Incorporated real-time feedback projected onto the workspace to alert users to mistakes, and provided contextual suggestions to correct errors. Co-authored published research papers on both projects.",
    tags: [
      "Unity",
      "Python",
      "OpenCV",
      "Open Sound Control",
      "3D Design/Printing",
      "Augmented Reality",
      "A/B Testing",
    ],
  },
  {
    kind: "work",
    title: "Software Engineer Intern",
    org: "Burnley Consulting",
    date: "May 2018 — Aug 2018",
    description:
      "Developed computer vision software using open-source machine-learning libraries for autonomous robotics. Used OpenCV's pre-trained deep neural networks module with Java to facilitate recognition of several kinds of objects that the robot interacted with contextually.",
    tags: ["Java", "OpenCV"],
  },
];

export const featuredProject: FeaturedProject = {
  title: "Brewd",
  subtitle: "A social coffee experience",
  status: "in active development",
  description:
    "Currently brewing. Brewd is a coffee-rating web app that helps users discover, rate, and share their coffee experiences, inspired by platforms like Letterboxd, Untappd, and Backloggd.",
  tags: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Radix UI",
    "PostgreSQL",
    "Drizzle ORM",
    "NextAuth",
    "SWR",
    "AWS S3",
    "Google Places API",
    "Dynamic Routes",
    "Vercel",
  ],
  live: { href: "https://brewd.org/", label: "Open Brewd (opens in a new tab)" },
};

export const projectsData: Project[] = [
  {
    mono: "hd",
    kind: "web app",
    category: "web",
    title: "Hue Dat Boy",
    description:
      "A contrast checker for WCAG & APCA, a font picker, a contrast enhancer, and a colorblindness simulator walk into a bar. Available in English, Spanish, and Lithuanian.",
    tags: [
      "Next.js",
      "TypeScript",
      "next-intl",
      "Tailwind CSS",
      "Shadcn UI",
      "Google Fonts API",
      "SWR",
      "Vitest",
      "Vercel",
    ],
    live: { href: "https://huedatboy.com/", label: "Open Hue Dat Boy (opens in a new tab)" },
    code: {
      href: "https://github.com/seanpstanley/hue-dat-boy",
      label: "Hue Dat Boy source on GitHub (opens in a new tab)",
    },
  },
  {
    mono: "v2",
    kind: "this site",
    category: "web",
    title: "Portfolio v2",
    description:
      "Built with a heavy focus on accessibility, including full screen-reader and keyboard support, verified with axe DevTools against WCAG 2.1.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Server Actions",
      "TypeScript",
      "Motion",
      "React Context API",
      "Resend",
      "React Hot Toast",
      "Vercel",
      "axe DevTools",
    ],
    code: {
      href: "https://github.com/seanpstanley/portfolio-site-v2",
      label: "Portfolio v2 source on GitHub (opens in a new tab)",
    },
  },
  {
    mono: "bx",
    kind: "research · ieee",
    category: "research",
    title: "BlockXR",
    description:
      "A tangible version of Google's Blockly, built on lessons from PPCards. Ran user studies on campus and presented a showpiece at VL/HCC in October 2021.",
    tags: [
      "Unity",
      "OpenCV",
      "Augmented Reality",
      "Python",
      "Open Sound Control",
      "3D Design/Printing",
    ],
    live: {
      href: "https://ieeexplore.ieee.org/document/9576344",
      label: "BlockXR paper on IEEE Xplore (opens in a new tab)",
    },
  },
  {
    mono: "pp",
    kind: "research · acm",
    category: "research",
    title: "PPCards",
    description:
      "A card-based augmented reality learning platform for prototyping electronic circuits. Presented a prototype at ACM TEI 2021.",
    tags: [
      "Unity",
      "Python",
      "Augmented Reality",
      "OpenCV",
      "Open Sound Control",
      "3D Design/Printing",
    ],
    live: {
      href: "https://dl.acm.org/doi/abs/10.1145/3430524.3440643",
      label: "PPCards paper in the ACM Digital Library (opens in a new tab)",
    },
  },
  {
    mono: "r4",
    kind: "web app",
    category: "web",
    title: "Roll for Init",
    description:
      "An Open Gaming License-compliant alternative to sites like D&D Beyond, using React and Redux to manage each player's character, with multiplayer parties.",
    tags: [
      "React",
      "Redux",
      "Express",
      "React Router",
      "Bootstrap",
      "Sass",
      "OAuth",
      "Heroku",
      "Webpack",
    ],
    live: {
      href: "https://xd.adobe.com/view/e345a295-5deb-44fb-a0ef-53cb63277d70-b616/?fullscreen",
      label: "Roll for Init prototype (opens in a new tab)",
    },
    code: {
      href: "https://github.com/Roll-For-Init",
      label: "Roll for Init on GitHub (opens in a new tab)",
    },
  },
  {
    mono: "gt",
    kind: "web app",
    category: "web",
    title: "Gator Trader",
    description:
      "A responsive React replacement for UF's Textbook Exchange, aiming to modernize the look and cut load times by at least 50%.",
    tags: [
      "React",
      "Material UI",
      "Express",
      "React Router",
      "Bootstrap",
      "Basic Auth",
    ],
    code: {
      href: "https://github.com/seanpstanley/react-gator-trader",
      label: "Gator Trader on GitHub (opens in a new tab)",
    },
  },
  {
    mono: "xd",
    kind: "client site",
    category: "web",
    title: "XDG Technologies",
    description:
      "Replaced an outdated WordPress site with a responsive React app, prototyped in Figma, with order and payment processing via Stripe.",
    tags: ["React", "MongoDB", "Heroku", "React Router", "Basic Auth"],
    code: {
      href: "https://github.com/CEN30315A/Site/",
      label: "XDG Technologies site on GitHub (opens in a new tab)",
    },
  },
  {
    mono: "v1",
    kind: "archive",
    category: "web",
    title: "Portfolio v1",
    description:
      "A React app with no template and no CSS library — a reminder that those tools exist for a reason. It turned out okay, if a little clunky.",
    tags: ["React", "React Router", "Netlify"],
    code: {
      href: "https://github.com/seanpstanley/personal-website",
      label: "Portfolio v1 on GitHub (opens in a new tab)",
    },
  },
];

export const projectFilters = [
  { value: "all", label: "all" },
  { value: "web", label: "web" },
  { value: "research", label: "research" },
] as const;

export const skillGroups: SkillGroup[] = [
  {
    name: "languages",
    color: "var(--fill)",
    items: [
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS/SCSS",
      "SQL",
      "Python",
      "Java",
      ".NET/C#",
    ],
  },
  {
    name: "frameworks",
    color: "var(--navy)",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "React Redux",
      "Drizzle ORM",
    ],
  },
  {
    name: "quality & a11y",
    color: "var(--signal)",
    items: [
      "Accessible Design",
      "Responsive Design",
      "axe DevTools",
      "Google Lighthouse",
      "Vitest",
      "Cypress",
      "React Testing Library",
    ],
  },
  {
    name: "tools",
    color: "var(--tan)",
    items: [
      "Git",
      "REST APIs",
      "PostgreSQL",
      "AWS S3",
      "Vercel",
      "Figma",
      "Unity",
      "Blender",
    ],
  },
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
