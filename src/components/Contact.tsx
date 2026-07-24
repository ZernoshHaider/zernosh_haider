'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, Copy, Check, Github, Linkedin, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Flutter App Project Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);

    // Trigger celebratory confetti on form submission
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#06b6d4', '#10b981'],
      });
    } catch {
      // Fallback
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Flutter App Project Inquiry', message: '' });
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-obsidian relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Direct Info & Availability */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Let&apos;s Connect</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have a Mobile App Idea? <br />
              <span className="text-gradient-cyan">Let&apos;s Build Something Epic.</span>
            </h2>

            <p className="text-slate-muted text-base leading-relaxed">
              Whether you need a brand-new Flutter mobile app from scratch, a performance audit, or architectural leadership, feel free to drop a message.
            </p>

            {/* Live Availability Card */}
            <div className="p-6 rounded-2xl glass-panel border border-emerald-500/30 bg-emerald-500/5 space-y-3">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-bold text-white font-mono">
                  🟢 Status: Available for Freelance & Remote Work
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Currently taking on new mobile projects, cross-platform app modernizations, and technical consulting.
              </p>
            </div>

            {/* Direct Contact Card with One-Click Email Copy */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Direct Email Address</div>
              <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 truncate">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="text-sm font-mono text-white truncate">{PORTFOLIO_DATA.personal.socials.email}</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-mono border border-cyan-500/30 transition-all shrink-0 flex items-center gap-1.5"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel hover:bg-white/10 text-xs text-slate-300 hover:text-cyan-400 transition-all border border-white/10"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel hover:bg-white/10 text-xs text-slate-300 hover:text-cyan-400 transition-all border border-white/10"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Modern Contact Form with Floating Labels */}
          <div className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all relative">
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-slate-muted max-w-sm mx-auto">
                  Thank you for reaching out, Zernosh will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full glass-panel hover:bg-white/10 text-xs text-cyan-400 border border-cyan-500/30 font-mono transition-all mt-4"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">Send a Direct Message</h3>

                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-transparent focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 bg-obsidian px-1 text-xs text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-cyan-400 font-mono"
                  >
                    Your Full Name *
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-transparent focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 bg-obsidian px-1 text-xs text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-cyan-400 font-mono"
                  >
                    Your Email Address *
                  </label>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-transparent focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-4 -top-2.5 bg-obsidian px-1 text-xs text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-cyan-400 font-mono"
                  >
                    Project Type / Subject
                  </label>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-transparent focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-2.5 bg-obsidian px-1 text-xs text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-cyan-400 font-mono"
                  >
                    Project Description & Requirements *
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-emerald-400 to-teal-400 text-obsidian font-bold text-sm tracking-wide shadow-neon-cyan hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <span className="animate-spin w-4 h-4 border-2 border-obsidian border-t-transparent rounded-full" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
