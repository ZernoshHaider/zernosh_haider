'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { BentoGrid } from '@/components/BentoGrid';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ResumeModal } from '@/components/ResumeModal';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="min-h-screen bg-obsidian text-white relative selection:bg-cyan-500/30 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenResume={() => setIsResumeOpen(true)} />

      {/* Featured Projects Showcase (3D Phone Mockups) */}
      <Projects />

      {/* Bento Grid Skills & Metrics */}
      <BentoGrid />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </main>
  );
}
