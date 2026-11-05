import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 text-zinc-500 text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800/60">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-bold text-zinc-900 dark:text-zinc-100 font-sans text-sm">{personal.name}</span>
            <span className="text-zinc-400 ml-2">• B.Tech CSE, Haridwar University</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {[
              { href: personal.socials.github, Icon: GithubIcon, label: 'GitHub' },
              { href: personal.socials.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.14 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors ml-2"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.14 }}
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-zinc-400 dark:text-zinc-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>© {new Date().getFullYear()} Nikita Rathour. Crafted with 💖, React 19 &amp; Tailwind.</p>
          <p>Available for Software Developer &amp; Full Stack Roles 🌸</p>
        </motion.div>
      </div>
    </footer>
  );
}
