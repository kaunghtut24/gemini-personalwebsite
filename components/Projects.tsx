import React from 'react';
import Section from './Section';
import { GithubIcon, ExternalLinkIcon } from './IconComponents';

interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-slate-800/50 rounded-lg overflow-hidden ring-1 ring-slate-900/5 dark:ring-slate-700 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{project.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="bg-cyan-100/50 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300 text-xs font-mono px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4 mt-auto">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  <GithubIcon className="w-5 h-5" /> Code
                </a>
                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  <ExternalLinkIcon className="w-5 h-5" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
