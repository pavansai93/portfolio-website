import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { SystemArchitecture } from './components/SystemArchitecture';
import { LatencySimulator } from './components/LatencySimulator';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('pps_theme') || 'dark';
  });
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pps_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-container">
      {/* Dynamic Ambient Atmospheric Glows */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      {/* Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />
        <Experience />
        <SystemArchitecture />
        <LatencySimulator />
        <Projects />
        <Skills />
        <EducationCertifications />
        <Contact
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* ATS Resume Preview Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
