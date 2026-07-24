'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Award, Briefcase, GraduationCap, Sparkles, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'experience' | 'skills'>('overview');

  const handleDownload = () => {
    setDownloading(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#10b981', '#ffffff'],
      });
    } catch {
      // Fallback if confetti script isn't loaded
    }

    // Simulate instant generation and download trigger
    setTimeout(() => {
      const element = document.createElement('a');
      const file = new Blob([
        `ZERNOSH HAIDER - MOBILE & CROSS-PLATFORM DEVELOPER\n
Email: ${PORTFOLIO_DATA.personal.socials.email}
Location: ${PORTFOLIO_DATA.personal.location}
GitHub: ${PORTFOLIO_DATA.personal.socials.github}
LinkedIn: ${PORTFOLIO_DATA.personal.socials.linkedin}\n
SUMMARY:
${PORTFOLIO_DATA.personal.bio}\n
CORE SKILLS:
- Mobile Development: Flutter, Dart, Android Kotlin (Platform Channel), iOS Swift Channel
- State Management: BLoC Pattern, Riverpod 2.0, Provider, Clean Architecture
- Backend & Databases: Firebase (Firestore, Auth, Cloud Functions, FCM), SQLite, Hive
- Networking: REST APIs, Dio Interceptors, WebSockets, GraphQL
- Tools & DevOps: Git, Fastlane CI/CD, Figma, Agile Methodology\n
FEATURED PROJECTS:
${PORTFOLIO_DATA.projects.map(p => `- ${p.title} (${p.subtitle}): ${p.description}`).join('\n')}
`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'Zernosh_Haider_Flutter_Developer_Resume.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      setDownloading(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 bg-obsidian/95 shadow-2xl z-10 space-y-6 max-h-[90vh] flex flex-col justify-between"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {PORTFOLIO_DATA.personal.name}
                    <span className="text-xs font-mono text-cyan-400 font-normal">CV / Resume</span>
                  </h3>
                  <p className="text-xs text-slate-muted">{PORTFOLIO_DATA.personal.title}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl glass-panel hover:bg-white/10 text-slate-400 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Tab Switcher */}
            <div className="flex items-center gap-2 border-b border-white/5 pb-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTab === 'overview'
                    ? 'bg-cyan-500 text-obsidian font-bold shadow-neon-cyan'
                    : 'text-slate-muted hover:text-white'
                }`}
              >
                Overview & Summary
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTab === 'experience'
                    ? 'bg-cyan-500 text-obsidian font-bold shadow-neon-cyan'
                    : 'text-slate-muted hover:text-white'
                }`}
              >
                Experience & Roles
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTab === 'skills'
                    ? 'bg-cyan-500 text-obsidian font-bold shadow-neon-cyan'
                    : 'text-slate-muted hover:text-white'
                }`}
              >
                Tech Stack Matrix
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 text-sm no-scrollbar">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                    <div className="text-xs font-mono text-cyan-400 uppercase">Professional Profile</div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {PORTFOLIO_DATA.personal.bio}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-xs text-slate-400">Location & Mobility</div>
                      <div className="text-xs font-bold text-white mt-1">{PORTFOLIO_DATA.personal.location}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-xs text-slate-400">Contact Email</div>
                      <div className="text-xs font-bold text-cyan-400 mt-1 truncate">{PORTFOLIO_DATA.personal.socials.email}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-mono text-slate-400 uppercase">Top Featured Mobile Projects</div>
                    {PORTFOLIO_DATA.projects.map((p) => (
                      <div key={p.id} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-white text-xs">{p.title}</div>
                          <div className="text-[11px] text-slate-muted">{p.subtitle}</div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400">{p.metrics}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-4">
                  {PORTFOLIO_DATA.experience.map((exp, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-white text-sm flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-cyan-400" />
                          {exp.role}
                        </div>
                        <span className="text-xs font-mono text-cyan-400">{exp.period}</span>
                      </div>
                      <div className="text-xs text-slate-400 font-mono">{exp.company}</div>
                      <p className="text-xs text-slate-300">{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PORTFOLIO_DATA.skills.map((skill) => (
                    <div key={skill.id} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold text-white">
                        <span>{skill.title}</span>
                        <span className="text-cyan-400 font-mono">{skill.level}%</span>
                      </div>
                      <p className="text-[11px] text-slate-400">{skill.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono hidden sm:block">
                PDF Ready • Verified Credentials
              </span>
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-obsidian font-bold text-xs shadow-neon-cyan hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                {downloading ? (
                  <>
                    <span className="animate-spin w-4 h-4 border-2 border-obsidian border-t-transparent rounded-full" />
                    <span>Generating PDF...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 stroke-[2.5]" />
                    <span>Download Full Resume</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
