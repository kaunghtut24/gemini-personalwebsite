import React from 'react';
import Section from './Section';

interface SkillsProps {
  skills: { [category: string]: string[] };
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section title="Skills">
      <div className="space-y-6">
        {/* Fix: Use Object.keys to iterate over skills. This helps TypeScript correctly infer the type of skills[category] as string[], resolving the error where `skillList` from Object.entries was inferred as 'unknown'. */}
        {Object.keys(skills).map((category) => (
          <div key={category}>
            <h4 className="font-bold text-xl text-cyan-600 dark:text-cyan-400 mb-3">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {skills[category].map((skill) => (
                <span key={skill} className="bg-slate-200 text-slate-700 text-sm font-medium px-3 py-1 rounded-full ring-1 ring-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
