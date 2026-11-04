import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileText, Command, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';

export default function Navbar({ isDark, toggleTheme, openCommandPalette }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['contact', 'skills', 'experience', 'projects', 'hero'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-4 pointer-events-none">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-2 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 shadow-xs pointer-events-auto transition-all">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={() => soundManager.playPop()}
          className="flex items-center gap-2 pl-2 text-zinc-900 dark:text-zinc-100 font-bold text-sm tracking-tight"
        >
          <span className="w-6 h-6 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 flex items-center justify-center font-mono text-xs font-black">
            NR
          </span>
          <span className="hidden sm:inline">Nikita Rathour</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => soundManager.playPop()}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Cmd+K, Theme, Resume */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              soundManager.playPop();
              openCommandPalette();
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-mono transition-colors"
            title="Command Menu (Cmd + K)"
          >
            <Command className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Cmd+K</span>
          </button>

          <button
            onClick={() => {
              soundManager.playPop();
              toggleTheme();
            }}
            aria-label="Toggle theme"
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-zinc-200" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )}
          </button>

          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playPop()}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-medium text-xs hover:opacity-90 transition-all shadow-xs"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-zinc-700 dark:text-zinc-300"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-4xl mx-auto mt-2 p-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl pointer-events-auto space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                soundManager.playPop();
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
