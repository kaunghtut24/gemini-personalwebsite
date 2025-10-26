import React from 'react';
import Section from './Section';

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

interface ExperienceProps {
  experiences: Experience[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <Section title="Work Experience">
      <div className="relative border-l-2 border-slate-300 dark:border-slate-700 pl-8 space-y-12">
        <div className="absolute w-3 h-3 bg-cyan-500 dark:bg-cyan-400 rounded-full -left-1.5 top-1 ring-8 ring-slate-100 dark:ring-slate-900"></div>
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
             <div className="absolute w-3 h-3 bg-cyan-500 dark:bg-cyan-400 rounded-full -left-[37px] top-1 ring-8 ring-slate-100 dark:ring-slate-900"></div>
            <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">{exp.duration}</p>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-1">{exp.role}</h4>
            <p className="text-md text-slate-500 dark:text-slate-400 mb-2">{exp.company}</p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
