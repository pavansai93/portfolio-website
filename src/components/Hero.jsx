import React from 'react';
import { 
  Database, 
  Network, 
  Zap, 
  Cpu, 
  ShieldCheck, 
  GitBranch, 
  FileText, 
  ArrowRight, 
  Layers, 
  MapPin, 
  CheckCircle2, 
  Briefcase,
  Terminal,
  Download
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onOpenResumeModal }) => {
  const iconMap = {
    Database: Database,
    Network: Network,
    Zap: Zap,
    Cpu: Cpu,
    ShieldCheck: ShieldCheck,
    GitBranch: GitBranch,
  };

  return (
    <section id="hero" className="section" style={{ paddingTop: '140px', paddingBottom: '70px' }}>
      <div className="container">
        {/* SDE Availability Status Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 18px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: 'var(--text-primary)',
              fontSize: '0.88rem',
              fontWeight: 500,
              boxShadow: '0 2px 10px rgba(16, 185, 129, 0.15)',
            }}
          >
            <span className="pulse-dot" />
            <span style={{ fontWeight: 600, color: 'var(--accent-emerald)' }}>
              Open to SDE Roles
            </span>
            <span style={{ color: 'var(--border-subtle)' }}>•</span>
            <span style={{ color: 'var(--text-secondary)' }}>
              Distributed Systems & Backend Engineering
            </span>
          </div>
        </div>

        {/* Hero Main Content */}
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '20px',
              letterSpacing: '-0.03em',
            }}
          >
            Hi, I'm{' '}
            <span
              style={{
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {portfolioData.personal.name}
            </span>
          </h1>

          <h2
            style={{
              fontSize: 'clamp(1.2rem, 2.8vw, 1.75rem)',
              color: 'var(--accent-secondary)',
              fontWeight: 600,
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Software Development Engineer | Distributed Systems & Java Backend
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.18rem)',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              maxWidth: '820px',
              margin: '0 auto 36px',
            }}
          >
            {portfolioData.personal.elevatorPitch}
          </p>

          {/* Quick Credential Chips */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '40px',
            }}
          >
            <div
              className="glass-card"
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
              }}
            >
              <Briefcase size={16} color="var(--accent-primary)" />
              <span style={{ color: 'var(--text-secondary)' }}>Experience:</span>
              <strong style={{ color: 'var(--text-primary)' }}>1.5+ Years (TCS / UIDAI)</strong>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
              }}
            >
              <Terminal size={16} color="var(--accent-secondary)" />
              <span style={{ color: 'var(--text-secondary)' }}>Core Tech:</span>
              <strong style={{ color: 'var(--text-primary)' }}>Java 17, Spring Boot, Kafka, Redis</strong>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
              }}
            >
              <MapPin size={16} color="var(--accent-emerald)" />
              <span style={{ color: 'var(--text-secondary)' }}>Location:</span>
              <strong style={{ color: 'var(--text-primary)' }}>Hyderabad (Open to Relocate)</strong>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '64px',
            }}
          >
            <a
              href="#architecture"
              className="btn btn-primary"
              style={{ fontSize: '1rem', padding: '14px 28px' }}
            >
              <Layers size={18} />
              <span>UIDAI Architecture Blueprint</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="#projects"
              className="btn btn-secondary"
              style={{ fontSize: '1rem', padding: '14px 24px' }}
            >
              <Terminal size={18} />
              <span>Explore Projects</span>
            </a>

            <button
              onClick={onOpenResumeModal}
              className="btn btn-outline"
              style={{ fontSize: '1rem', padding: '14px 24px' }}
            >
              <Download size={18} />
              <span>Resume (PDF)</span>
            </button>
          </div>
        </div>

        {/* Live Scale Metrics Grid */}
        <div style={{ marginTop: '20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span className="section-tag" style={{ fontSize: '0.78rem' }}>
              Scale & Production Impact Metrics
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {portfolioData.keyMetrics.map((metric) => {
              const Icon = iconMap[metric.icon] || Database;
              return (
                <div
                  key={metric.id}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '24px',
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(99, 102, 241, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span className="badge badge-indigo">{metric.trend}</span>
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: '2.4rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--text-primary)',
                        lineHeight: 1.1,
                        marginBottom: '6px',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {metric.value}
                    </div>
                    <div
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '6px',
                      }}
                    >
                      {metric.label}
                    </div>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {metric.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
