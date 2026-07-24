'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Flame, Smartphone, Network, Figma, GitBranch, Code, Check, Copy, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const BentoGrid: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('all');

  const copyCodeSnippet = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const springHover = {
    whileHover: {
      y: -6,
      scale: 1.01,
      transition: { type: 'spring', stiffness: 400, damping: 25 },
    },
  };

  return (
    <section id="skills" className="py-24 bg-obsidian relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Apple-Style Bento Grid</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills, Architecture & <span className="text-gradient-emerald">Core Metrics</span>
          </h2>
          <p className="text-slate-muted text-sm sm:text-base">
            An overview of my mobile development ecosystem, code standards, clean architecture principles, and UI/UX design translation.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Tile 1: Flutter & Dart Dominance (Large 2x2 Bento Tile) */}
          <motion.div
            {...springHover}
            className="md:col-span-2 lg:col-span-2 glass-panel rounded-3xl p-8 border border-white/10 hover:border-cyan-500/40 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  Core Specialization
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Flutter & Dart Ecosystem</h3>
              <p className="text-slate-muted text-sm leading-relaxed mb-6">
                Writing scalable cross-platform mobile apps with 60 FPS UI performance, custom RenderObjects, and native platform channels (Swift / Kotlin).
              </p>
            </div>

            {/* Proficiency Bars inside Tile 1 */}
            <div className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">Flutter Engine & Custom Painter</span>
                  <span className="text-cyan-400 font-bold">95%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[95%]" />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">Clean Architecture & BLoC / Riverpod</span>
                  <span className="text-emerald-400 font-bold">92%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-[92%]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tile 2: Live Code Simulator Card (Large 2x2 Bento Tile) */}
          <motion.div
            {...springHover}
            className="md:col-span-1 lg:col-span-2 glass-panel rounded-3xl p-6 border border-white/10 hover:border-emerald-500/40 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">workout_bloc.dart</span>
              </div>
              <button
                onClick={copyCodeSnippet}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg glass-panel hover:bg-white/10 text-xs text-slate-300 border border-white/10 transition-all"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-mono">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="font-mono">Copy Snippet</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Block Container */}
            <div className="bg-obsidian-light p-4 rounded-2xl border border-white/5 font-mono text-xs text-slate-300 overflow-x-auto no-scrollbar max-h-56 leading-relaxed">
              <pre className="text-slate-300">
                <code>
                  {PORTFOLIO_DATA.codeSnippet}
                </code>
              </pre>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-4 font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> Zero Memory Leaks
              </span>
              <span>100% Type Safe</span>
            </div>
          </motion.div>

          {/* Tile 3: Firebase & Cloud Services */}
          <motion.div
            {...springHover}
            className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-amber-500/40 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Firebase & Serverless</h4>
              <p className="text-xs text-slate-muted leading-relaxed">
                Firestore DB, Auth, Push Notifications (FCM), & Cloud Functions setup.
              </p>
            </div>
            <div className="pt-4 font-mono text-xs text-amber-400 flex items-center gap-1">
              <span>Real-Time Sync</span>
            </div>
          </motion.div>

          {/* Tile 4: Networking & REST / GraphQL */}
          <motion.div
            {...springHover}
            className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-purple-500/40 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">REST APIs & Dio</h4>
              <p className="text-xs text-slate-muted leading-relaxed">
                Custom Dio Interceptors, JWT auto-refreshers, & WebSocket telemetry streams.
              </p>
            </div>
            <div className="pt-4 font-mono text-xs text-purple-400">
              <span>99.9% Uptime Ready</span>
            </div>
          </motion.div>

          {/* Tile 5: Figma to Code UX */}
          <motion.div
            {...springHover}
            className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-pink-500/40 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-4">
              <Figma className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Figma to Flutter UI</h4>
              <p className="text-xs text-slate-muted leading-relaxed">
                Pixel-perfect auto-layout translation, micro-interactions, and design tokens.
              </p>
            </div>
            <div className="pt-4 font-mono text-xs text-pink-400">
              <span>Pixel Perfect 1:1</span>
            </div>
          </motion.div>

          {/* Tile 6: CI/CD & Testing */}
          <motion.div
            {...springHover}
            className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-blue-500/40 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Fastlane CI/CD</h4>
              <p className="text-xs text-slate-muted leading-relaxed">
                Automated app builds, Play Store & App Store testflight distribution pipelines.
              </p>
            </div>
            <div className="pt-4 font-mono text-xs text-blue-400">
              <span>Automated Releases</span>
            </div>
          </motion.div>

        </div>

        {/* Skill Badges Quick Cloud */}
        <div className="mt-12 p-6 rounded-3xl glass-panel border border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-sm font-semibold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Complete Tech Stack Badges:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Flutter', 'Dart', 'Firebase', 'Riverpod', 'BLoC', 'Provider', 'SQLite', 'REST APIs', 'Figma', 'Fastlane', 'Git', 'Android Kotlin', 'iOS Swift Channel', 'Tailwind CSS'].map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
