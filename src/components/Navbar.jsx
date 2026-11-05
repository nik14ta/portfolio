import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Command, ArrowUpRight, Sparkles } from 'lucide-react';
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
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['contact', 'about', 'skills', 'experience', 'projects', 'hero'];
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
      <div className="max-w-4xl mx-auto flex items-center justify-between p-2 rounded-2xl bg-white/85 dark:bg-pink-950/70 backdrop-blur-xl border border-pink-100 dark:border-pink-900/50 shadow-md shadow-pink-500/5 pointer-events-auto transition-all">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={() => soundManager.playPop()}
          className="flex items-center gap-2 pl-2 text-rose-950 dark:text-pink-100 font-bold text-sm tracking-tight"
        >
          <span className="w-7 h-7 rounded-xl bg-gradient-to-tr from-rose-500 via-pink-500 to-purple-500 text-white flex items-center justify-center font-mono text-xs font-black shadow-xs">
            NR
          </span>
          <span className="hidden sm:inline font-bold">Nikita Rathour</span>
          <span className="text-xs text-pink-400">✨</span>
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
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'text-pink-900 dark:text-pink-100 bg-pink-100/90 dark:bg-pink-900/60 shadow-2xs'
                    : 'text-zinc-600 dark:text-pink-200/70 hover:text-pink-700 dark:hover:text-pink-100 hover:bg-pink-50/60 dark:hover:bg-pink-950/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              soundManager.playPop();
              openCommandPalette();
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-pink-50/80 dark:bg-pink-900/40 hover:bg-pink-100 dark:hover:bg-pink-900/60 text-pink-700 dark:text-pink-200 text-xs font-mono transition-colors border border-pink-200/60 dark:border-pink-800/40"
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
            className="p-1.5 rounded-xl text-pink-600 dark:text-pink-300 hover:text-pink-900 dark:hover:text-pink-100 hover:bg-pink-100/80 dark:hover:bg-pink-900/50 transition-colors"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-pink-200" />
            ) : (
              <Moon className="w-4 h-4 text-pink-700" />
            )}
          </button>

          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playPop()}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold text-xs shadow-xs transition-all"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-xl text-pink-700 dark:text-pink-300"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-4xl mx-auto mt-2 p-3 rounded-2xl bg-white/95 dark:bg-pink-950/95 backdrop-blur-xl border border-pink-200 dark:border-pink-800 shadow-xl pointer-events-auto space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                soundManager.playPop();
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-xl text-xs font-semibold text-pink-900 dark:text-pink-200 hover:bg-pink-100/80 dark:hover:bg-pink-900/60"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
