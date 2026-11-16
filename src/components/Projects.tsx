'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Smartphone, CheckCircle2, ChevronRight, Layers, Sparkles, Activity, ShieldCheck, Flame, Building2, Apple, Store, FileCheck, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import { ExperienceLetterModal } from '@/components/ExperienceLetterModal';

// Phone Frame 3D Tilt Card Component
const PhoneMockupCard: React.FC<{ project: Project }> = ({ project }) => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const activeScreen = project.screens[activeScreenIndex] || project.screens[0];

  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="glass-panel rounded-3xl p-6 md:p-8 transition-all duration-300 border border-white/10 hover:border-cyan-500/30 group relative overflow-hidden flex flex-col lg:flex-row gap-8 items-center"
    >
      {/* Subtle Background Glow Accent */}
      <div className={`absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-[100px] bg-gradient-to-br ${project.phoneColor} pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Left: Project Details & Information */}
      <div className="flex-1 z-10 space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {project.category.toUpperCase()}
          </span>
          <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            {project.metrics}
          </span>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-slate-400 mb-3">{project.subtitle}</p>
          <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">{project.description}</p>
        </div>

        {/* Key App Features */}
        <div className="space-y-2 pt-1">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Key Architectural Highlights</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-3">
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-obsidian text-xs font-bold transition-all hover:shadow-neon-cyan hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View on Play Store</span>
          </a>
        </div>
      </div>

      {/* Right: Phone Mockup - Real Screenshot or Interactive Mock */}
      <div className="z-10 flex flex-col items-center gap-4 shrink-0" style={{ transform: 'translateZ(30px)' }}>
        {/* Screen Switcher Tabs (If multiple screens and no real screenshot) */}
        {!project.screenshot && project.screens.length > 1 && (
          <div className="flex items-center gap-1.5 p-1 rounded-full glass-panel border border-white/10 text-xs">
            {project.screens.map((scr, idx) => (
              <button
                key={scr.id}
                onClick={() => setActiveScreenIndex(idx)}
                className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all ${
                  activeScreenIndex === idx
                    ? 'bg-cyan-500 text-obsidian font-bold shadow-neon-cyan'
                    : 'text-slate-muted hover:text-white'
                }`}
              >
                {scr.badge}
              </button>
            ))}
          </div>
        )}

        {/* iPhone / Android Dynamic Bezel Frame */}
        <div className="relative w-[260px] h-[520px] rounded-[48px] bg-slate-950 p-3 shadow-2xl border-4 border-slate-800 ring-1 ring-white/20 overflow-hidden group-hover:shadow-neon-cyan transition-shadow duration-500">
          {/* Dynamic Island / Camera Notch */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
          </div>

          {/* Volume / Side Hardware Buttons simulation */}
          <div className="absolute -left-4 top-24 w-1 h-8 bg-slate-700 rounded-l-md" />
          <div className="absolute -left-4 top-36 w-1 h-8 bg-slate-700 rounded-l-md" />
          <div className="absolute -right-4 top-28 w-1 h-12 bg-slate-700 rounded-r-md" />

          {project.screenshot ? (
            /* Real App Screenshot */
            <div className="w-full h-full rounded-[38px] overflow-hidden relative">
              <img
                src={project.screenshot}
                alt={`${project.title} Screenshot`}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            /* Inner Display Content (Interactive Flutter Screen Simulation) */
            <div className="w-full h-full rounded-[38px] bg-obsidian-light p-4 pt-10 flex flex-col justify-between overflow-hidden relative border border-white/5">
              {/* Status Bar */}
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono px-2 mb-2">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <div className="w-3.5 h-2 rounded-sm border border-slate-400 p-[0.5px]">
                    <div className="w-full h-full bg-emerald-400 rounded-px" />
                  </div>
                </div>
              </div>

              {/* Live Interactive App Screen Content */}
              <motion.div
                key={activeScreen.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col justify-between space-y-3"
              >
                {/* Screen Header */}
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide">
                      {activeScreen.badge}
                    </span>
                    <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-lg font-bold text-white font-mono">{activeScreen.mockContent.statValue}</div>
                  <div className="text-[10px] text-slate-400">{activeScreen.mockContent.statLabel}</div>
                </div>

                {/* Data Items List inside Mock Phone */}
                <div className="space-y-2 flex-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider px-1">
                    Active Telemetry Feed
                  </div>
                  {activeScreen.mockContent.items.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-semibold text-slate-200">{item.name}</div>
                        {item.status && <div className="text-[9px] text-emerald-400">{item.status}</div>}
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] font-mono font-bold text-white">{item.value}</div>
                        {item.trend && <div className="text-[9px] text-cyan-400 font-mono">{item.trend}</div>}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Nav Simulation inside Phone */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-around text-slate-400">
                  <div className="p-1 text-cyan-400"><Smartphone className="w-4 h-4" /></div>
                  <div className="p-1"><Activity className="w-4 h-4" /></div>
                  <div className="p-1"><Layers className="w-4 h-4" /></div>
                </div>
              </motion.div>

              {/* Home Indicator Bar */}
              <div className="w-24 h-1 bg-white/30 rounded-full mx-auto mt-2" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const projects = PORTFOLIO_DATA.projects;

  return (
    <section id="projects" className="py-24 bg-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile App Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Flutter & Cross-Platform</span> Projects
          </h2>
          <p className="text-slate-muted text-sm sm:text-base">
            Real-world app crafted with pixel-perfect UI fidelity, published on Google Play Store. Hover over the frame for 3D tilt effects.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="space-y-12">
          {projects.map((project) => (
            <PhoneMockupCard key={project.id} project={project} />
          ))}
        </div>

        {/* Commercial & Enterprise Portfolio: The Tuitionist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass-panel rounded-3xl p-8 md:p-10 border border-white/10 hover:border-emerald-500/40 relative overflow-hidden group"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-700" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-8">
            {/* Header with badges & store buttons */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Commercial & Enterprise Production Portfolio</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white flex flex-wrap items-center gap-3">
                  The Tuitionist
                  <span className="text-sm font-mono font-medium px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    {PORTFOLIO_DATA.companyExperience.experienceYears}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 font-mono">
                  Role: {PORTFOLIO_DATA.companyExperience.role} • Location: {PORTFOLIO_DATA.companyExperience.location}
                </p>
              </div>

              {/* Action Buttons for Company Stores & Experience Letter */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsLetterOpen(true)}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-emerald-400 to-teal-400 text-obsidian text-xs font-bold transition-all shadow-neon-cyan hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <FileCheck className="w-4 h-4 stroke-[2.5]" />
                  <span>View Experience Letter</span>
                  <Eye className="w-3.5 h-3.5" />
                </button>

                <a
                  href={PORTFOLIO_DATA.companyExperience.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-2xl glass-panel hover:bg-white/10 text-white text-xs font-bold border border-white/20 transition-all hover:border-emerald-400/50 hover:scale-105 active:scale-95"
                >
                  <Store className="w-4 h-4 text-emerald-400" />
                  <span>The Tuitionist on Play Store</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={PORTFOLIO_DATA.companyExperience.appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-2xl glass-panel hover:bg-white/10 text-white text-xs font-bold border border-white/20 transition-all hover:border-cyan-400/50 hover:scale-105 active:scale-95"
                >
                  <Apple className="w-4 h-4 text-cyan-300" />
                  <span>The Tuitionist on App Store</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
              During my <strong>2+ years</strong> as a Flutter Developer at <strong>The Tuitionist</strong>, I engineered, shipped, and scaled multiple high-performance commercial and utility mobile applications. I spearheaded core architectural design, clean state management, real-time backend synchronization (Firebase / REST APIs), and end-to-end Google Play Store & Apple App Store deployment pipelines.
            </p>

            {/* Apps Grid */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Production Mobile Apps Built at The Tuitionist:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-1">
                {PORTFOLIO_DATA.companyExperience.apps.map((app, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col justify-between group/card"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-white text-base group-hover/card:text-emerald-400 transition-colors">
                          {app.name}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      </div>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-2">
                        {app.tag}
                      </span>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Store Inspection Note */}
            <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Store className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  All featured applications are live, actively maintained, and globally accessible across the Google Play Store and Apple App Store.
                </span>
              </div>
              <div className="flex items-center gap-3 text-cyan-400 font-mono text-[11px]">
                <span>Verified 2+ Years Production Experience</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Experience Letter Interactive Modal */}
      <ExperienceLetterModal isOpen={isLetterOpen} onClose={() => setIsLetterOpen(false)} />
    </section>
  );
};
