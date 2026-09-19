import React, { useState } from 'react';
import { 
  Activity, 
  Zap, 
  Cpu, 
  Database, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Info,
  TrendingDown,
  Gauge
} from 'lucide-react';

export const LatencySimulator = () => {
  const [architectureType, setArchitectureType] = useState('optimized'); // 'traditional', 'indexed', 'optimized'
  const [requestLoad, setRequestLoad] = useState(25000); // 1,000 to 50,000 requests/sec
  const [isBenchmarking, setIsBenchmarking] = useState(false);
  const [benchmarkRan, setBenchmarkRan] = useState(false);

  // Computed simulation metrics
  const getMetrics = (type, load) => {
    switch (type) {
      case 'traditional':
        return {
          latency: Math.round(2100 + (load / 50000) * 800),
          dbLoad: Math.min(98, Math.round(70 + (load / 50000) * 28)),
          cacheHitRatio: '0%',
          p99: Math.round(3400 + (load / 50000) * 1100),
          status: 'Severe Bottleneck Under Load',
          statusColor: '#ef4444',
          description: 'Direct transactional MySQL queries with table scans. High disk I/O causes connection pool saturation.',
        };
      case 'indexed':
        return {
          latency: Math.round(950 + (load / 50000) * 450),
          dbLoad: Math.min(85, Math.round(45 + (load / 50000) * 35)),
          cacheHitRatio: '0%',
          p99: Math.round(1550 + (load / 50000) * 500),
          status: 'Moderate Performance',
          statusColor: '#f59e0b',
          description: 'MySQL B-Tree indexes reduce disk reads, but relational row-level locks still degrade throughput during spikes.',
        };
      case 'optimized':
      default:
        return {
          latency: Math.round(290 + (load / 50000) * 40),
          dbLoad: Math.round(18 + (load / 50000) * 12),
          cacheHitRatio: '94.2%',
          p99: Math.round(380 + (load / 50000) * 45),
          status: 'Production Scale Verified',
          statusColor: '#10b981',
          description: 'Pavan Sai\'s Architecture: Redis distributed cache absorbs repeated lookups; ClickHouse columnar engine aggregates analytics in ~300ms.',
        };
    }
  };

  const metrics = getMetrics(architectureType, requestLoad);

  const runBenchmark = () => {
    setIsBenchmarking(true);
    setTimeout(() => {
      setIsBenchmarking(false);
      setBenchmarkRan(true);
    }, 600);
  };

  return (
    <section id="simulator" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Gauge size={14} />
            Interactive Systems Playground
          </span>
          <h2 className="section-title">Distributed Latency Simulator</h2>
          <p className="section-desc">
            Test how introducing Redis distributed caching and ClickHouse analytical aggregation slashes API response times from ~2,400ms down to ~300ms under 50M+ record loads.
          </p>
        </div>

        <div
          className="glass-card"
          style={{
            padding: '36px',
            border: '1px solid var(--border-highlight)',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {/* Architecture Selector Tabs */}
          <div style={{ marginBottom: '28px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
              Select Backend & Data Architecture Pipeline:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
              <button
                onClick={() => { setArchitectureType('traditional'); setBenchmarkRan(false); }}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  background: architectureType === 'traditional' ? 'rgba(239, 68, 68, 0.15)' : 'var(--bg-subtle)',
                  border: architectureType === 'traditional' ? '2px solid #ef4444' : '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <strong style={{ fontSize: '0.95rem' }}>1. Uncached MySQL</strong>
                  <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 700 }}>Legacy</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Direct relational queries over 50M records
                </p>
              </button>

              <button
                onClick={() => { setArchitectureType('indexed'); setBenchmarkRan(false); }}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  background: architectureType === 'indexed' ? 'rgba(245, 158, 11, 0.15)' : 'var(--bg-subtle)',
                  border: architectureType === 'indexed' ? '2px solid #f59e0b' : '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <strong style={{ fontSize: '0.95rem' }}>2. Indexed MySQL</strong>
                  <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: 700 }}>Standard</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  B-Tree composite indexes on primary entities
                </p>
              </button>

              <button
                onClick={() => { setArchitectureType('optimized'); setBenchmarkRan(false); }}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  background: architectureType === 'optimized' ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-subtle)',
                  border: architectureType === 'optimized' ? '2px solid #10b981' : '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <strong style={{ fontSize: '0.95rem' }}>3. Redis + ClickHouse</strong>
                  <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700 }}>UIDAI Stack</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Pavan Sai's optimized caching & OLAP pipeline
                </p>
              </button>
            </div>
          </div>

          {/* Load Slider Control */}
          <div style={{ marginBottom: '32px', padding: '20px', borderRadius: 'var(--radius-md)', background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Simulate Concurrent Request Volume:
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                {requestLoad.toLocaleString()} req/sec
              </span>
            </div>
            <input
              type="range"
              min="2000"
              max="50000"
              step="2000"
              value={requestLoad}
              onChange={(e) => setRequestLoad(Number(e.target.value))}
              style={{
                width: '100%',
                cursor: 'pointer',
                accentColor: 'var(--accent-primary)',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              <span>2,000 req/sec (Baseline)</span>
              <span>25,000 req/sec (Operator Peak)</span>
              <span>50,000 req/sec (National Ingestion Burst)</span>
            </div>
          </div>

          {/* Live Simulated Telemetry Dashboard */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '28px',
            }}
          >
            {/* Metric 1: Avg Latency */}
            <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                Average Latency
              </span>
              <div
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  color: metrics.statusColor,
                  lineHeight: 1.1,
                  marginBottom: '4px',
                }}
              >
                {isBenchmarking ? '...' : `${metrics.latency}ms`}
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                Target: &lt; 350ms
              </span>
            </div>

            {/* Metric 2: P99 Latency */}
            <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                P99 Latency
              </span>
              <div
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.1,
                  marginBottom: '4px',
                }}
              >
                {isBenchmarking ? '...' : `${metrics.p99}ms`}
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                99th percentile SLA
              </span>
            </div>

            {/* Metric 3: Cache Hit Ratio */}
            <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                Redis Cache Hit Rate
              </span>
              <div
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  color: architectureType === 'optimized' ? 'var(--accent-emerald)' : 'var(--text-muted)',
                  lineHeight: 1.1,
                  marginBottom: '4px',
                }}
              >
                {isBenchmarking ? '...' : metrics.cacheHitRatio}
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                {architectureType === 'optimized' ? 'Bypasses DB IO' : 'No cache layer'}
              </span>
            </div>

            {/* Metric 4: DB CPU / Pool Load */}
            <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                Database CPU Stress
              </span>
              <div
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  color: metrics.dbLoad > 80 ? '#ef4444' : metrics.dbLoad > 50 ? '#f59e0b' : '#10b981',
                  lineHeight: 1.1,
                  marginBottom: '4px',
                }}
              >
                {isBenchmarking ? '...' : `${metrics.dbLoad}%`}
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                Connection pool headroom
              </span>
            </div>
          </div>

          {/* Rationale & Explanation Card */}
          <div
            style={{
              padding: '20px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-subtle)',
              border: `1px solid ${metrics.statusColor}40`,
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: `${metrics.statusColor}20`,
                color: metrics.statusColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px',
              }}
            >
              <Zap size={18} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <strong style={{ fontSize: '0.95rem', color: metrics.statusColor }}>
                  {metrics.status}
                </strong>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {metrics.description}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={runBenchmark}
              disabled={isBenchmarking}
              className="btn btn-primary"
              style={{ padding: '12px 32px' }}
            >
              <Play size={16} />
              <span>{isBenchmarking ? 'Simulating 50M Record Query Load...' : 'Run Load Benchmark'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
