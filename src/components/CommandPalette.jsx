import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, Mail, Phone, Sun, Moon, FileText, Code2, Briefcase, Trophy, Sparkles, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';

export default function CommandPalette({ isOpen, setIsOpen, toggleTheme, isDark }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    {
      category: 'Navigation',
      items: [
        {
          id: 'nav-projects',
          label: 'View Featured Engineering Projects',
          icon: Code2,
          run: () => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          },
        },
        {
          id: 'nav-experience',
          label: 'View Work Experience & Internships',
          icon: Briefcase,
          run: () => {
            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
          },
        },
        {
          id: 'nav-skills',
          label: 'Inspect Technical Skills Matrix',
          icon: Sparkles,
          run: () => {
            document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
          },
        },
        {
          id: 'nav-contact',
          label: 'Contact & Hire Nikita',
          icon: Mail,
          run: () => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          },
        },
      ],
    },
    {
      category: 'Quick Actions',
      items: [
        {
          id: 'act-ai-chat',
          label: "Ask Nikita's AI Assistant (Chatbot)",
          icon: Sparkles,
          run: () => {
            const trigger = document.querySelector('button[aria-label="Open AI Assistant"]');
            trigger?.click();
          },
        },
        {
          id: 'act-email',
          label: `Copy Email (${portfolioData.personal.email})`,
          icon: Mail,
          run: () => {
            navigator.clipboard.writeText(portfolioData.personal.email);
            confetti({ particleCount: 35, spread: 50, origin: { y: 0.6 } });
          },
        },
        {
          id: 'act-phone',
          label: `Copy Phone (${portfolioData.personal.phone})`,
          icon: Phone,
          run: () => {
            navigator.clipboard.writeText(portfolioData.personal.phone);
            confetti({ particleCount: 30, spread: 45, origin: { y: 0.6 } });
          },
        },
        {
          id: 'act-theme',
          label: `Switch to ${isDark ? 'Light' : 'Dark'} Mode`,
          icon: isDark ? Sun : Moon,
          run: () => {
            toggleTheme();
          },
        },
      ],
    },
    {
      category: 'Social & Links',
      items: [
        {
          id: 'link-github',
          label: 'Open GitHub Profile (@nik14ta)',
          icon: GithubIcon,
          run: () => {
            window.open(portfolioData.personal.socials.github, '_blank');
          },
        },
        {
          id: 'link-linkedin',
          label: 'Open LinkedIn Profile',
          icon: LinkedinIcon,
          run: () => {
            window.open(portfolioData.personal.socials.linkedin, '_blank');
          },
        },
      ],
    },
  ];

  // Flatten for keyboard navigation
  const flatItems = actions.flatMap((grp) =>
    grp.items.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    )
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        setIsOpen(false);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, flatItems.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + flatItems.length) % Math.max(1, flatItems.length));
      } else if (e.key === 'Enter' && flatItems[selectedIndex]) {
        e.preventDefault();
        soundManager.playPop();
        flatItems[selectedIndex].run();
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, flatItems, selectedIndex, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-md animate-fadeIn"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-800 bg-zinc-900/90">
          <Search className="w-4 h-4 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 outline-none"
          />
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded border border-zinc-700 bg-zinc-800 text-[10px] text-zinc-400 font-mono">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[340px] overflow-y-auto p-2 space-y-1">
          {flatItems.length === 0 ? (
            <div className="py-8 text-center text-xs text-zinc-500">
              No matching actions found for "{query}"
            </div>
          ) : (
            flatItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    soundManager.playPop();
                    item.run();
                    setIsOpen(false);
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-zinc-800 text-zinc-100'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-zinc-100' : 'text-zinc-500'}`} />
                    <span>{item.label}</span>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'opacity-100 translate-x-0.5 text-zinc-300' : 'opacity-0'}`} />
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-zinc-950/70 border-t border-zinc-800 text-[11px] text-zinc-500 flex items-center justify-between font-mono">
          <span>Navigate with ↑ ↓</span>
          <span>Select with ↵</span>
        </div>
      </div>
    </div>
  );
}
