import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Share2, 
  Database, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Zap,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const iconMap = {
    Code2: Code2,
    Server: Server,
    Share2: Share2,
    Database: Database,
    Cpu: Cpu,
    ShieldCheck: ShieldCheck,
  };

  const categories = portfolioData.skills.categories;

  const filteredCategories = categories.filter((cat) => {
    if (activeTab === 'all') return true;
    return cat.id === activeTab;
  });

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Zap size={14} />
            Technical Proficiency
          </span>
          <h2 className="section-title">Skills & Engineering Stack</h2>
          <p className="section-desc">
            Production-tested technologies applied across distributed microservices, event streaming, data pipelines, and automated testing.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '36px',
          }}
        >
          <button
            onClick={() => setActiveTab('all')}
            className="btn btn-sm"
            style={{
              borderRadius: 'var(--radius-full)',
              background: activeTab === 'all' ? 'var(--accent-primary)' : 'var(--bg-card)',
              color: activeTab === 'all' ? '#fff' : 'var(--text-secondary)',
              border: activeTab === 'all' ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
            }}
          >
            All Disciplines
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="btn btn-sm"
              style={{
                borderRadius: 'var(--radius-full)',
                background: activeTab === cat.id ? 'var(--accent-primary)' : 'var(--bg-card)',
                color: activeTab === cat.id ? '#fff' : 'var(--text-secondary)',
                border: activeTab === cat.id ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Code2;
            return (
              <div
                key={cat.id}
                className="glass-card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(99, 102, 241, 0.1)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                    {cat.name}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-md)',
                        background: skill.highlight ? 'rgba(99, 102, 241, 0.08)' : 'var(--bg-subtle)',
                        border: skill.highlight ? '1px solid rgba(99, 102, 241, 0.25)' : '1px solid var(--border-subtle)',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                            {skill.name}
                          </strong>
                          {skill.highlight && (
                            <span style={{ fontSize: '0.68rem', color: 'var(--accent-secondary)', fontFamily: 'var(--font-mono)' }}>
                              ★ Core
                            </span>
                          )}
                        </div>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          {skill.experience}
                        </span>
                      </div>

                      <span
                        className={`badge ${
                          skill.level === 'Advanced'
                            ? 'badge-emerald'
                            : skill.level === 'Proficient'
                            ? 'badge-indigo'
                            : 'badge-cyan'
                        }`}
                        style={{ fontSize: '0.72rem' }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
