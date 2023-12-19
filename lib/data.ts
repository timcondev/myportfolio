import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated Computer Programmer Analyst',
    location: 'Peterborough, ON',
    description:
      'I graduated as a Computer Programmer Analyst after completing a three program.',
    icon: React.createElement(LuGraduationCap),
    date: '2000-2003',
  },
  {
    title: 'Technical Support Representative',
    location: 'Peterborough, ON',
    description:
      'I worked as a support representative support Apple Products, such as computers, iPods, routers, etc.',
    icon: React.createElement(CgWorkAlt),
    date: '2005',
  },
  {
    title: 'Performance Coach',
    location: 'Peterborough, ON',
    description:
      'I developed and presented coaching plans for Technical Support Advisors based on metric standards provided by the client.',
    icon: React.createElement(FaReact),
    date: '2006 - 2010',
  },
  {
    title: 'Quality Evaluator',
    location: 'Peterborough, ON',
    description:
      'I listened to, and evaluated advisors, in real time. I created SMART goals to coach advisors on both technical and soft skills. Including the MacOs, iOS and Windows environments.',
    icon: React.createElement(FaReact),
    date: '2010 - 2016',
  },
  {
    title: 'Senior Quality Evaluator',
    location: 'Peterborough, ON',
    description:
      'I now worked with senior advisors who were the final authority, which required know of almost all products within the Apple Environment. I helped create tools and processes to further enhance both advisor and quality workflows.',
    icon: React.createElement(FaReact),
    date: '2016 - 2023',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'Framer Motion',
] as const;
