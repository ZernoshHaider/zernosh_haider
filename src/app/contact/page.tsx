'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="container" style={{ padding: '40px 24px 80px' }}>
      {/* Header */}
      <div className="section-header">
        <span className="badge">
          <Mail size={14} /> Contact
        </span>
        <h1 className="section-title">
          Get in Touch with <span className="text-gradient">Zernosh Haider</span>
        </h1>
        <p className="section-subtitle">
          Have a project idea, question, or collaboration proposal? Send a message and let us build something great.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
        {/* Contact Info */}
        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '20px' }}>Let&apos;s Connect</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '36px' }}>
            I am always open to discussing new web development projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { icon: Mail, title: 'Email Me', value: 'zernosh.haider@example.com' },
              { icon: Phone, title: 'Phone / WhatsApp', value: '+92 300 1234567' },
              { icon: MapPin, title: 'Location', value: 'Pakistan (Available Globally for Remote Work)' },
            ].map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="glass-panel" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'var(--gradient-subtle)',
                      border: '1px solid var(--border-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-secondary)',
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>{info.title}</h4>
                    <p style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>{info.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Panel */}
        <div className="glass-panel" style={{ padding: '36px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--gradient-subtle)',
                  border: '1px solid var(--accent-secondary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-secondary)',
                  marginBottom: '20px',
                }}
              >
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px' }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
                Thank you for reaching out, {formData.name}. Zernosh Haider will respond to your message shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="btn btn-secondary"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '4px' }}>Send a Message</h3>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ali Ahmed"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  id="input-contact-name"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.95rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  id="input-contact-email"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.95rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry / Next.js Development"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  id="input-contact-subject"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.95rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project requirements or goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  id="input-contact-message"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.95rem',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary" id="btn-submit-contact" style={{ width: '100%', marginTop: '10px' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
