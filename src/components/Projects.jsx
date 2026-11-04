import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Workflow,
  ArrowRight,
  Code2,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import ProjectModal from './ProjectModal';
import { getProjectPreview } from './ProjectPreviews';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { staggerContainer, staggerItem, fadeUp } from '../utils/animations';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const { ref, isInView } = useScrollAnimation();

  const categories = ['All', 'Full-Stack', 'Backend', 'Frontend'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleFilterClick = (cat) => {
    soundManager.playPop();
    setActiveCategory(cat);
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Section Header */}
        <motion.div
          className="max-w-2xl mb-12"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 mb-3">
            <Code2 className="w-3.5 h-3.5 text-zinc-500" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Engineered Systems &amp; Products
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Detailed case studies with real architectural decisions, challenges faced, and system workflows.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 select-none"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => handleFilterClick(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.14 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid — AnimatePresence for filter transitions */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                layout
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
                className="flex flex-col rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xs group cursor-default"
              >
                {/* Technical Preview */}
                <motion.div
                  onClick={() => { soundManager.playPop(); setSelectedProject(project); }}
                  className="cursor-pointer overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {getProjectPreview(project.id)}
                </motion.div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono uppercase font-semibold text-zinc-500">
                        {project.category}
                      </span>
                      {project.metrics && (
                        <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 truncate max-w-[200px]">
                          {project.metrics}
                        </span>
                      )}
                    </div>

                    <h3
                      onClick={() => { soundManager.playPop(); setSelectedProject(project); }}
                      className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2 cursor-pointer group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-4 text-[11px] leading-relaxed">
                      <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-zinc-800/80">
                        <span className="font-semibold text-zinc-900 dark:text-zinc-200">Problem: </span>
                        <span className="text-zinc-600 dark:text-zinc-400 line-clamp-2">{project.problem}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <motion.button
                      onClick={() => { soundManager.playPop(); setSelectedProject(project); }}
                      className="w-full mb-4 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/60 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold border border-zinc-200/60 dark:border-zinc-700/60 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Workflow className="w-3.5 h-3.5 text-zinc-500" />
                      <span>View Architecture &amp; Challenges</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </motion.button>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 4).map((tag, tIdx) => (
                        <motion.span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                          whileHover={{ scale: 1.08, y: -1 }}
                          transition={{ duration: 0.12 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] text-zinc-500">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playPop()}
                        className="inline-flex items-center gap-1.5 font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        whileHover={{ x: -2 }}
                        transition={{ duration: 0.14 }}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code Repository</span>
                      </motion.a>

                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playPop()}
                        className="inline-flex items-center gap-1 font-semibold text-zinc-900 dark:text-zinc-100 hover:underline"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.14 }}
                      >
                        <span>Explore</span>
                        <ExternalLink className="w-3 h-3" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
