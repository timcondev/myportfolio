import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import firstProjectImage from "@/public/jerseyduel.png";
import secondProjectImage from "@/public/brainiac.png";
import thirdProjectImage from "@/public/dashboard.png";
import gitImage from "@/public/myGit.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Fleming College - Computer Programmer Analyst",
    location: "Peterborough, ON",
    description:
      "I graduated as a Computer Programmer Analyst. Studying C/C++, PHP, Perl, Javascript, HTML, CSS and other languages. ",
    icon: React.createElement(LuGraduationCap),
    date: "2000-2003",
  },
  {
    title: "Technical Support Representative",
    location: "Peterborough, ON",
    description:
      "Worked as a support representative support Apple. Support product such as computers, iPods, laptops, desktops, etc.",
    icon: React.createElement(CgWorkAlt),
    date: "2005",
  },
  {
    title: "Performance Coach",
    location: "Peterborough, ON",
    description:
      "Developed and presented coaching plans for Technical Support Advisors based on KPI/metric standards provided by the client.",
    icon: React.createElement(CgWorkAlt),
    date: "2006 - 2010",
  },
  {
    title: "Quality Evaluator",
    location: "Peterborough, ON",
    description:
      "Created SMART goals to coach advisors on both technical and soft skills. Including the MacOs, iOS and Windows environments.",
    icon: React.createElement(CgWorkAlt),
    date: "2010 - 2016",
  },
  {
    title: "Senior Quality Evaluator",
    location: "Peterborough, ON",
    description:
      "Trained and coached senior advisors, requiring knowledge of all products within the Apple Environment. Create tools and processes to further enhance both advisor and quality workflows.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2023",
  },
  {
    title: "Freelance Web Development",
    location: "Peterborough, ON",
    description:
      "Working on various Web projects, while consistently improving my existing Web Development skills with a focus on new technologies.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Centennial College - Software Engineering",
    location: "Peterborough, ON",
    description:
      "Currently enrolled in Software Engineering at Centennial College to further enhance my web development skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Jersey Duel",
    description:
      "Allows users to upload any two jerseys then have friends vote on their favorite! SaaS upgrades using Stripe.",
    tags: ["React", "Next.js", "Tailwind", "Convex", "Stripe", "Clerk"],
    imageUrl: firstProjectImage,
    link: "https://jerseyduel.timconway.dev/",
  },
  {
    title: "Brainiac",
    description:
      "AI Enhanced notes. Create AI assist notes, then have it create a thumbnail to help quickly locate it!",
    tags: [
      "ChatGPT",
      "React",
      "Next.Js",
      "Tailwind",
      "Firebase",
      "Clerk",
      "Drizzle ORM",
    ],
    imageUrl: secondProjectImage,
    link: "https://brainiac.timconway.dev/",
  },
  {
    title: "Dashboard",
    description:
      "An Admin Dashboard CRUD app that allows you to create, read, update and delete both users and products in a dashboard.",
    tags: [
      "React",
      "Next.js",
      "Server Components",
      "Tailwind",
      "NextAuth",
      "MongoDB",
    ],
    imageUrl: thirdProjectImage,
    link: "https://dashboard.timconway.dev/",
  },
  {
    title: "My Git",
    description: "Check out my Git for more projects.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: gitImage,
    link: "https://github.com/timcondev",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Convex",
  "C#",
  "Unity",
] as const;
