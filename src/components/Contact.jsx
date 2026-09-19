import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  Building2, 
  CheckCircle2 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Contact = ({ onOpenResumeModal }) => {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'SDE-1 / SDE-2 (Backend)',
    message: '',
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Mail size={14} />
            Let's Connect
          </span>
          <h2 className="section-title">Open to SDE Opportunities</h2>
          <p className="section-desc">
            Looking for a Software Development Engineer with deep distributed systems, microservices scale, and low-latency database expertise? Let's connect!
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '36px',
            maxWidth: '1080px',
            margin: '0 auto',
          }}
        >
          {/* Left Column: Direct Contacts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-card" style={{ padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span className="pulse-dot" />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                  Current Availability
                </h3>
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Open to <strong>Software Development Engineer (Backend / Distributed Systems)</strong> roles at product-based companies.
              </p>

              {/* Quick Contact Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Email Box */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(99, 102, 241, 0.12)',
                        color: 'var(--accent-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                        Email Address
                      </span>
                      <a href={`mailto:${personal.email}`} style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personal.email, 'email')}
                    className="btn btn-secondary btn-sm"
                    style={{ padding: '6px 12px' }}
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Box */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(16, 185, 129, 0.12)',
                        color: 'var(--accent-emerald)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Phone size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                        Phone / WhatsApp
                      </span>
                      <a href={`tel:${personal.phone}`} style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {personal.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personal.phone, 'phone')}
                    className="btn btn-secondary btn-sm"
                    style={{ padding: '6px 12px' }}
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* LinkedIn Box */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(10, 102, 194, 0.12)',
                        color: '#0a66c2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <LinkedinIcon size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                        LinkedIn Profile
                      </span>
                      <a
                        href={personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--accent-primary)' }}
                      >
                        linkedin.com/in/patnampavansai ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(245, 158, 11, 0.12)',
                      color: 'var(--accent-amber)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                      Location & Mobility
                    </span>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                      Hyderabad, India • Open to Bangalore, Pune, Gurgaon, Remote
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
              Send a Message
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Send a message directly to Pavan Sai regarding engineering opportunities, projects, or technical collaboration.
            </p>

            {formSubmitted ? (
              <div
                style={{
                  padding: '32px 24px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  textAlign: 'center',
                }}
              >
                <CheckCircle2 size={44} color="var(--accent-emerald)" style={{ margin: '0 auto 16px' }} />
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Thank you for reaching out!
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  Your message has been captured. Pavan Sai will respond to you promptly via <strong>{formData.email || personal.email}</strong>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn btn-secondary btn-sm"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                      COMPANY / ORGANIZATION *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Technology Firm"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                    SUBJECT / TOPIC
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-card-solid)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                    }}
                  >
                    <option value="SDE-1 / SDE-2 (Backend)">SDE-1 / SDE-2 (Backend / Distributed Systems)</option>
                    <option value="Java Backend Engineer">Java Backend Engineer</option>
                    <option value="Full-Stack SDE">Full-Stack Software Engineer</option>
                    <option value="Technical Collaboration">Technical Collaboration & Inquiries</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                    MESSAGE DETAILS *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message, project details, or questions here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '8px', padding: '14px' }}>
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
