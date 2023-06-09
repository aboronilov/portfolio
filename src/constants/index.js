import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  infoculture,
  next,
  firebase,
  python,

  netflix,
  reddit,
  estate,
  photographer,
  bank,
  restoraunt,
  ecommerce,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    id: 1,
    title: "Frontend Developer",
    icon: web,
  },
  {
    id: 2,
    title: "Backend Developer",
    icon: backend,
  },
  {
    id: 3,
    title: "ML engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    id: 1,
    title: "Backend Python Developer",
    company_name: "Infoculture",
    icon: infoculture,
    iconBg: "#383E56",
    date: "March 2022 - March 2023",
    stack: "Django, DRF, PostgreSQL",
    points: [
      "Developing and maintaining REST API backend.",
      "Endpoint Unit-testing.",
      "Code review.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    id: 1,
    name: "Netflix",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "PrismaDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    link: "https://next-netflix-flutvi99l-boronilov-team.vercel.app/",
    category: ["Fullstack", "All"],
  },
  {
    id: 2,
    name: "Reddit",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "pink-text-gradient",
      },
    ],
    image: reddit,
    link: "https://reddit-640hd4icq-boronilov-team.vercel.app/",
    category: ["Fullstack", "All"],
  },

  {
    id: 3,
    name: "Photographer Portfolio",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: photographer,
    link: "https://nice-photos-4u.netlify.app/",
    category: ["UI/UX", "All"],
  },
  {
    id: 4,
    name: "Bank APP",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ViteJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    link: "https://bank-app-jade.vercel.app/",
    category: ["UI/UX", "All"],
  },
  {
    id: 5,
    name: "Restaurant APP",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: restoraunt,
    link: "https://gericht-restaurant-inky.vercel.app/",
    category: ["UI/UX", "All"],
  },
  {
    id: 6,
    name: "ECommerce",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    link: "https://ecommerce-sanity-stripe-mvjv4jjn6-boronilov-team.vercel.app/",
    category: ["Fullstack", "All"],
  },
  {
    id: 7,
    name: "Estate Agency",
    tags: [
      {
        name: "RefineJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS Express",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: estate,
    link: "https://estate-git-main-boronilov-team.vercel.app/",
    category: ["Fullstack", "All"],
  },
];

export { services, technologies, experiences, testimonials, projects };
