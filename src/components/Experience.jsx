import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase, GraduationCap, Award, Calendar, MapPin,
  Trophy, Medal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { staggerContainer, staggerItem, fadeUp, scaleIn } from '../utils/animations';

const tabVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
  exit:  { opacity: 0, y: -10, transition: { duration: 0.22 } },
};

export default function Experience() {
  const { experience, education, certifications, achievements } = portfolioData;
  const [activeTab, setActiveTab] = useState('experience');
  const { ref, isInView } = useScrollAnimation();

  const tabs = [
    { id: 'experience', label: 'Work Experience', icon: Briefcase },
    { id: 'achievements', label: 'Hackathons & Honors', icon: Trophy, iconClass: 'text-amber-500' },
    { id: 'education', label: 'Education', icon: GraduationCap },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-pink-100/80 dark:bg-pink-950/70 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800 mb-3 shadow-2xs">
            <Briefcase className="w-3.5 h-3.5 text-rose-500" />
            <span>Career Milestones ✨</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-pink-50 tracking-tight">
            Experience, Education &amp; Honors
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-pink-200/70 text-sm sm:text-base">
            Enterprise software development, competitive hackathon standings, and academic foundations.
          </p>
        </motion.div>

        {/* Tab Controls */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="inline-flex p-1.5 rounded-2xl bg-white/80 dark:bg-pink-950/60 border border-pink-200/60 dark:border-pink-900/60 flex-wrap justify-center gap-1 shadow-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => { soundManager.playPop(); setActiveTab(tab.id); }}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xs'
                      : 'text-zinc-600 dark:text-pink-200/70 hover:text-pink-700 dark:hover:text-pink-100'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.14 }}
                >
                  <Icon className={`w-4 h-4 ${tab.iconClass || ''}`} />
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Panels — AnimatePresence for smooth cross-fade */}
        <AnimatePresence mode="wait">

          {/* ── WORK EXPERIENCE ── */}
          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              variants={tabVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="relative border-l-2 border-indigo-200 dark:border-indigo-900/60 ml-4 sm:ml-6 space-y-12"
            >
              {experience.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="relative pl-6 sm:pl-8 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.14, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Timeline dot with pulse */}
                  <span className="absolute -left-[9px] top-1.5 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-30" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-indigo-400" />
                  </span>

                  <motion.div
                    className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                    whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
                    transition={{ duration: 0.22 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.role}</h3>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{item.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />{item.location}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4">{item.description}</p>

                    <ul className="space-y-2 mb-5">
                      {item.achievements.map((ach, aIdx) => (
                        <motion.li
                          key={aIdx}
                          className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + aIdx * 0.06 }}
                        >
                          <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">›</span>
                          <span>{ach}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                      {item.technologies.map((tech, tIdx) => (
                        <motion.span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                          whileHover={{ scale: 1.08, y: -1 }}
                          transition={{ duration: 0.12 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ── HACKATHONS & HONORS ── */}
          {activeTab === 'achievements' && (
            <motion.div
              key="achievements"
              variants={tabVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.div
                className="grid grid-cols-1 gap-5"
                variants={staggerContainer(0.1, 0)}
                initial="hidden"
                animate="show"
              >
                {achievements && achievements.map((ach, idx) => {
                  const isSilver = ach.isSilverMedal;
                  return (
                    <motion.div
                      key={idx}
                      variants={staggerItem}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className={`p-6 rounded-2xl bg-white dark:bg-slate-900 border shadow-sm flex flex-col sm:flex-row items-start gap-4 ${
                        isSilver
                          ? 'border-slate-300 dark:border-slate-700 ring-1 ring-slate-200/50 dark:ring-slate-800/50'
                          : 'border-slate-200 dark:border-slate-800 hover:border-amber-400/50'
                      }`}
                    >
                      <motion.div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                          isSilver
                            ? 'bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 border border-slate-300/80 dark:border-slate-600/80'
                            : 'bg-amber-50 dark:bg-amber-950/60 border border-amber-200/50 dark:border-amber-800/50'
                        }`}
                        whileHover={{ rotate: isSilver ? 5 : 10, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isSilver
                          ? <Medal className="w-6 h-6 text-slate-700 dark:text-slate-200" />
                          : <Trophy className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
                      </motion.div>

                      <div className="flex-1 space-y-1.5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="text-base font-bold text-slate-900 dark:text-white">{ach.title}</h4>
                            {isSilver && (
                              <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700">
                                🥈 Silver Medal (78%)
                              </span>
                            )}
                          </div>
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full self-start sm:self-auto ${
                            isSilver
                              ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700'
                              : 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60'
                          }`}>
                            {ach.date}
                          </span>
                        </div>
                        <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{ach.subtitle}</div>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">{ach.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}

          {/* ── EDUCATION ── */}
          {activeTab === 'education' && (
            <motion.div
              key="education"
              variants={tabVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="space-y-8"
            >
              {/* Degree */}
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Academic Degree</span>
                </h3>
                <div className="space-y-4">
                  {education.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                        <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{edu.period}</span>
                      </div>
                      <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                        {edu.institution} • {edu.location}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3">{edu.description}</p>
                      {edu.honors && (
                        <div className="flex flex-wrap gap-2">
                          {edu.honors.map((honor, hIdx) => (
                            <motion.span
                              key={hIdx}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60"
                              whileHover={{ scale: 1.06 }}
                            >
                              ★ {honor}
                            </motion.span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Specialized Competencies &amp; Certifications</span>
                </h3>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  variants={staggerContainer(0.09, 0)}
                  initial="hidden"
                  animate="show"
                >
                  {certifications.map((cert, idx) => (
                    <motion.div
                      key={idx}
                      variants={staggerItem}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className={`p-5 rounded-2xl bg-white dark:bg-slate-900 border shadow-sm flex flex-col justify-between gap-3 ${
                        cert.highlight
                          ? 'border-slate-300 dark:border-slate-700 ring-1 ring-slate-200 dark:ring-slate-800'
                          : 'border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <motion.div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            cert.highlight
                              ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700'
                              : 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400'
                          }`}
                          whileHover={{ rotate: 8, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {cert.highlight ? <Medal className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">{cert.name}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{cert.issuer} • {cert.date}</p>
                        </div>
                      </div>

                      {cert.score && (
                        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Credence</span>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                            cert.highlight
                              ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono border border-slate-300 dark:border-slate-700'
                              : 'text-indigo-600 dark:text-indigo-400'
                          }`}>
                            {cert.score}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
