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
        After graduating with as a{' '}
        <span className="font-medium">Computer Programmer Analyst</span>, I
        worked in tech for years but wasn&apos;t coding day to day. Throughout
        the year I often spent my free time working on WebDev and Gaming
        projects. The pandemic gave me that extra amount of free time which I
        used to rededicate myself to software development. Since then I have
        been coding daily, using all of my free time to develop those skills. I
        have put a strong focus on{' '}
        <span className="font-medium">full-stack web development.</span>
        <span className="font-medium"> My favorite part of coding</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core web
        stack is{' '}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB.
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching tv shows, and spending time with my
        family. I also enjoy{' '}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{' '}
        <span className="font-medium">history and philosophy</span>. I&apos;m
        also learning how to play the guitar.
      </p>
    </motion.section>
  );
}
