import React, { useState } from 'react';
import { 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Database, 
  ShieldCheck, 
  Radio, 
  Cpu, 
  Activity, 
  HardDrive, 
  Sparkles,
  Info
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SystemArchitecture = () => {
  const { architecture } = portfolioData;
  const [selectedNode, setSelectedNode] = useState(architecture.nodes[2]); // Default to 22 Microservices

  const getNodeIcon = (id) => {
    switch (id) {
      case 'client': return Radio;
      case 'gateway': return ShieldCheck;
      case 'microservices': return Server;
      case 'kafka': return Activity;
      case 'databases': return Database;
      case 'caching': return Cpu;
      case 'storage': return HardDrive;
      case 'observability': return Layers;
      default: return Server;
    }
  };

  return (
    <section id="architecture" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Layers size={14} />
            Interactive System Blueprint
          </span>
          <h2 className="section-title">UIDAI Distributed Architecture</h2>
          <p className="section-desc">
            Interactive visualization of the national-scale Aadhaar Quality Check (QC) and Biometric Bulk Ingestion platform built with 22 microservices and Apache Kafka.
          </p>
        </div>

        {/* Architecture Grid: Interactive Visualizer + Deep Dive Panel */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {/* Left: Interactive Diagram Nodes */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                CLICK ANY SYSTEM LAYER TO INSPECT DESIGN:
              </span>
              <span className="badge badge-indigo" style={{ fontSize: '0.72rem' }}>
                Event-Driven
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {architecture.nodes.map((node, index) => {
                const isSelected = selectedNode.id === node.id;
                const Icon = getNodeIcon(node.id);

                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className="glass-card"
                    style={{
                      padding: '16px 20px',
                      cursor: 'pointer',
                      border: isSelected
                        ? '2px solid var(--accent-primary)'
                        : '1px solid var(--border-subtle)',
                      background: isSelected
                        ? 'var(--bg-card-hover)'
                        : 'var(--bg-card)',
                      boxShadow: isSelected ? 'var(--shadow-glow)' : 'none',
                      transform: isSelected ? 'translateX(8px)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: 'var(--radius-md)',
                          background: isSelected
                            ? 'var(--accent-gradient)'
                            : 'rgba(255, 255, 255, 0.05)',
                          color: isSelected ? '#fff' : 'var(--accent-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                            0{index + 1}.
                          </span>
                          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: isSelected ? '#fff' : 'var(--text-primary)' }}>
                            {node.name}
                          </h4>
                        </div>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                          {node.category}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span className="badge badge-emerald" style={{ display: 'none', sm: 'inline-flex' }}>
                        {node.metrics}
                      </span>
                      <ArrowRight
                        size={18}
                        color={isSelected ? 'var(--accent-primary)' : 'var(--text-muted)'}
                        style={{
                          transform: isSelected ? 'translateX(4px)' : 'none',
                          transition: 'transform var(--transition-fast)',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed Deep Dive Inspector */}
          <div
            className="glass-card"
            style={{
              padding: '32px',
              border: '1px solid var(--border-highlight)',
              position: 'sticky',
              top: '90px',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <span className="badge badge-indigo" style={{ marginBottom: '8px' }}>
                  {selectedNode.category}
                </span>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>
                  {selectedNode.name}
                </h3>
              </div>
              <div
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: 'var(--accent-emerald)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Sparkles size={14} />
                <span>Impact: {selectedNode.metrics}</span>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                Role in UIDAI Architecture
              </h4>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-primary)' }}>
                {selectedNode.role}
              </p>
            </div>

            {/* Tech Stack Employed */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px', letterSpacing: '0.05em' }}>
                Tech & Standards Utilized
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedNode.tech.map((t) => (
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
                      fontWeight: 600,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Engineering Insights for Interviewers */}
            <div
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--accent-secondary)' }}>
                <Info size={16} />
                <strong style={{ fontSize: '0.88rem' }}>SDE System Design Context:</strong>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {selectedNode.id === 'databases' && (
                  "Why ClickHouse with MySQL? MySQL guarantees ACID transactions for operator updates, while ClickHouse's columnar compression aggregates 50M+ biometric records for real-time dashboards in ~300ms without locks."
                )}
                {selectedNode.id === 'kafka' && (
                  "Why Apache Kafka? Decouples the 22 microservices. During high-traffic biometric batches, Kafka buffers millions of events, allowing consumers to process at their optimal throughput without cascading service failures."
                )}
                {selectedNode.id === 'caching' && (
                  "Why Redis caching? Frequently evaluated fraud detection criteria and operator session state are cached with TTL policies, dropping overall API latency by 45% and protecting MySQL from connection pool exhaustion."
                )}
                {selectedNode.id === 'microservices' && (
                  "Design approach: Domain-driven design with 22 decoupled Spring Boot services. Rigorous unit testing with JUnit and Mockito ensures 85% test coverage for zero-regression deployments."
                )}
                {selectedNode.id === 'gateway' && (
                  "Centralized Spring Security with JWT handles stateless verification at line-rate. Token blacklisting and RBAC ensure operator isolation and adherence to UIDAI strict data governance."
                )}
                {selectedNode.id === 'storage' && (
                  "Large biometric files are decoupled from relational schemas and saved into MinIO / S3 object stores with time-limited signed URLs, keeping databases nimble and query response times fast."
                )}
                {selectedNode.id === 'observability' && (
                  "Prometheus monitors Kafka consumer lag, JVM heap usage, and 99th percentile response times, visualized on live Grafana dashboards with automated alerting to resolve incidents before SLA breaches."
                )}
                {selectedNode.id === 'client' && (
                  "Responsive operator interface allowing real-time inspection of biometric mismatches and instant fraud flagging with feedback loops."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
