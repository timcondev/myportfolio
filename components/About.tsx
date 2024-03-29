'use client';

import SectionHeader from '@/components/section-header';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3 2xl:mb-8">
        Since graduating as a{' '}
        <span className="font-medium">Computer Programmer Analyst</span>, I have
        worked in the tech field for the last 18 years. While my day to day job
        was not coding, throughout the years I have spent a considerable amount
        of my free time working on WebDev, App and Gaming projects. The pandemic
        gave me an extra amount of free time which I used to rededicate myself
        to software development. Since then I have been coding daily, using all
        of my free time to develop those skills. I have put a strong focus on{' '}
        <span className="font-medium">full-stack web development. </span>
        My <span className="font-medium"> favorite</span> part of coding is the
        <span className="font-medium"> problem-solving aspect. </span>I{' '}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core web stack is
        <span className="font-medium">
          {' '}
          React, Next.js, Node.js, and MongoDB.{' '}
        </span>
        I&apos;ve used many different technologies during my journey, such as
        ORMS (Drizzle/Prisma), auth solutions (nextAuth, Clerk), Stripe,
        TypeScript and many others. Having spent the last 17 years learning new
        technologies for myself, and to coach others, I take pride in learning
        new technologies/skills. I am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="">When not coding</span>, I enjoy playing video games,
        reading, and spending time with my family. A good day usually includes a
        RPG, a book by Brandon Sanderson or family board game night.
      </p>
    </motion.section>
  );
}
