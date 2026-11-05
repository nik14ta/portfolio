import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  ExternalLink,
  RotateCcw,
  Check,
  Copy,
  Briefcase,
  GraduationCap,
  Trophy,
  Code2,
  Mail,
  Phone,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';

// Intelligent portfolio knowledge base query responder
function answerPortfolioQuestion(input) {
  const q = input.toLowerCase().trim();

  // 1. Contact / Hiring / Availability / Phone / Email
  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('phone') ||
    q.includes('hire') ||
    q.includes('available') ||
    q.includes('reach') ||
    q.includes('call') ||
    q.includes('location')
  ) {
    return {
      text: `Nikita is **actively seeking entry-level Software Developer, Full Stack, and AI Engineering roles** (Open to Remote worldwide & On-site in India)!\n\nHere is how you can reach her right away:\n- 📧 **Email:** [${portfolioData.personal.email}](mailto:${portfolioData.personal.email})\n- 📞 **Phone:** [${portfolioData.personal.phone}](tel:${portfolioData.personal.phone})\n- 💼 **LinkedIn:** [Nikita Rathour](${portfolioData.personal.socials.linkedin})\n- 🐙 **GitHub:** [@nik14ta](${portfolioData.personal.socials.github})`,
      actions: [
        { label: 'Copy Email', type: 'copy_email' },
        { label: 'Jump to Contact Form', type: 'scroll', target: 'contact' },
      ],
    };
  }

  // 2. NPTEL / Certification / Silver Medal / Honors / Hackathons
  if (
    q.includes('nptel') ||
    q.includes('silver') ||
    q.includes('medal') ||
    q.includes('certif') ||
    q.includes('hackathon') ||
    q.includes('acm') ||
    q.includes('sih') ||
    q.includes('honor') ||
    q.includes('award') ||
    q.includes('score')
  ) {
    return {
      text: `Nikita holds impressive verified honors and certifications:\n\n1. 🥈 **NPTEL Elite + Silver Medal (78% Score)** in *Genetic / Generative AI for Computer Vision* from NPTEL/IIT.\n2. 🏆 **ACM Shivalik Hackathon – Top 10% Rank** (12th place out of 121 teams) for *ApnaKhet AgriTech*.\n3. 🎯 **Smart India Hackathon (SIH) – Shortlisted** for her real-time AI athlete computer vision system.\n4. 📜 **Autonomous AI Agents** certification with LangGraph & LangChain.`,
      actions: [
        { label: 'View Experience & Honors', type: 'scroll', target: 'experience' },
      ],
    };
  }

  // 3. Work Experience / High Court / BKNetwork / Internship / Jobs
  if (
    q.includes('experience') ||
    q.includes('intern') ||
    q.includes('work') ||
    q.includes('job') ||
    q.includes('bknetwork') ||
    q.includes('court') ||
    q.includes('chandigarh') ||
    q.includes('punjab')
  ) {
    return {
      text: `Nikita has solid industry experience across two organizations:\n\n1. 🏢 **Software Development Intern** at *BKNetwork Services Pvt. Ltd.* (June–Sept 2026):\n   - Built production HRMS and LMS platforms.\n   - Created secure RESTful APIs with Python & PostgreSQL (DBeaver).\n   - Built responsive UI dashboards with React.js & Tailwind CSS.\n\n2. 🏛️ **QA Tester & Technical Documentation** at *Punjab and Haryana High Court, Chandigarh* (2026):\n   - Executed rigorous functional testing on the High Court's official judicial web portal.\n   - Authored the comprehensive official User Manual for court staff and lawyers.`,
      actions: [
        { label: 'View Timeline in Experience Tab', type: 'scroll', target: 'experience' },
      ],
    };
  }

  // 4. Projects / Autonomous Agent / RAG / Vision / Legal / Code
  if (
    q.includes('project') ||
    q.includes('build') ||
    q.includes('agent') ||
    q.includes('rag') ||
    q.includes('langgraph') ||
    q.includes('vision') ||
    q.includes('athlete') ||
    q.includes('apnakhet') ||
    q.includes('portfolio')
  ) {
    return {
      text: `Nikita has built several advanced production and AI systems:\n\n- 🤖 **Autonomous Software Engineer Agent:** An 8-node LangGraph agent with human approval checkpoints that takes GitHub issues, analyzes code, writes fixes, and runs automated pytest tests.\n- ⚖️ **Multilingual Legal Assistant:** Voice-and-text RAG pipeline querying Indian statutory laws (IPC, IT Act) with fact-checking and BHASHINI voice output.\n- 🏃 **AI Athlete Performance Tracker (SIH Shortlist):** Real-time posture tracking using YOLOv8 & MoveNet to calculate joint angles and detect fouls at 30+ FPS.\n- 💼 **BKNetwork Enterprise HRMS & LMS:** Live company management portal with PostgreSQL and JWT security.\n- 🌾 **ApnaKhet AgriTech (ACM Top 10%):** Offline-first mobile crop disease detector and farming advisor.`,
      actions: [
        { label: 'Explore Featured Projects', type: 'scroll', target: 'projects' },
      ],
    };
  }

  // 5. Skills / Tech Stack / Languages / Frameworks
  if (
    q.includes('skill') ||
    q.includes('tech') ||
    q.includes('stack') ||
    q.includes('python') ||
    q.includes('react') ||
    q.includes('fastapi') ||
    q.includes('database') ||
    q.includes('tool')
  ) {
    return {
      text: `Nikita's core technical toolkit includes:\n\n- **AI & Agents:** LangGraph, LangChain, Multi-Node Workflows, Hybrid RAG, ChromaDB, Gemini API, YOLOv8, MediaPipe.\n- **Frontend:** React.js, Vite, Next.js, Tailwind CSS, JavaScript (ES6+), TypeScript.\n- **Backend:** Python, FastAPI, Node.js, Express.js, RESTful APIs, JWT Authentication.\n- **Databases & Tools:** PostgreSQL (DBeaver), MongoDB, Git/GitHub, Pytest, Linux/Windows.`,
      actions: [
        { label: 'Inspect Skills Matrix', type: 'scroll', target: 'skills' },
      ],
    };
  }

  // 6. Education / College / Degree / University
  if (
    q.includes('education') ||
    q.includes('college') ||
    q.includes('degree') ||
    q.includes('university') ||
    q.includes('study') ||
    q.includes('haridwar') ||
    q.includes('b.tech') ||
    q.includes('btech')
  ) {
    return {
      text: `Nikita is pursuing her **Bachelor of Technology (B.Tech) in Computer Science & Engineering** at **Haridwar University** (Graduating in 2027).\n\nHer core academic coursework includes:\n- Data Structures & Algorithms\n- Database Management Systems (DBMS)\n- Operating Systems & System Design\n- Artificial Intelligence & Object-Oriented Programming (OOP)`,
      actions: [
        { label: 'View Education Card', type: 'scroll', target: 'experience' },
      ],
    };
  }

  // 7. About / Bio / Who is Nikita
  if (
    q.includes('who') ||
    q.includes('about') ||
    q.includes('background') ||
    q.includes('tell me') ||
    q.includes('nikita') ||
    q.includes('intro')
  ) {
    return {
      text: `**Nikita Rathour** is a Full Stack Developer and AI Engineer based in India.\n\nShe specializes in building **agentic AI workflows (LangGraph)**, **hybrid RAG pipelines**, and scalable full-stack web applications with **React.js, FastAPI, and PostgreSQL**.\n\nShe has proven experience from internships at BKNetwork Services and Punjab & Haryana High Court, holds an NPTEL Elite + Silver Medal (78%) in Generative AI for Computer Vision, and placed in the Top 10% in the ACM Shivalik Hackathon.`,
      actions: [
        { label: 'Read Full Story', type: 'scroll', target: 'about' },
        { label: 'Contact Nikita', type: 'scroll', target: 'contact' },
      ],
    };
  }

  // Default fallback response
  return {
    text: `Thanks for asking! I can answer anything about Nikita's:\n\n- 🚀 **Projects** (Autonomous Code Agent, Legal RAG, Athlete Vision Tracker)\n- 🏢 **Work Experience** (BKNetwork Services, Punjab & Haryana High Court)\n- 🥈 **Certifications & Honors** (NPTEL Silver Medal 78%, ACM Top 10%, SIH)\n- 💻 **Technical Skills** (React, Python, FastAPI, LangGraph, PostgreSQL)\n- 📬 **Contact & Hiring Information**\n\nWhat would you like to know?`,
    actions: [
      { label: 'Top Projects', query: 'What are Nikita\'s top projects?' },
      { label: 'Work Experience', query: 'Tell me about her work experience' },
      { label: 'Contact / Hire', query: 'How can I contact Nikita?' },
    ],
  };
}

