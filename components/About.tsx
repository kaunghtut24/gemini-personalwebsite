import React from 'react';
import Section from './Section';

interface AboutProps {
  aboutMe: string;
}

const About: React.FC<AboutProps> = ({ aboutMe }) => {
  return (
    <Section title="About Me">
      <div className="prose prose-lg dark:prose-invert prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed whitespace-pre-line max-w-none">
        {aboutMe}
      </div>
    </Section>
  );
};

export default About;
