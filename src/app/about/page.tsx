import React from 'react';
import { User, Award, CheckCircle, Code2, Terminal, Briefcase, GraduationCap } from 'lucide-react';
import SkillBadge from '@/components/SkillBadge';

export default function AboutPage() {
  const experiences = [
    {
      role: 'Senior Next.js Developer',
      company: 'Tech Solutions Studio',
      period: '2023 - Present',
      description:
        'Architected modern web applications using Next.js App Router, improved page speed score by 45%, and spearheaded state management with TypeScript.',
    },
    {
      role: 'Full-Stack React Developer',
      company: 'Digital Innovators',
      period: '2021 - 2023',
      description:
        'Developed scalable RESTful APIs and interactive frontend dashboards for enterprise web clients.',
    },
    {
      role: 'Frontend Web Developer',
      company: 'Creative Web Lab',
      period: '2020 - 2021',
      description:
        'Built responsive web interfaces and user components using modern JavaScript and CSS design systems.',
    },
  ];

  return (
    <div className="container" style={{ padding: '40px 24px 80px' }}>
      {/* Header */}
      <div className="section-header">
        <span className="badge">
          <User size={14} /> About Me
        </span>
        <h1 className="section-title">
          About <span className="text-gradient">Zernosh Haider</span>
        </h1>
        <p className="section-subtitle">
          Passionate Web Developer focused on building clean, high-performance, user-centric web applications.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '80px' }}>
        {/* Bio Card */}
        <div className="glass-panel" style={{ padding: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'var(--gradient-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '1.5rem',
                fontWeight: 800,
              }}
            >
              ZH
            </div>
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Zernosh Haider</h2>
              <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>
                Next.js & Full-Stack Developer
              </p>
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '20px' }}>
            Hello! I am Zernosh Haider, a web developer dedicated to building fast, responsive, and visually stunning web applications. I specialize in Next.js, React, TypeScript, and modern JavaScript frameworks.
          </p>

          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '28px' }}>
            My approach combines technical precision with eye-catching design aesthetics—ensuring every project not only functions seamlessly but also wows users visually.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              'Clean Code Architecture',
              'Responsive Design',
              'SEO & Web Vitals',
              'Modern UI/UX Design',
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem' }}>
                <CheckCircle size={16} style={{ color: 'var(--accent-secondary)' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats & Highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="glass-panel" style={{ padding: '28px', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                background: 'var(--gradient-subtle)',
                border: '1px solid var(--border-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
              }}
            >
              <Code2 size={26} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>20+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Projects Completed Successfully</p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '28px', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                background: 'var(--gradient-subtle)',
                border: '1px solid var(--border-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-secondary)',
              }}
            >
              <Award size={26} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>100%</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Client Satisfaction & Quality Focus</p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '28px', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                background: 'var(--gradient-subtle)',
                border: '1px solid var(--border-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-tertiary)',
              }}
            >
              <Terminal size={26} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>Next.js 14</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>App Router & Server Actions Specialist</p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div style={{ marginTop: '60px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '40px', textAlign: 'center' }}>
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
          {experiences.map((exp, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>{exp.role}</h3>
                  <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>{exp.company}</p>
                </div>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {exp.period}
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
