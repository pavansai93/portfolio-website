import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Server, 
  Sparkles, 
  ShieldCheck, 
  GitBranch, 
  Activity, 
  Layers 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const exp = portfolioData.experience[0]; // TCS UIDAI

  const filters = [
    { id: 'all', label: 'All Highlights' },
    { id: 'scale', label: 'High Scale (50M+)' },
    { id: 'distributed', label: 'Kafka & Microservices' },
    { id: 'latency', label: 'Low Latency & Caching' },
    { id: 'quality', label: 'Testing & DevOps' },
  ];

  const filterHighlight = (item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'scale') return item.badge === 'Scale Highlight';
    if (activeFilter === 'distributed') return item.badge === 'Architecture';
    if (activeFilter === 'latency') return item.badge === 'Latency Win' || item.badge === 'Optimization';
    if (activeFilter === 'quality') return item.badge === 'Quality' || item.badge === 'Reliability' || item.badge === 'Modernization';
    return true;
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Briefcase size={14} />
            Professional Experience
          </span>
          <h2 className="section-title">Production Engineering Impact</h2>
          <p className="section-desc">
            1.5+ years of building and scaling mission-critical distributed systems for the UIDAI (Aadhaar) identity platform at Tata Consultancy Services.
          </p>
        </div>

        {/* Company Card Header */}
        <div
          className="glass-card"
          style={{
            padding: '36px',
            marginBottom: '36px',
            border: '1px solid var(--border-highlight)',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '20px',
              marginBottom: '20px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>
                  {exp.company}
                </h3>
                <span className="badge badge-emerald">Full-time</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-secondary)', fontSize: '1.1rem', fontWeight: 600 }}>
                <span>{exp.role}</span>
                <span>—</span>
                <span style={{ color: 'var(--accent-primary)' }}>Client: {exp.client}</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <Calendar size={16} color="var(--accent-primary)" />
                <span>{exp.period}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <MapPin size={16} color="var(--accent-emerald)" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: '950px' }}>
            {exp.summary}
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '28px',
            justifyContent: 'center',
          }}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className="btn btn-sm"
              style={{
                borderRadius: 'var(--radius-full)',
                background: activeFilter === f.id ? 'var(--accent-primary)' : 'var(--bg-subtle)',
                color: activeFilter === f.id ? '#fff' : 'var(--text-secondary)',
                border: activeFilter === f.id ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                transition: 'all var(--transition-fast)',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Highlights Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {exp.highlights.filter(filterHighlight).map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <span
                    className={`badge ${
                      item.badge === 'Scale Highlight'
                        ? 'badge-emerald'
                        : item.badge === 'Architecture'
                        ? 'badge-indigo'
                        : item.badge === 'Latency Win'
                        ? 'badge-cyan'
                        : 'badge-amber'
                    }`}
                  >
                    {item.badge}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    Impact #{idx + 1}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '12px', lineHeight: 1.4 }}>
                  {item.title}
                </h4>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.76rem',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
