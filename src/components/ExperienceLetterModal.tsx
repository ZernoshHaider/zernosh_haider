'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileCheck, Building2, CheckCircle2 } from 'lucide-react';

interface ExperienceLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExperienceLetterModal: React.FC<ExperienceLetterModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-2xl glass-panel rounded-3xl p-5 sm:p-7 border border-white/15 bg-obsidian/95 shadow-2xl z-10 space-y-4 max-h-[92vh] flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    Experience Letter
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Verified
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">The Tuitionist (SMC-Private) Limited • 2024 – 2026</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl glass-panel hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Letter Preview Body */}
            <div className="flex-1 overflow-y-auto rounded-2xl bg-slate-950 p-2 sm:p-3 border border-white/10 flex items-center justify-center max-h-[62vh]">
              <img
                src="/experience-letter.jpg"
                alt="The Tuitionist Official Experience Letter - Zernosh Haider"
                className="w-full h-auto max-h-[60vh] object-contain rounded-xl shadow-lg border border-white/5"
              />
            </div>

            {/* Footer with Info & Action Buttons */}
            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Tenure: 1st Aug 2024 – 1st Aug 2026 (Flutter Developer)</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href="/The_Tuitionist_Experience_Letter.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl glass-panel hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 transition-all font-semibold flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Open Full PDF</span>
                </a>

                <a
                  href="/The_Tuitionist_Experience_Letter.pdf"
                  download="Zernosh_Haider_The_Tuitionist_Experience_Letter.pdf"
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-obsidian font-bold transition-all shadow-neon-cyan hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
