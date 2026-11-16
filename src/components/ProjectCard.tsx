import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  demoUrl?: string;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div
      className="glass-panel"
      style={{
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      {/* Decorative Accent Background */}
      <div
        style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: project.gradient,
          opacity: 0.15,
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      <div>
        {/* Header Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--accent-secondary)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', color: '#fff' }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '24px' }}>
          {project.description}
        </p>
      </div>

      {/* Footer Links */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '16px',
          borderTop: '1px solid var(--border-color)',
        }}
      >
        <a
          href={project.demoUrl || '#'}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.88rem',
            fontWeight: 600,
            color: 'var(--accent-primary)',
            transition: 'gap 0.2s ease',
          }}
        >
          Live Demo <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
