import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles, Send, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';

export default function InteractiveTerminal({ isOpen, setIsOpen, toggleTheme }) {
  const [history, setHistory] = useState([
    { type: 'output', text: `🚀 Welcome to ${portfolioData.personal.name}'s Interactive CLI v2.4` },
    { type: 'output', text: 'Type "help" to see available commands or click quick actions below.' },
  ]);
  const [input, setInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText) => {
    const raw = cmdText.trim();
    if (!raw) return;

    soundManager.playPop();

    const parts = raw.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    const newHistory = [...history, { type: 'input', text: raw }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available commands:
  • whoami     - Display developer identity and summary
  • skills     - Show technical skillset and proficiency
  • projects   - List featured production projects
  • hire       - Trigger confetti & initiate contact
  • theme      - Toggle dark / light appearance
  • matrix     - Run digital green rain pulse
  • clear      - Clear terminal screen
  • contact    - Display email & connection coordinates`,
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `Name: ${portfolioData.personal.name}
Role: ${portfolioData.personal.role}
Location: ${portfolioData.personal.location}
Status: ${portfolioData.personal.availability}
Bio: ${portfolioData.personal.bio}`,
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `TECHNICAL ARSENAL:
[Frontend]  React 19, TypeScript, Next.js, Tailwind CSS [██████████] 95%
[Backend]   Node.js, Express, PostgreSQL, Redis, Python   [█████████░] 90%
[DevOps]    Docker, AWS, CI/CD Actions, Linux, Vercel     [████████░░] 85%
[Practices] System Design, Clean Code, TDD, Agile         [██████████] 95%`,
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: portfolioData.projects
            .map(
              (p, i) =>
                `${i + 1}. ${p.title} (${p.category})
   Tech: ${p.tags.join(', ')}
   Demo: ${p.demoUrl}`
            )
            .join('\n\n'),
        });
        break;

      case 'hire':
      case 'sudo':
        soundManager.playSuccess();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        newHistory.push({
          type: 'output',
          text: `🎉 EXCELLENT DECISION! Dispatching signal to ${portfolioData.personal.email}...
Direct reachout: ${portfolioData.personal.email}
Scrolling to contact form now!`,
        });
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 600);
        break;

      case 'matrix':
        soundManager.playSuccess();
        newHistory.push({
          type: 'output',
          text: 'Wake up, Neo... The Matrix has you. Follow the white rabbit. 🐇\n01010011 01011001 01010011 01010100 01000101 01001101 00100000 01001111 01001110 01001100 01001001 01001110 01000101',
        });
        break;

      case 'theme':
        toggleTheme();
        newHistory.push({
          type: 'output',
          text: 'Switched visual theme!',
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email: ${portfolioData.personal.email}
GitHub: ${portfolioData.personal.socials.github}
LinkedIn: ${portfolioData.personal.socials.linkedin}`,
        });
        break;

      default:
        newHistory.push({
          type: 'output',
          text: `Command not recognized: "${raw}". Type "help" to see valid commands.`,
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => {
          soundManager.playPop();
          setIsOpen(true);
        }}
        aria-label="Open Interactive CLI Terminal"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 dark:bg-indigo-600/90 text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 backdrop-blur-md border border-slate-700/50 dark:border-indigo-400/30 group"
      >
        <TerminalIcon className="w-4 h-4 text-emerald-400 animate-pulse" />
        <span className="text-xs font-mono font-semibold tracking-wide">Terminal CLI</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:bg-emerald-300" />
      </button>
    );
  }

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ${
        isMaximized
          ? 'inset-3 sm:inset-6'
          : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[94vw] sm:w-[540px] max-w-[620px] h-[480px]'
      }`}
    >
      <div className="w-full h-full flex flex-col rounded-2xl bg-slate-950/95 text-slate-200 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden font-mono">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800/80 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors"
              title="Close"
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors"
              title="Maximize / Restore"
            />
            <button
              onClick={() => handleCommand('clear')}
              className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors"
              title="Clear"
            />
            <span className="text-xs text-slate-400 font-mono ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
              cli@{portfolioData.personal.name.toLowerCase().replace(' ', '')}:~
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-slate-400 hover:text-white transition-colors"
              title={isMaximized ? 'Minimize' : 'Maximize'}
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded text-slate-400 hover:text-white transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Action Chips */}
        <div className="px-4 py-2 bg-slate-900/40 border-b border-slate-800/50 flex items-center gap-1.5 overflow-x-auto text-[11px] select-none">
          <span className="text-slate-500 text-[10px] uppercase font-semibold">Quick:</span>
          {['help', 'whoami', 'skills', 'projects', 'hire', 'matrix', 'clear'].map((chip) => (
            <button
              key={chip}
              onClick={() => handleCommand(chip)}
              className="px-2 py-0.5 rounded-md bg-slate-800/80 hover:bg-indigo-600/40 hover:text-indigo-300 text-slate-300 border border-slate-700/60 transition-colors shrink-0"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Terminal Content Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 text-xs leading-relaxed font-mono">
          {history.map((item, idx) => (
            <div key={idx} className="whitespace-pre-wrap">
              {item.type === 'input' ? (
                <div className="flex items-center gap-2 text-indigo-400 font-bold">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-slate-400">~</span>
                  <span>{item.text}</span>
                </div>
              ) : (
                <div className="text-slate-300 font-normal pl-4 border-l-2 border-slate-800/80 my-1">
                  {item.text}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <form
          onSubmit={handleFormSubmit}
          className="px-4 py-3 bg-slate-900/80 border-t border-slate-800 flex items-center gap-2"
        >
          <span className="text-emerald-400 font-bold">➜</span>
          <span className="text-slate-500 text-xs">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-white text-xs outline-none font-mono placeholder:text-slate-600"
          />
          <button
            type="submit"
            className="p-1 rounded text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
