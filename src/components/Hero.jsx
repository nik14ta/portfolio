import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, ShieldCheck, Trophy, Layers, Cpu, Command } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  fadeUp, fadeIn, staggerContainer, staggerItem, hoverLift, springTap
} from '../utils/animations';

// Animated counter
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const num = parseFloat(target);
    if (isNaN(num)) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = num / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{count}{suffix}</span>;
}

export default function Hero({ openCommandPalette }) {
  const { personal } = portfolioData;

  const handleHireClick = () => {
    soundManager.playSuccess();
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'],
    });
  };

  const bentoCards = [
    {
      icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />,
      label: 'Identity',
      title: personal.name,
      sub: '@nik14ta • India',
      body: 'Focused on autonomous code synthesis, multilingual legal RAG, and production React/FastAPI architectures.',
      footer: ['GitHub', 'LinkedIn', 'Email'],
      isProfile: true,
    },
    {
      icon: <Layers className="w-3.5 h-3.5 text-indigo-500" />,
      label: 'Industry Experience',
      title: 'BKNetwork Services Pvt. Ltd.',
      sub1: { text: 'Software Development Intern • 2026', color: 'text-emerald-600 dark:text-emerald-400' },
      sub2: { text: 'Punjab & Haryana High Court • QA & Docs', color: 'text-indigo-600 dark:text-indigo-400' },
      body: 'Enterprise HRMS & LMS at BKNetwork (Python, PostgreSQL, React). QA testing & User Manual for the official Punjab & Haryana High Court judicial web platform.',
      footerLeft: '2× Industry Roles',
      footerRight: 'REST APIs + QA',
    },
    {
      icon: <Trophy className="w-3.5 h-3.5 text-amber-500" />,
      label: 'Honors & Accolades',
      title: 'NPTEL Silver & ACM Top 10%',
      badges: [
        { label: '🥈 NPTEL 78% Silver', cls: 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700' },
        { label: 'ACM Top 10% (12/121)', cls: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60' },
      ],
      body: 'NPTEL Elite + Silver Medalist in Generative AI for Computer Vision. Top 10% rank in ACM Shivalik Hackathon for ApnaKhet AgriTech.',
      footerLeft: 'NPTEL / IIT Certified',
      footerRight: 'SIH Shortlist',
    },
  ];

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">

      {/* Floating ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-indigo-500/8 blur-3xl"
          animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 -right-24 w-72 h-72 rounded-full bg-violet-400/10 dark:bg-violet-500/8 blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, -18, 0], y: [0, 20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-emerald-400/8 dark:bg-emerald-500/6 blur-3xl"
          animate={{ scale: [1, 1.1, 1], y: [0, -20, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Editorial Bio — staggered reveal */}
        <motion.div
          className="max-w-3xl space-y-6 mb-12"
          variants={staggerContainer(0.12, 0)}
          initial="hidden"
          animate="show"
        >
          {/* Large Avatar + Availability Row */}
          <motion.div variants={staggerItem} className="flex items-center gap-4">
            {/* Big NR monogram */}
            <motion.div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 relative overflow-hidden shadow-lg"
              style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 55%, #06b6d4 100%)' }}
              whileHover={{ scale: 1.08, rotate: 4 }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)', backgroundSize: '200% 100%' }}
                animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
              />
              <span className="relative z-10 text-white font-black text-xl tracking-tight select-none">NR</span>
            </motion.div>

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Full Stack &amp; AI Engineering Roles</span>
            </div>
          </motion.div>

          {/* Headline — word-by-word stagger */}
          <motion.div variants={staggerItem}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              {'Nikita Rathour'.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-3 text-shimmer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="text-xl sm:text-2xl font-normal text-zinc-600 dark:text-zinc-400 leading-snug"
          >
            Full Stack Developer &amp; AI Engineer crafting{' '}
            <motion.span
              className="text-zinc-900 dark:text-zinc-100 font-medium underline decoration-zinc-400 dark:decoration-zinc-600 underline-offset-4"
              whileHover={{ color: '#6366f1' }}
              transition={{ duration: 0.2 }}
            >
              agentic AI systems
            </motion.span>
            ,{' '}
            <motion.span
              className="text-zinc-900 dark:text-zinc-100 font-medium underline decoration-zinc-400 dark:decoration-zinc-600 underline-offset-4"
              whileHover={{ color: '#8b5cf6' }}
              transition={{ duration: 0.2 }}
            >
              hybrid RAG pipelines
            </motion.span>
            , and scalable web applications.
          </motion.p>

          <motion.p variants={staggerItem} className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
            B.Tech in Computer Science &amp; Engineering at Haridwar University. Proven industry experience from enterprise software internships at BKNetwork Services and Punjab &amp; Haryana High Court.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-3 pt-2">
            <motion.a
              href="#projects"
              onClick={() => soundManager.playPop()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-medium text-xs sm:text-sm shadow-xs"
              whileHover={{ scale: 1.03, opacity: 0.92 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
            >
              <span>Explore Case Studies</span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.a>

            <motion.a
              href="#contact"
              onClick={handleHireClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium text-xs sm:text-sm"
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(244,244,245,1)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
            >
              <Mail className="w-4 h-4 text-zinc-500" />
              <span>Contact Nikita</span>
            </motion.a>

            <motion.button
              onClick={() => { soundManager.playPop(); openCommandPalette(); }}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-mono"
              whileHover={{ scale: 1.04, color: '#3b82f6' }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
            >
              <Command className="w-3.5 h-3.5" />
              <span>Cmd + K</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bento Grid — staggered card reveal */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={staggerContainer(0.13, 0.4)}
          initial="hidden"
          animate="show"
        >
          {/* Card 1: Profile */}
          <motion.div
            variants={staggerItem}
            {...hoverLift}
            className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/90 flex flex-col justify-between cursor-default card-glow"
          >
            <div className="flex items-center gap-3 mb-4">
              {/* Animated NR monogram avatar */}
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
                }}
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.25 }}
              >
                {/* Animated shimmer overlay */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
                />
                <span className="relative z-10 text-white font-black text-sm tracking-tight select-none">NR</span>
              </motion.div>
              <div>
                <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                  <span>{personal.name}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="text-xs text-zinc-500 font-mono">@nik14ta • India</div>
              </div>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
              Focused on autonomous code synthesis, multilingual legal RAG, and production React/FastAPI architectures.
            </p>
            <div className="flex items-center gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800">
              {[
                { href: personal.socials.github, icon: <GithubIcon className="w-4 h-4" />, label: 'GitHub' },
                { href: personal.socials.linkedin, icon: <LinkedinIcon className="w-4 h-4" />, label: 'LinkedIn' },
                { href: `mailto:${personal.email}`, icon: <Mail className="w-4 h-4" />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playPop()}
                  className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-label={label}
                  whileHover={{ scale: 1.2, rotate: -4 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Industry Experience */}
          <motion.div
            variants={staggerItem}
            {...hoverLift}
            className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/90 flex flex-col justify-between cursor-default card-glow"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                <Layers className="w-3.5 h-3.5 text-indigo-500" />
                <span>Industry Experience</span>
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">BKNetwork Services Pvt. Ltd.</h3>
              <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-1">Software Development Intern • 2026</div>
              <div className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-3">Punjab &amp; Haryana High Court • QA &amp; Docs</div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Enterprise HRMS &amp; LMS at BKNetwork (Python, PostgreSQL, React). QA testing &amp; User Manual for the official Punjab &amp; Haryana High Court judicial web platform.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span>2× Industry Roles</span>
              <span className="text-zinc-400">REST APIs + QA</span>
            </div>
          </motion.div>

          {/* Card 3: Honors */}
          <motion.div
            variants={staggerItem}
            {...hoverLift}
            className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/90 flex flex-col justify-between cursor-default card-glow"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                <span>Honors &amp; Accolades</span>
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">NPTEL Silver &amp; ACM Top 10%</h3>
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <motion.span
                  className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
                  whileHover={{ scale: 1.06 }}
                >
                  🥈 NPTEL 78% Silver
                </motion.span>
                <motion.span
                  className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60"
                  whileHover={{ scale: 1.06 }}
                >
                  ACM Top 10% (12/121)
                </motion.span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                NPTEL Elite + Silver Medalist in Generative AI for Computer Vision. Top 10% rank in ACM Shivalik Hackathon for ApnaKhet AgriTech.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span>NPTEL / IIT Certified</span>
              <span className="text-zinc-400">SIH Shortlist</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
