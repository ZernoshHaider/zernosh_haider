'use client';

import React, { useState } from 'react';
import { FolderGit2, Search, Filter } from 'lucide-react';
import ProjectCard, { ProjectProps } from '@/components/ProjectCard';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const projects: ProjectProps[] = [
    {
      id: '1',
      title: 'Zernosh AI Studio',
      description: 'SaaS platform enabling automated AI workflow generation, voice synthesis, and multi-model API streaming.',
      tags: ['Next.js 14', 'TypeScript', 'Tailwind', 'AI API'],
      gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    },
    {
      id: '2',
      title: 'Nova Next Commerce',
      description: 'Ultra-fast server-rendered e-commerce platform built with Next.js App Router and dynamic cart state management.',
      tags: ['Next.js', 'React', 'Stripe', 'Full Stack'],
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    },
    {
      id: '3',
      title: 'Pulse Analytics Dashboard',
      description: 'Real-time data visualization dashboard with interactive charts, dark mode glassmorphism UI, and web sockets.',
      tags: ['Next.js', 'Recharts', 'TypeScript', 'Analytics'],
      gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    },
    {
      id: '4',
      title: 'TaskFlow Pro Workspace',
      description: 'Collaborative task management suite with drag-and-drop boards, team roles, and automated notifications.',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Full Stack'],
      gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    },
    {
      id: '5',
      title: 'CryptoPulse Realtime Tracker',
      description: 'Cryptocurrency market tracking application providing live market updates, price alerts, and news feeds.',
      tags: ['React', 'Next.js', 'WebSockets', 'Tailwind'],
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    },
    {
      id: '6',
      title: 'Zernosh Portfolio Template',
      description: 'Open-source premium portfolio template for Next.js developers featuring rich glassmorphism UI.',
      tags: ['Next.js 14', 'CSS Modules', 'TypeScript', 'Open Source'],
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    },
  ];

  const categories = ['All', 'Next.js 14', 'Full Stack', 'TypeScript', 'React'];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All' || p.tags.includes(selectedCategory);
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container" style={{ padding: '40px 24px 80px' }}>
      {/* Header */}
      <div className="section-header">
        <span className="badge">
          <FolderGit2 size={14} /> Showcase
        </span>
        <h1 className="section-title">
          Projects by <span className="text-gradient">Zernosh Haider</span>
        </h1>
        <p className="section-subtitle">
          Explore the full repository of Next.js web applications, client solutions, and experimental projects.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '50px',
          background: 'rgba(255, 255, 255, 0.02)',
          padding: '16px 24px',
          borderRadius: '16px',
          border: '1px solid var(--border-color)',
        }}
      >
        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: selectedCategory === cat ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
                background: selectedCategory === cat ? 'var(--gradient-subtle)' : 'transparent',
                color: selectedCategory === cat ? '#fff' : 'var(--text-secondary)',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
          <Search
            size={18}
            style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)',
            }}
          />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            id="input-search-projects"
            style={{
              width: '100%',
              padding: '10px 14px 10px 42px',
              borderRadius: '9999px',
              background: 'rgba(0, 0, 0, 0.2)',
              border: '1px solid var(--border-color)',
              color: '#fff',
              outline: 'none',
              fontSize: '0.9rem',
            }}
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div
          className="glass-panel"
          style={{ padding: '60px', textAlign: 'center', color: 'var(--text-secondary)' }}
        >
          <Filter size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
          <h3>No projects matched your criteria</h3>
          <p style={{ marginTop: '8px', fontSize: '0.9rem' }}>
            Try adjusting your search query or switching to another category.
          </p>
        </div>
      )}
    </div>
  );
}
