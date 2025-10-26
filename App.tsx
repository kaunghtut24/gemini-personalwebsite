import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Video from './components/Video';
import Testimonials from './components/Testimonials';
import { MailIcon } from './components/IconComponents';
import { profile, socials, aboutMe, skills, workExperience, projects, galleryImages, videoUrl, cvUrl, contactEmail, testimonials } from './constants';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'dark'; // Default to dark
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 dark:bg-slate-950 dark:text-slate-300 transition-colors duration-300">
      <main className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
        <div className="space-y-20">
          <Header profile={profile} cvUrl={cvUrl} theme={theme} toggleTheme={toggleTheme} />
          <About aboutMe={aboutMe} />
          <Skills skills={skills} />
          <Experience experiences={workExperience} />
          <Projects projects={projects} />
          <Testimonials testimonials={testimonials} />
          <Gallery images={galleryImages} />
          <Video videoUrl={videoUrl} />
        </div>
      </main>
      <footer id="contact" className="text-center py-16 bg-white/50 dark:bg-slate-950/50 mt-20 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl px-4">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 bg-cyan-500 text-slate-950 font-bold py-3 px-6 rounded-lg hover:bg-cyan-400 transition-colors duration-300 shadow-lg hover:shadow-cyan-500/50"
            >
                <MailIcon className="w-5 h-5" />
                Say Hello
            </a>
            <div className="flex justify-center items-center space-x-6 mt-12">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to ${social.name}`}
                  className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-8 h-8" />
                </a>
              ))}
            </div>
             <p className="mt-12 text-sm text-slate-500">Built with React & Tailwind CSS. Design your digital presence.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
