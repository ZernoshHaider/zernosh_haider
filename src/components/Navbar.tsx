'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Mail, Download, Sparkles, Check, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-obsidian/80 backdrop-blur-xl border-b border-white/10 shadow-glass'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-500 p-[1px] shadow-neon-cyan transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-obsidian rounded-[11px] flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <div className="font-bold text-white tracking-wide text-base flex items-center gap-2">
              Zernosh Haider
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Flutter Dev
              </span>
            </div>
            <p className="text-[11px] text-slate-muted hidden sm:block">Mobile & Cross-Platform</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full">
          <a href="#about" className="px-3 py-1.5 text-xs text-slate-muted hover:text-white hover:bg-white/5 rounded-full transition-all">
            About
          </a>
          <a href="#projects" className="px-3 py-1.5 text-xs text-slate-muted hover:text-white hover:bg-white/5 rounded-full transition-all">
            Projects
          </a>
          <a href="#skills" className="px-3 py-1.5 text-xs text-slate-muted hover:text-white hover:bg-white/5 rounded-full transition-all">
            Skills & Architecture
          </a>
          <a href="#contact" className="px-3 py-1.5 text-xs text-slate-muted hover:text-white hover:bg-white/5 rounded-full transition-all">
            Contact
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Email Copy Chip */}
          <button
            onClick={copyEmail}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel hover:bg-white/10 text-xs text-slate-muted hover:text-white transition-all border border-white/10"
            title="Copy Email Address"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span className="truncate max-w-[140px]">{PORTFOLIO_DATA.personal.socials.email}</span>
                <Copy className="w-3 h-3 text-slate-500" />
              </>
            )}
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="relative group overflow-hidden px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-obsidian font-semibold text-xs transition-all duration-300 hover:shadow-neon-cyan hover:scale-[1.02] active:scale-95 flex items-center gap-2"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Resume</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
};
