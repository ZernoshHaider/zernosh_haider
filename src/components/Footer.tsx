'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, timeZoneName: 'short' }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian border-t border-white/10 py-12 relative z-10 text-slate-muted text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-500 p-[1px] overflow-hidden">
              <img
                src="/zernoshlogo.png"
                alt="Zernosh Haider Logo"
                className="w-full h-full object-cover rounded-[7px]"
              />
            </div>
            <div>
              <span className="font-bold text-white text-sm">Zernosh Haider</span>
              <p className="text-[11px] text-slate-400">Mobile & Cross-Platform Engineer</p>
            </div>
          </div>

          {/* Time & Location Badge */}
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span className="px-3 py-1 rounded-full glass-panel border border-white/10 text-slate-300">
              📍 Pakistan • {time || 'UTC'}
            </span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-cyan-400 border border-white/10 transition-all group flex items-center gap-2"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Zernosh Haider. Built with Next.js, Tailwind CSS & Framer Motion.</p>
          <div className="flex items-center gap-4">
            <a href={PORTFOLIO_DATA.personal.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href={PORTFOLIO_DATA.personal.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${PORTFOLIO_DATA.personal.socials.email}`} className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
