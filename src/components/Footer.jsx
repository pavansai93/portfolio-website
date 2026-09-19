import React from 'react';
import { ArrowUp, Heart, Terminal, Mail, Phone } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { personal } = portfolioData;

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-secondary)',
        padding: '60px 0 30px',
        marginTop: '60px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '30px',
            paddingBottom: '40px',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: '400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent-gradient)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                }}
              >
                PS
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {personal.name}
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Software Development Engineer specializing in distributed systems, Java backend microservices, and high-throughput data processing.
            </p>
          </div>

          {/* Socials & Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href={`mailto:${personal.email}`}
              className="btn btn-secondary btn-sm"
              title="Email Pavan Sai"
            >
              <Mail size={16} color="var(--accent-secondary)" />
              <span>Email</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={16} color="#0a66c2" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              title="Back to Top"
              style={{
                width: '40px',
                height: '40px',
                padding: '0',
                borderRadius: 'var(--radius-full)',
              }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div
          style={{
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Patnam Pavan Sai. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Software Development Engineer • Built with React & Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