export default function PortfolioAIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: "👋 Hi! I'm **Nikita's AI Assistant**. Ask me anything about her projects, technical skills, work experience, or certifications!",
      actions: [
        { label: '🚀 Top Projects', query: "What are Nikita's top projects?" },
        { label: '🏢 Work Experience', query: "Tell me about her work experience" },
        { label: '🥈 NPTEL Silver Medal', query: "What is her NPTEL certification?" },
        { label: '📬 Contact Nikita', query: "How can I contact Nikita?" },
      ],
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    soundManager.playPop();

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Realistic typing delay
    setTimeout(() => {
      soundManager.playPop();
      const reply = answerPortfolioQuestion(text);
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: reply.text,
        actions: reply.actions,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 550);
  };

  const handleActionClick = (action) => {
    if (action.query) {
      handleSend(action.query);
      return;
    }

    if (action.type === 'copy_email') {
      navigator.clipboard.writeText(portfolioData.personal.email);
      setCopiedEmail(true);
      confetti({ particleCount: 30, spread: 40, origin: { y: 0.8 } });
      soundManager.playSuccess();
      setTimeout(() => setCopiedEmail(false), 2000);
      return;
    }

    if (action.type === 'scroll' && action.target) {
      soundManager.playPop();
      const el = document.getElementById(action.target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        // Close on mobile to view section
        if (window.innerWidth < 640) {
          setIsOpen(false);
        }
      }
    }
  };

  const handleResetChat = () => {
    soundManager.playPop();
    setMessages([
      {
        id: 'welcome',
        sender: 'ai',
        text: "👋 Chat reset! Ask me anything about Nikita's projects, experience, skills, or honors.",
        actions: [
          { label: '🚀 Top Projects', query: "What are Nikita's top projects?" },
          { label: '🏢 Work Experience', query: "Tell me about her work experience" },
          { label: '🥈 NPTEL Silver Medal', query: "What is her NPTEL certification?" },
          { label: '📬 Contact Nikita', query: "How can I contact Nikita?" },
        ],
      },
    ]);
  };

  // Simple Markdown renderer for bolding, bullet points, and links
  const renderFormattedText = (text) => {
    return text.split('\n').map((line, lIdx) => {
      if (!line.trim()) return <div key={lIdx} className="h-2" />;

      // Parse bold **text**
      const parts = line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);

      return (
        <p key={lIdx} className="leading-relaxed">
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="font-bold text-zinc-900 dark:text-zinc-100">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
              const textMatch = part.match(/\[(.*?)\]/);
              const linkMatch = part.match(/\((.*?)\)/);
              if (textMatch && linkMatch) {
                return (
                  <a
                    key={pIdx}
                    href={linkMatch[1]}
                    target={linkMatch[1].startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 font-semibold underline hover:opacity-80"
                  >
                    {textMatch[1]}
                  </a>
                );
              }
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => {
            soundManager.playPop();
            setIsOpen((prev) => !prev);
          }}
          className={`flex items-center gap-2.5 px-4 py-3 rounded-full shadow-2xl transition-all ${
            isOpen
              ? 'bg-rose-950 dark:bg-pink-100 text-white dark:text-zinc-900'
              : 'bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white shadow-pink-500/25'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Bot className="w-5 h-5" />
            )}
            {!isOpen && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-indigo-600 animate-pulse" />
            )}
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-tight">
            {isOpen ? 'Close' : "Ask Nikita's AI"}
          </span>
        </motion.button>
      </div>

      {/* Floating Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-22 right-4 sm:right-6 z-40 w-[92vw] sm:w-[420px] max-h-[82vh] h-[600px] flex flex-col rounded-3xl bg-white/95 dark:bg-pink-950/95 border border-pink-200 dark:border-pink-800/80 shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 bg-pink-50/90 dark:bg-pink-900/40 border-b border-pink-200/80 dark:border-pink-800/60 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-500 via-pink-500 to-purple-500 flex items-center justify-center text-white shadow-xs">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-pink-100 flex items-center gap-1.5">
                    <span>Nikita's Portfolio AI</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <div className="text-[11px] text-pink-600 dark:text-pink-300">Ask anything about her work 🌸</div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-indigo-600 text-white rounded-br-xs'
                        : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 rounded-bl-xs border border-zinc-200/80 dark:border-zinc-800'
                    }`}
                  >
                    {renderFormattedText(msg.text)}
                  </div>

                  {/* Suggestion & Action Pills */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                      {msg.actions.map((action, aIdx) => (
                        <button
                          key={aIdx}
                          onClick={() => handleActionClick(action)}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 transition-colors inline-flex items-center gap-1 shadow-2xs"
                        >
                          {action.type === 'copy_email' && copiedEmail ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-500" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <span>{action.label}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900 w-16 border border-zinc-200 dark:border-zinc-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-zinc-50 dark:bg-zinc-900/90 border-t border-zinc-200 dark:border-zinc-800 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask about Nikita's projects, experience, skills..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-xs text-zinc-900 dark:text-zinc-100 outline-none focus:border-indigo-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white transition-opacity shrink-0 shadow-xs"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
