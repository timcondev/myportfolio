'use client';
import SectionHeader from '@/components/section-header';
import React from 'react';
import { projectsData } from '@/lib/data';
import Project from './Project';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeader> My projects</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
