import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Trophy, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  BookOpen 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const EducationCertifications = () => {
  const { education, certifications, achievements } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={14} />
            Academic & Credentials
          </span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-desc">
            Computer Science and Data Science academic foundation backed by industry credentials and competitive hackathons.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {/* Education Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <BookOpen size={20} color="var(--accent-primary)" />
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
                Academic Background
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '24px',
                    borderLeft: '4px solid var(--accent-primary)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <span className="badge badge-indigo">{edu.type}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {edu.year}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {edu.degree}
                  </h4>
                  <div style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '6px' }}>
                    {edu.institution}
                  </div>
                  <div style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 'var(--radius-sm)', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)', fontSize: '0.82rem', fontWeight: 700, marginBottom: '10px' }}>
                    {edu.grade}
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements Column */}
          <div>
            {/* Certifications */}
            <div style={{ marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Award size={20} color="var(--accent-emerald)" />
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
                  Industry Certifications
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="glass-card"
                    style={{
                      padding: '22px',
                      borderLeft: '4px solid var(--accent-emerald)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                        {cert.title}
                      </h4>
                      <span className="badge badge-emerald">{cert.badge}</span>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--accent-secondary)', fontWeight: 500, marginBottom: '8px' }}>
                      Issued by: {cert.issuer}
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Trophy size={20} color="var(--accent-amber)" />
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
                  Achievements & Hackathons
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {achievements.map((ach, idx) => (
                  <div
                    key={idx}
                    className="glass-card"
                    style={{
                      padding: '22px',
                      borderLeft: '4px solid var(--accent-amber)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                        {ach.title}
                      </h4>
                      <span className="badge badge-amber">{ach.organization}</span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
