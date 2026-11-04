import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Server, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { staggerContainer, staggerItem, hoverLift, fadeUp } from '../utils/animations';

const iconMap = { Cpu, Layout, Server, Cloud };

export default function Skills() {
  const { skills } = portfolioData;
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Section Header */}
        <motion.div
          className="max-w-2xl mb-12"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Skills &amp; Production Toolkit
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Technologies, frameworks, and agentic workflows applied across live production applications and hackathon systems.
          </p>
        </motion.div>

        {/* Skills Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          {skills.categories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Cpu;
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                {...hoverLift}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
                  <motion.div
                    className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-200"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{cat.name}</h3>
                    <div className="text-[11px] text-zinc-500 font-mono">{cat.skills.length} core competencies</div>
                  </div>
                </div>

                {/* Skill Pills — staggered */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={staggerContainer(0.05, 0)}
                  initial="hidden"
                  animate={isInView ? 'show' : 'hidden'}
                >
                  {cat.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      variants={staggerItem}
                      whileHover={{ scale: 1.06, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 text-xs text-zinc-800 dark:text-zinc-200 cursor-default"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span className="font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
