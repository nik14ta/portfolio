import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpotlightCursor from './components/SpotlightCursor';
import CommandPalette from './components/CommandPalette';
import PortfolioAIChat from './components/PortfolioAIChat';

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Global hotkey to open Command Palette: `Cmd + K` or `Ctrl + K`
  useEffect(() => {
    // Ensure body overflow is cleanly scrollable
    document.body.style.overflow = '';

    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-zinc-900 transition-colors duration-200 overflow-x-clip bg-grid-pattern">
      {/* Ambient Spotlight Cursor Follower */}
      <SpotlightCursor isDark={isDark} />

      {/* Navigation Island */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        openCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero openCommandPalette={() => setCommandPaletteOpen(true)} />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Portfolio Assistant */}
      <PortfolioAIChat />

      {/* Sleek Command Palette (Linear-style) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        setIsOpen={setCommandPaletteOpen}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />
    </div>
  );
}
