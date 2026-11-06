import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, ShieldCheck, Trophy, Layers, Cpu, Command, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';
import NikitaMascot from './NikitaMascot';
import {
  fadeUp, fadeIn, staggerContainer, staggerItem, hoverLift, springTap
} from '../utils/animations';

export default function Hero({ openCommandPalette }) {
  const { personal } = portfolioData;

  const handleHireClick = () => {
    soundManager.playSuccess();
    confetti({
      particleCount: 85,
      spread: 65,
      origin: { y: 0.6 },
      colors: ['#fb7185', '#f43f5e', '#ec4899', '#fbcfe8', '#a855f7'],
    });
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">

      {/* Floating Dreamy Ambient Orbs (Soft, muted on mobile to prevent over-saturation) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-20 w-[380px] h-[380px] rounded-full bg-pink-200/15 sm:bg-pink-300/20 dark:bg-pink-600/8 blur-3xl"
          animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-purple-200/15 sm:bg-purple-300/18 dark:bg-purple-600/8 blur-3xl"
          animate={{ scale: [1, 1.12, 1], x: [0, -15, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-rose-100/15 sm:bg-rose-200/18 dark:bg-rose-500/8 blur-3xl"
          animate={{ scale: [1, 1.1, 1], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Header Grid: Bio on Left + Animated Character on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">

          {/* Left Column: Headline & Intro */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={staggerContainer(0.12, 0)}
            initial="hidden"
            animate="show"
          >
            {/* Availability Pill */}
            <motion.div variants={staggerItem}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-pink-100/80 dark:bg-pink-950/70 border border-pink-200 dark:border-pink-800/80 text-pink-700 dark:text-pink-300 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                </span>
                <span>Available for Full Stack &amp; AI Engineering Roles 🌸</span>
              </div>
            </motion.div>

            {/* Headline — Word by Word with Shimmer */}
            <motion.div variants={staggerItem}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                {'Nikita Rathour'.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-3 text-shimmer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-2xl font-normal text-rose-950/80 dark:text-pink-200/90 leading-snug"
            >
              Building thoughtful{' '}
              <motion.span
                className="text-pink-700 dark:text-pink-300 font-semibold underline decoration-pink-300 dark:decoration-pink-600 underline-offset-4"
                whileHover={{ color: '#f43f5e' }}
              >
                agentic AI tools
              </motion.span>
              , smart{' '}
              <motion.span
                className="text-purple-700 dark:text-purple-300 font-semibold underline decoration-purple-300 dark:decoration-purple-600 underline-offset-4"
                whileHover={{ color: '#a855f7' }}
              >
                search pipelines
              </motion.span>
              , and clean, aesthetic web apps. 💖
            </motion.p>

            <motion.p variants={staggerItem} className="text-sm sm:text-base text-zinc-600 dark:text-pink-100/70 leading-relaxed max-w-xl">
              CS undergrad at Haridwar University. Previously interned at BKNetwork Services and Punjab &amp; Haryana High Court. Open to full-time &amp; internship roles!
            </motion.p>

            {/* CTAs in Pinterest Palette */}
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-3 pt-2">
              <motion.a
                href="#projects"
                onClick={() => soundManager.playPop()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-pink-500/25"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.18 }}
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playPop()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/90 dark:bg-pink-950/60 border border-pink-200/80 dark:border-pink-800/60 text-pink-900 dark:text-pink-200 font-semibold text-xs sm:text-sm hover:bg-pink-50/80 dark:hover:bg-pink-900/50 shadow-2xs"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.18 }}
              >
                <span>View Resume 📄</span>
              </motion.a>

              <motion.a
                href="#contact"
                onClick={handleHireClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/90 dark:bg-pink-950/60 border border-pink-200/80 dark:border-pink-800/60 text-pink-900 dark:text-pink-200 font-semibold text-xs sm:text-sm hover:bg-pink-50/80 dark:hover:bg-pink-900/50 shadow-2xs"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.18 }}
              >
                <Mail className="w-4 h-4 text-pink-500" />
                <span>Contact Nikita</span>
              </motion.a>

              <motion.button
                onClick={() => { soundManager.playPop(); openCommandPalette(); }}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-pink-50/80 dark:bg-pink-950/50 border border-pink-200/80 dark:border-pink-800/60 text-pink-600 dark:text-pink-300 text-xs font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Command className="w-3.5 h-3.5" />
                <span>Cmd + K</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated Nikita Mascot Character! */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <NikitaMascot />
          </motion.div>

        </div>

        {/* Bento Grid: Aesthetic Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={staggerContainer(0.13, 0.4)}
          initial="hidden"
          animate="show"
        >
          {/* Card 1: Profile & Identity */}
          <motion.div
            variants={staggerItem}
            className="p-6 rounded-3xl bg-white/90 dark:bg-pink-950/40 border border-pink-100 dark:border-pink-900/50 flex flex-col justify-between cursor-default card-glow shadow-xs"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 relative overflow-hidden shadow-sm"
                style={{
                  background: 'linear-gradient(135deg, #fb7185 0%, #ec4899 50%, #c084fc 100%)',
                }}
                whileHover={{ scale: 1.1, rotate: 3 }}
              >
                <span className="relative z-10 text-white font-black text-sm tracking-tight select-none">NR</span>
              </motion.div>
              <div>
                <div className="text-sm font-bold text-zinc-900 dark:text-pink-100 flex items-center gap-1.5">
                  <span>{personal.name}</span>
                  <ShieldCheck className="w-4 h-4 text-rose-500" />
                </div>
                <div className="text-xs text-pink-500 dark:text-pink-400 font-mono">@nik14ta • India 🌸</div>
              </div>
            </div>
            <p className="text-xs text-zinc-600 dark:text-pink-200/70 leading-relaxed mb-4">
              Focused on autonomous code synthesis, multilingual legal RAG, and production React/FastAPI architectures.
            </p>
            <div className="flex items-center gap-2 pt-3 border-t border-pink-100 dark:border-pink-900/40">
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
                  className="p-2 rounded-xl text-pink-600 dark:text-pink-300 hover:bg-pink-100/80 dark:hover:bg-pink-900/50 transition-colors"
                  aria-label={label}
                  whileHover={{ scale: 1.15, rotate: -4 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Industry Experience */}
          <motion.div
            variants={staggerItem}
            className="p-6 rounded-3xl bg-white/90 dark:bg-pink-950/40 border border-pink-100 dark:border-pink-900/50 flex flex-col justify-between cursor-default card-glow shadow-xs"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pink-500 dark:text-pink-400 mb-2">
                <Layers className="w-3.5 h-3.5 text-rose-500" />
                <span>Industry Experience</span>
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-pink-100 mb-1">BKNetwork Services Pvt. Ltd.</h3>
              <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-1">Software Development Intern • 2026</div>
              <div className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-3">Punjab &amp; Haryana High Court • QA &amp; Docs</div>
              <p className="text-xs text-zinc-600 dark:text-pink-200/70 leading-relaxed">
                Enterprise HRMS &amp; LMS at BKNetwork (Python, PostgreSQL, React). QA testing &amp; User Manual for the official Punjab &amp; Haryana High Court judicial web platform.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-pink-100 dark:border-pink-900/40 flex items-center justify-between text-[11px] text-pink-600 dark:text-pink-300 font-mono">
              <span>2× Industry Roles</span>
              <span className="text-pink-400 dark:text-pink-500">REST APIs + QA</span>
            </div>
          </motion.div>

          {/* Card 3: Honors & Accolades */}
          <motion.div
            variants={staggerItem}
            className="p-6 rounded-3xl bg-white/90 dark:bg-pink-950/40 border border-pink-100 dark:border-pink-900/50 flex flex-col justify-between cursor-default card-glow shadow-xs"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pink-500 dark:text-pink-400 mb-2">
                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                <span>Honors &amp; Accolades</span>
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-pink-100 mb-1">NPTEL Silver &amp; ACM Top 10%</h3>
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <motion.span
                  className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-pink-900/40 text-slate-800 dark:text-pink-200 border border-slate-300 dark:border-pink-800/60"
                  whileHover={{ scale: 1.06 }}
                >
                  🥈 NPTEL 78% Silver
                </motion.span>
                <motion.span
                  className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-pink-50 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800/60"
                  whileHover={{ scale: 1.06 }}
                >
                  ACM Top 10% (12/121)
                </motion.span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-pink-200/70 leading-relaxed">
                NPTEL Elite + Silver Medalist in Generative AI for Computer Vision. Top 10% rank in ACM Shivalik Hackathon for ApnaKhet AgriTech.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-pink-100 dark:border-pink-900/40 flex items-center justify-between text-[11px] text-pink-600 dark:text-pink-300 font-mono">
              <span>NPTEL / IIT Certified</span>
              <span className="text-pink-400 dark:text-pink-500">SIH Shortlist</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
