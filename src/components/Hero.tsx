'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Github, Linkedin, Mail, Download, ArrowRight, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-obsidian bg-grid-pattern">
      {/* Dynamic Animated Ambient Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-500/30 to-blue-600/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/25 to-teal-500/20 rounded-full blur-[130px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <div className="glass-panel px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center gap-2.5 shadow-neon-emerald">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-emerald-300 tracking-wide">
                🟢 Available for Work / Freelance
              </span>
            </div>
          </motion.div>

          {/* Staggered Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Building High-Performance <br className="hidden sm:block" />
            <span className="text-gradient-cyan">Mobile & Cross-Platform</span> Apps
          </motion.h1>

          {/* Subtitle / Focus */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-muted mb-8 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Hi, I&apos;m <span className="text-white font-semibold">{PORTFOLIO_DATA.personal.name}</span>. I craft sleek, 60 FPS Flutter applications with clean BLoC/Riverpod architecture and Apple-grade micro-interactions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {/* Download Resume with Shimmer */}
            <button
              onClick={onOpenResume}
              className="relative group overflow-hidden px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-teal-400 text-obsidian font-bold text-sm tracking-wide shadow-neon-cyan transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center gap-2.5"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download Resume</span>
            </button>

            {/* Contact Me CTA */}
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full glass-panel hover:bg-white/10 text-white font-semibold text-sm transition-all duration-300 hover:border-cyan-500/40 hover:scale-[1.02] flex items-center gap-2 border border-white/15"
            >
              <span>Let&apos;s Connect</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Social Badges */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-16">
            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl glass-panel hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-muted transition-all duration-300 group"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl glass-panel hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-muted transition-all duration-300 group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.socials.email}`}
              className="p-3 rounded-xl glass-panel hover:bg-white/10 hover:border-emerald-500/50 hover:text-emerald-400 text-slate-muted transition-all duration-300 group"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl glass-panel border border-white/10"
          >
            {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
              <div key={idx} className="p-3 text-center border-r border-white/5 last:border-none">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono mb-1">
                  <span className="text-gradient-cyan">{stat.value}</span>
                </div>
                <div className="text-xs text-slate-muted font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
