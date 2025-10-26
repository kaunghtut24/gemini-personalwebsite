import React from 'react';
import { DownloadIcon, SunIcon, MoonIcon } from './IconComponents';

interface Profile {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
}

interface HeaderProps {
  profile: Profile;
  cvUrl: string;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ profile, cvUrl, theme, toggleTheme }) => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-8">
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img
            className="h-32 w-32 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105 ring-4 ring-slate-300 dark:ring-slate-700 ring-offset-4 ring-offset-slate-100 dark:ring-offset-slate-950"
            src={profile.avatarUrl}
            alt={`${profile.name}'s avatar`}
          />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-teal-600 dark:from-cyan-300 dark:to-teal-400">{profile.name}</h1>
          <h2 className="text-xl font-medium text-cyan-600 dark:text-cyan-400 mt-1">{profile.title}</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl">{profile.bio}</p>
        </div>
      </div>
       <div className="flex items-center gap-4">
        <a
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-slate-700 font-semibold py-2 px-4 rounded-lg hover:bg-slate-200 transition-colors duration-300 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-cyan-300 dark:hover:bg-slate-700 dark:ring-slate-700"
        >
          <DownloadIcon className="w-5 h-5" />
          Download CV
        </a>
        <button
          onClick={toggleTheme}
          className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 bg-white text-slate-600 rounded-full hover:bg-slate-200 transition-colors duration-300 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-cyan-300 dark:hover:bg-slate-700 dark:ring-slate-700"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <MoonIcon className="w-5 h-5" />
          ) : (
            <SunIcon className="w-5 h-5" />
          )}
        </button>
       </div>
    </header>
  );
};

export default Header;
