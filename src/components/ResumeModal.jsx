import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Mail, 
  Phone, 
  CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, experience, projects, skills, education, certifications } = portfolioData;
  const exp = experience[0];

  const handlePrint = () => {
    // Trigger celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '880px', padding: '0', overflow: 'hidden' }}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            padding: '16px 24px',
            background: 'var(--bg-card-hover)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
              ATS-Optimized Resume Preview
            </span>
            <span className="badge badge-emerald" style={{ fontSize: '0.72rem' }}>
              SDE Tailored
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handlePrint}
              className="btn btn-primary btn-sm"
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-full)',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Resume Paper Body */}
        <div 
          id="resume-printable"
          style={{ 
            padding: '40px', 
            maxHeight: '80vh', 
            overflowY: 'auto',
            background: 'var(--bg-card-solid)',
            color: 'var(--text-primary)',
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', borderBottom: '2px solid var(--border-subtle)', paddingBottom: '20px', marginBottom: '24px' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '6px' }}>
              {personal.name}
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <span>📞 {personal.phone}</span>
              <span>✉️ {personal.email}</span>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>
                linkedin.com/in/patnampavansai
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '8px', color: 'var(--accent-primary)' }}>
              Summary
            </h3>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              {personal.summary}
            </p>
          </div>

          {/* Professional Experience */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '12px', color: 'var(--accent-primary)' }}>
              Experience
            </h3>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                  {exp.company}
                </strong>
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  {exp.period}
                </span>
              </div>
              <div style={{ fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--accent-secondary)', marginBottom: '8px' }}>
                {exp.role} — Client: {exp.client}
              </div>

              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                <li>Migrated 5+ enterprise applications to upgraded JDK versions, resolving compatibility issues and ensuring application stability across the modernized technology stack.</li>
                <li>Worked on backend services for UIDAI's Quality Check (QC) portal, supporting operator workflows for reviewing submitted requests and making fraud-related decisions.</li>
                <li>Contributed to a distributed architecture comprising 22 microservices, developing REST APIs and implementing Apache Kafka-based asynchronous communication between services.</li>
                <li>Designed dashboard APIs integrating MySQL and ClickHouse, achieving approximately 300 ms API latency through backend performance optimization.</li>
                <li>Maintained a high-performance bulk-processing service capable of validating and processing over 50 million (5+ crore) records for biometric verification workflows.</li>
                <li>Implemented Redis caching for frequently accessed data, reducing repeated database operations and improving application response performance by approximately 45%.</li>
                <li>Developed JUnit and Mockito test cases across approximately 10 microservices, increasing overall code coverage to 85%.</li>
                <li>Resolved production issues through log analysis, database debugging, Kafka troubleshooting, and root-cause analysis; supported deployments and monitoring using Jenkins, Docker, Grafana, and Prometheus.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '12px', color: 'var(--accent-primary)' }}>
              Projects
            </h3>
            
            {/* UIDAI QC Portal */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  UIDAI – Quality Check (QC) Portal
                </strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Java, Spring Boot, Kafka, MySQL, ClickHouse, Redis</span>
              </div>
              <ul style={{ paddingLeft: '20px', fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                <li>Developed and maintained backend services for the QC portal used by operators for request review and fraud-related decision making.</li>
                <li>Contributed to distributed architecture of 22 microservices using Kafka for event-driven processing, achieving ~300ms dashboard latency.</li>
              </ul>
            </div>

            {/* UIDAI Bulk Processing */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  UIDAI – Aadhaar Identity Management Platform & Bulk Ingestion
                </strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Java, Spring Boot, Kafka, MySQL, Redis</span>
              </div>
              <ul style={{ paddingLeft: '20px', fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                <li>Built bulk processing pipeline capable of validating and processing over 50 Million (5+ crore) records for biometric verification.</li>
                <li>Integrated JWT security, Kafka event queues, and Redis caching, cutting latency by 45%.</li>
              </ul>
            </div>

            {/* Deep Learning Cold Start */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  Cold-Start Problem Recommender System
                </strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Python, SVD++, Matrix Factorization, Deep Learning</span>
              </div>
              <ul style={{ paddingLeft: '20px', fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                <li>Addressed cold-start problem in recommender systems using social graph community clustering and SVD++ on MovieLens 100K.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '8px', color: 'var(--accent-primary)' }}>
              Technical Skills
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px', fontSize: '0.85rem' }}>
              <div><strong>Languages:</strong> Java, SQL, Python, C</div>
              <div><strong>Backend:</strong> Spring Boot, Spring Security, Microservices</div>
              <div><strong>Messaging:</strong> Apache Kafka, Event Streaming</div>
              <div><strong>Databases:</strong> MySQL, ClickHouse (OLAP), Redis</div>
              <div><strong>DevOps & Tools:</strong> Docker, Jenkins, Git, Maven</div>
              <div><strong>Observability & Test:</strong> Prometheus, Grafana, JUnit, Mockito</div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '8px', color: 'var(--accent-primary)' }}>
              Education
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
              <div>
                <strong>CVR College of Engineering, Hyderabad</strong> — B.Tech in Information Technology (Major) & Data Science (Minor)
              </div>
              <div style={{ fontFamily: 'var(--font-mono)' }}>
                CGPA: 8.62 / 10.00 (2024)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
