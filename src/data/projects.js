import dayareHome from "../assets/dayare-home.png";
import dayarePackage from "../assets/dayare-package.png";

import zeroHome from "../assets/zerotrade-home.png";
import zeroDashboard from "../assets/zerotrade-dashboard.png";

import zyraHome from "../assets/zyra-home.png";

import CampusAwaazLoginPage from "../assets/Campus-AwaazLoginPage.png";
import CampusAwaazHomePage from "../assets/Campus-AwaazHomePage.png";

export const projects = [
  {
    id: 1,
    title: "Dayare Haram Hajj & Umrah",
    status: "Live",
    description:
      "A premium Hajj & Umrah booking platform developed for Dayare Haram Hajj Umrah Tours & Travels Pvt. Ltd. featuring luxury packages, secure booking, authentication, AI assistant, and an admin dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
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
    tech: ["React", "Node.js", "Express", "MongoDB"],
    images: [zeroHome, zeroDashboard],

    github: "https://github.com/MdHamidAzam/ZeroTrade",
    live: "https://zero-trade-88xj.vercel.app/",

    featured: true,
  },

  {
    id: 3,
    title: "Campus-Awaaz – AI Voice Assistant for Students",
    status: "Live",
    description:
      "A multilingual AI-powered campus assistant that helps students access campus information, interact through voice in English, Hindi, and Hinglish, and manage campus complaints through a dedicated platform.",
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "Python",
      "FastAPI",
      "SQLite",
      "ElevenLabs API",
      "Vercel",
    ],
    images: [CampusAwaazLoginPage, CampusAwaazHomePage],
    github: "https://github.com/MdHamidAzam/Campus-Awaaz",
    live: "https://campus-awaaz.vercel.app",
    featured: true,
  },

  {
    id: 4,
    title: "ZyraAI – AI Chat Application",
    status: "Live",
    description:
      "A full-stack AI chat application powered by OpenAI with persistent conversations, chat history, thread management, and a responsive React interface.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "OpenAI API"],
    images: [zyraHome],
    github: "https://github.com/MdHamidAzam/ZyraAi",
    live: "https://zyra-ai-mu.vercel.app",
    featured: true,
  },

  {
    id: 5,
    title: "Lost & Found Tracking System",
    status: "Live",
    description:
      "A web application to report and recover lost items with a clean and user-friendly interface.",

    tech: ["HTML", "CSS", "JavaScript"],

    images: [],

    github: "https://github.com/MdHamidAzam/Lost-And-Found-Portal",

    featured: false,
  },
];
