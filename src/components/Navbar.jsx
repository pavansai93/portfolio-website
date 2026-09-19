import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Sun, 
  Moon, 
  FileText, 
  Zap, 
  Menu, 
  X, 
  Layers, 
  Briefcase, 
  Code2, 
  Mail, 
  Activity 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ theme, toggleTheme, onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'experience', 'architecture', 'projects', 'simulator', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero', icon: Terminal },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Architecture', href: '#architecture', icon: Layers },
    { label: 'Projects', href: '#projects', icon: Code2 },
    { label: 'Latency Demo', href: '#simulator', icon: Activity },
    { label: 'Skills', href: '#skills', icon: Zap },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all var(--transition-normal)',
        backgroundColor: isScrolled
          ? 'var(--bg-card)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled
          ? '1px solid var(--border-subtle)'
          : '1px solid transparent',
        padding: isScrolled ? '12px 0' : '20px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 800,
              fontSize: '1.1rem',
              boxShadow: 'var(--shadow-glow)',
            }}
          >
            PS
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                {portfolioData.personal.name}
              </span>
              <span className="badge badge-emerald" style={{ display: 'none', md: 'inline-flex' }}>
                <span className="pulse-dot" />
                <span style={{ fontSize: '0.7rem' }}>SDE Open</span>
              </span>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', fontFamily: 'var(--font-mono)' }}>
              Java & Distributed Systems
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            gap: '6px',
            background: 'var(--bg-subtle)',
            padding: '4px 8px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-subtle)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  background: isActive ? 'var(--accent-primary)' : 'transparent',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResumeModal}
            className="btn btn-outline btn-sm"
            title="View & Download ATS-Friendly Resume"
          >
            <FileText size={15} />
            <span>Resume (PDF)</span>
          </button>

          {/* Contact Direct Link */}
          <a
            href="#contact"
            className="btn btn-primary btn-sm"
            style={{ display: 'none', sm: 'inline-flex' }}
          >
            <Mail size={15} />
            <span>Contact</span>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-subtle)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={17} color="#fbbf24" /> : <Moon size={17} color="#6366f1" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-subtle)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle Mobile Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--bg-card-solid)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '16px 24px',
            marginTop: '12px',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                  }}
                >
                  <Icon size={18} color="var(--accent-primary)" />
                  <span>{link.label}</span>
                </a>
              );
            })}
            <div style={{ paddingTop: '8px', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '10px' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="btn btn-outline btn-sm"
                style={{ flex: 1 }}
              >
                <FileText size={16} />
                <span>Resume Preview</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary btn-sm"
                style={{ flex: 1, textAlign: 'center' }}
              >
                <Mail size={16} />
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Responsive media helper inline styles */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
};
