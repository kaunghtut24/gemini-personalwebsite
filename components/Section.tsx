import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="bg-white/50 dark:bg-slate-900/50 rounded-2xl p-6 md:p-8 ring-1 ring-slate-900/5 dark:ring-white/10 backdrop-blur-sm">
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{title}</h3>
      {children}
    </section>
  );
};

export default Section;
