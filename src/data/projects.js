import dayareHome from "../assets/dayare-home.png";
import dayarePackage from "../assets/dayare-package.png";

import zeroHome from "../assets/zerotrade-home.png";
import zeroDashboard from "../assets/zerotrade-dashboard.png";

export const projects = [
  {
    id: 1,
    title: "Dayare Haram Hajj & Umrah",
    status: "Live",
    description:
      "A premium Hajj & Umrah booking platform developed for Dayare Haram Hajj Umrah Tours & Travels Pvt. Ltd. featuring luxury packages, secure booking, authentication, AI assistant, and an admin dashboard.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
    ],
    images: [dayareHome, dayarePackage],

    github: "https://github.com/MdHamidAzam/ihram-legacy-hub",
    live: "https://dayare-haram-hajj-and-umrah-f900onom3-mdhamidazams-projects.vercel.app/",

    featured: true,
  },

  {
    id: 2,
    title: "ZeroTrade (Zerodha Clone)",
    status: "Live",
    description:
      "A modern trading platform inspired by Zerodha with responsive landing page, dashboard, authentication and clean UI.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    images: [zeroHome, zeroDashboard],

    github: "https://github.com/MdHamidAzam/ZeroTrade",
    live: "https://zero-trade-88xj.vercel.app/",

    featured: true,
  },

  {
    id: 3,
    title: "Lost & Found Tracking System",
    status: "Live",
    description:
      "A web application to report and recover lost items with a clean and user-friendly interface.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    images: [],

    github: "https://github.com/MdHamidAzam/Lost-And-Found-Portal",

    featured: false,
  },
];