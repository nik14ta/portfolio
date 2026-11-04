import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  Target,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  TrendingUp,
  Server,
  Cloud,
  Database,
  Workflow,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { soundManager } from '../utils/audio';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Problem & Solution', icon: Target },
    { id: 'challenges', label: 'Challenges Faced', icon: AlertTriangle },
    { id: 'features', label: 'Features', icon: Sparkles },
    { id: 'architecture', label: 'Architecture & Flow', icon: Workflow },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Banner with Title */}
        <div className="relative aspect-[21/9] max-h-[220px] w-full overflow-hidden bg-slate-950 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={() => {
              soundManager.playPop();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white/90 hover:text-white backdrop-blur-md border border-slate-700/60 transition-all hover:scale-105"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Badges */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white shadow-xs">
                {project.category}
              </span>
              {project.metrics && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {project.metrics}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-md">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Case Study Tab Navigation */}
        <div className="flex items-center gap-1 sm:gap-2 px-6 pt-3 pb-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 overflow-x-auto shrink-0 select-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundManager.playPop();
                  setActiveTab(tab.id);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-800 dark:text-slate-200">
          {/* TAB 1: PROBLEM & SOLUTION */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Problem Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 space-y-2">
                <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-sm">
                  <Target className="w-4 h-4" />
                  <span>The Problem We Solved</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.problem || project.description}
                </p>
              </div>

              {/* Solution Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/40 space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                  <Lightbulb className="w-4 h-4" />
                  <span>The Engineering Solution</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.solution || project.description}
                </p>
              </div>

              {/* Technologies Involved */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-500" />
                  Primary Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CHALLENGES FACED */}
          {activeTab === 'challenges' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Real-World Hurdles & Resolutions
              </div>

              {project.challenges && project.challenges.length > 0 ? (
                project.challenges.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3"
                  >
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm sm:text-base">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>{item.title}</span>
                    </div>

                    <div className="space-y-1.5 pl-6 border-l-2 border-amber-300/60 dark:border-amber-700/60">
                      <div className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500">
                        The Challenge:
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>

                    <div className="space-y-1.5 pl-6 border-l-2 border-emerald-400/60 dark:border-emerald-700/60 pt-1">
                      <div className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400">
                        How It Was Resolved:
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                        {item.resolution}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">No specific challenge notes available.</p>
              )}
            </div>
          )}

          {/* TAB 3: KEY FEATURES */}
          {activeTab === 'features' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Core Capabilities & User Features
              </div>
              <div className="grid grid-cols-1 gap-3">
                {project.features && project.features.length > 0 ? (
                  project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {feat}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">Feature details coming soon.</p>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: ARCHITECTURE & DATA FLOW */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                System Architecture Layers
              </div>

              {project.architecture ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                      <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
                        <Cpu className="w-4 h-4" />
                        Client Layer
                      </div>
                      <p className="text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-200">
                        {project.architecture.client}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                      <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 text-xs font-bold uppercase tracking-wider mb-1">
                        <Server className="w-4 h-4" />
                        API & Logic Layer
                      </div>
                      <p className="text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-200">
                        {project.architecture.api}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                        <Database className="w-4 h-4" />
                        Data & Caching
                      </div>
                      <p className="text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-200">
                        {project.architecture.data}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                      <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 text-xs font-bold uppercase tracking-wider mb-1">
                        <Cloud className="w-4 h-4" />
                        Infra & Cloud
                      </div>
                      <p className="text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-200">
                        {project.architecture.infra}
                      </p>
                    </div>
                  </div>

                  {/* Data Flow Pipeline Box - Visual Step Flow */}
                  {project.architecture.dataFlow && (
                    <div className="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 space-y-3">
                      <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-xs uppercase tracking-wider">
                        <Workflow className="w-4 h-4" />
                        <span>How It Works: Step-by-Step Data Flow</span>
                      </div>

                      {/* Visual Flow Nodes */}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {project.architecture.dataFlow.split('➜').map((step, sIdx, arr) => (
                          <React.Fragment key={sIdx}>
                            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/60 shadow-xs text-xs font-semibold text-slate-800 dark:text-slate-200">
                              <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/80 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-[10px] font-bold shrink-0">
                                {sIdx + 1}
                              </span>
                              <span>{step.trim()}</span>
                            </div>
                            {sIdx < arr.length - 1 && (
                              <ArrowRight className="w-3.5 h-3.5 text-indigo-400 dark:text-indigo-500 shrink-0 hidden sm:inline-block" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-sm text-slate-500">Architecture details coming soon.</p>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Sticky Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playPop()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-xs sm:text-sm transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Repository</span>
          </a>

          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playPop()}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-600/30 transition-all hover:scale-105"
          >
            <span>Launch Live Demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
