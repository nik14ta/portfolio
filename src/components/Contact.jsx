import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { staggerContainer, staggerItem, fadeUp, fadeLeft, fadeRight } from '../utils/animations';

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const { ref, isInView } = useScrollAnimation();

  const handleCopyEmail = () => {
    soundManager.playPop();
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    confetti({ particleCount: 30, spread: 40, origin: { y: 0.8 } });
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    soundManager.playPop();
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    confetti({ particleCount: 30, spread: 40, origin: { y: 0.8 } });
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    soundManager.playSuccess();
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
    setFormSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Hi Nikita,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;
    }, 900);
  };

  const contactCards = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      action: handleCopyEmail,
      copied: copiedEmail,
    },
    {
      icon: Phone,
      label: 'Phone / Mobile',
      value: personal.phone,
      action: handleCopyPhone,
      copied: copiedPhone,
      href: `tel:${personal.phone}`,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-12"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-rose-50 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-rose-500" />
            <span>Get in Touch 💌</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Let's Connect &amp; Build
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Open to entry-level Software Developer, Full Stack, and AI Engineering roles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Contact Cards */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  variants={staggerItem}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.18 }}
                  className="p-4 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/90 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950/70 dark:to-pink-950/70 flex items-center justify-center text-rose-600 dark:text-rose-300 shrink-0 border border-rose-200/50 dark:border-rose-800/40 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">{card.label}</div>
                      {card.href ? (
                        <a href={card.href} className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:underline">
                          {card.value}
                        </a>
                      ) : (
                        <div className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 break-all">{card.value}</div>
                      )}
                    </div>
                  </div>
                  <motion.button
                    onClick={card.action}
                    className="p-2 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    whileHover={{ scale: 1.15, rotate: -6 }}
                    whileTap={{ scale: 0.9 }}
                    title={`Copy ${card.label}`}
                  >
                    <AnimatePresence mode="wait">
                      {card.copied ? (
                        <motion.span
                          key="check"
                          initial={{ scale: 0, rotate: -20 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0 }}
                        >
                          <Check className="w-4 h-4 text-emerald-500" />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Copy className="w-4 h-4" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              );
            })}

            {/* Social profiles */}
            <motion.div
              variants={staggerItem}
              className="p-4 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/90 flex items-center justify-between"
            >
              <span className="text-xs text-zinc-500">Social Profiles:</span>
              <div className="flex items-center gap-2">
                {[
                  { href: personal.socials.github, icon: GithubIcon, label: 'GitHub' },
                  { href: personal.socials.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
                ].map(({ href, icon: Ic, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    aria-label={label}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Ic className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Message form */}
          <motion.div
            className="lg:col-span-7"
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
          >
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/90 shadow-xs">
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-4">Send a Message</h3>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center space-y-2"
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Check className="w-5 h-5" />
                    </motion.div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Drafting in your email client...</h4>
                    <p className="text-xs text-zinc-500">You can also email directly to {personal.email}</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-3.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {['name', 'email'].map((field) => (
                        <div key={field}>
                          <label className="block text-[11px] font-medium text-zinc-600 dark:text-zinc-400 mb-1 capitalize">{field}</label>
                          <motion.input
                            type={field === 'email' ? 'email' : 'text'}
                            name={field}
                            required
                            value={formData[field]}
                            onChange={handleChange}
                            placeholder={field === 'email' ? 'your.email@example.com' : 'Your name'}
                            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent text-xs text-zinc-900 dark:text-zinc-100 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200/50 transition-all"
                            whileFocus={{ scale: 1.01 }}
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-zinc-600 dark:text-zinc-400 mb-1">Subject</label>
                      <motion.input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Opportunity / Project inquiry"
                        className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent text-xs text-zinc-900 dark:text-zinc-100 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200/50 transition-all"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-zinc-600 dark:text-zinc-400 mb-1">Message</label>
                      <motion.textarea
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hi Nikita, I'd like to talk about..."
                        className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent text-xs text-zinc-900 dark:text-zinc-100 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200/50 resize-none transition-all"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-white font-semibold text-xs shadow-md shadow-rose-500/25 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.16 }}
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message ✨</span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
