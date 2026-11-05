import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, User, GraduationCap, Briefcase, Trophy, Code2, Medal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { staggerContainer, staggerItem, fadeUp, fadeLeft, fadeRight } from '../utils/animations';

export default function About() {
  const { about } = portfolioData;
  const { ref, isInView } = useScrollAnimation();

  const quickFacts = [
    {
      icon: Medal,
      label: 'NPTEL Certification',
      value: '🥈 Elite + Silver Medal (78%)',
      sub: 'Genetic / Generative AI for Computer Vision (IIT)',
    },
    {
      icon: Trophy,
      label: 'Hackathon Standing',
      value: 'Top 10% Rank (12th / 121 Teams)',
      sub: 'ACM Shivalik Hackathon (ApnaKhet)',
    },
    {
      icon: Briefcase,
      label: 'Industry Experience',
      value: '2× Professional Roles',
      sub: 'BKNetwork Services (Dev Intern) · Punjab & Haryana High Court (QA & Docs)',
    },
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'B.Tech Computer Science & Engineering',
      sub: 'Haridwar University (2023–2027)',
    },
    {
      icon: Code2,
      label: 'Engineering Focus',
      value: 'Agentic AI & Full Stack Architecture',
      sub: 'LangGraph, FastAPI, React.js, PostgreSQL',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Main Story */}
          <motion.div
            className="lg:col-span-7 space-y-5"
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-rose-50 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-800/60 text-rose-700 dark:text-rose-300">
              <User className="w-3.5 h-3.5 text-rose-500" />
              <span>Background &amp; Story ✨</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Engineering with Purpose &amp; Rigor
            </h2>

            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {about.paragraphs[0]}
            </p>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {about.paragraphs[1]}
            </p>

            <div className="pt-4 space-y-2.5">
              <div className="text-xs font-mono uppercase font-bold text-zinc-400 tracking-wider">
                Key Accomplishments
              </div>
              <motion.div
                variants={staggerContainer(0.09, 0)}
                initial="hidden"
                animate={isInView ? 'show' : 'hidden'}
                className="space-y-2.5"
              >
                {about.highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={staggerItem}
                    className="flex items-start gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            className="lg:col-span-5"
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
          >
            <div className="text-xs font-mono uppercase font-bold text-zinc-400 tracking-wider mb-4">
              Verified Highlights
            </div>
            <motion.div
              className="space-y-3"
              variants={staggerContainer(0.1, 0.1)}
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
            >
              {quickFacts.map((fact, idx) => {
                const Icon = fact.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={staggerItem}
                    whileHover={{ x: 4, transition: { duration: 0.18 } }}
                    className="p-4 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/90 shadow-xs flex items-start gap-3.5"
                  >
                    <motion.div
                      className="w-9 h-9 rounded-lg bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950/70 dark:to-pink-950/70 text-rose-600 dark:text-rose-300 flex items-center justify-center shrink-0 border border-rose-200/50 dark:border-rose-800/40 shadow-xs"
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono">{fact.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">{fact.value}</div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">{fact.sub}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
