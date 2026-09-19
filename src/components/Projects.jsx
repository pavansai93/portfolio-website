import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  X, 
  Server, 
  Brain, 
  Globe 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'enterprise', label: 'Distributed & Enterprise' },
    { id: 'ml', label: 'AI & Machine Learning' },
    { id: 'web', label: 'Full-Stack Web' },
  ];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Code2 size={14} />
            Engineering Projects
          </span>
          <h2 className="section-title">Featured Systems & Solutions</h2>
          <p className="section-desc">
            Production-grade distributed backends, algorithmic recommender research, and interactive cloud applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '36px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="btn btn-sm"
              style={{
                borderRadius: 'var(--radius-full)',
                background: activeCategory === cat.id ? 'var(--accent-primary)' : 'var(--bg-card)',
                color: activeCategory === cat.id ? '#fff' : 'var(--text-secondary)',
                border: activeCategory === cat.id ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '28px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '30px',
                border: project.featured ? '1px solid var(--border-highlight)' : '1px solid var(--border-subtle)',
                background: project.featured
                  ? 'linear-gradient(180deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.85) 100%)'
                  : 'var(--bg-card)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span
                    className={`badge ${
                      project.category === 'enterprise'
                        ? 'badge-emerald'
                        : project.category === 'ml'
                        ? 'badge-indigo'
                        : 'badge-cyan'
                    }`}
                  >
                    {project.categoryLabel}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {project.duration}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {project.description}
                </p>

                {/* Key Architecture Highlights */}
                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Key Architectural Pillars:
                  </span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {project.architectureHighlights.slice(0, 2).map((point, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent-emerald)', marginTop: '2px' }}>▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Impact callout */}
                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(99, 102, 241, 0.08)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    fontSize: '0.85rem',
                    color: 'var(--accent-secondary)',
                    marginBottom: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Sparkles size={16} color="var(--accent-primary)" />
                  <span><strong>Impact:</strong> {project.impact}</span>
                </div>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Trigger Modal */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Explore Architecture Breakdown</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <span className="badge badge-emerald" style={{ marginBottom: '8px' }}>
                  {selectedProject.categoryLabel}
                </span>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-full)',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
              {selectedProject.description}
            </p>

            {/* Architecture Highlights Full List */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '12px', letterSpacing: '0.05em' }}>
                Full Architecture & Implementation Details
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {selectedProject.architectureHighlights.map((point, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.92rem',
                    }}
                  >
                    <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-primary)' }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metric */}
            <div
              style={{
                padding: '16px 20px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                marginBottom: '24px',
              }}
            >
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-emerald)', marginBottom: '6px' }}>
                Production Outcome & Impact
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                {selectedProject.impact}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
                Technologies Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(99, 102, 241, 0.12)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
