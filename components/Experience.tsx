'use client';
import SectionHeader from '@/components/section-header';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { experiencesData } from '@/lib/data';
import React, { Fragment } from 'react';
import { useSectionInView } from '@/lib/hooks';

import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '@/context/theme-context';
export const Experience = () => {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();
  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 mt-4"
    >
      <SectionHeader>My Experience</SectionHeader>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(255,255,255, 0.05',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0,0.5)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255,255,255, 0.5',
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background:
                  theme === 'light' ? 'white' : 'rgba(255,255,255,0.15',
                fontSize: '1.5rem',
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};
