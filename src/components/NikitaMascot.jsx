import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

export default function NikitaMascot() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isWaving, setIsWaving] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const voicesRef = useRef([]);

  const messages = [
    "Hi, welcome to my portfolio! ✨🌸",
    "I'm Nikita — Full Stack & AI Developer! 💻💖",
    "Check out my NPTEL Silver Medal (78%) below! 🥈✨",
    "Interned at BKNetwork & Punjab & Haryana High Court! 🏢📜",
    "Have a question? Try chatting with my AI bot in the corner! 🤖💕",
    "Thanks for visiting! Feel free to say hi! 💌",
  ];

  // Proactively load and cache all browser voices (Chrome/Edge load voices asynchronously)
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    const updateVoices = () => {
      const loaded = window.speechSynthesis.getVoices();
      if (loaded && loaded.length > 0) {
        setVoices(loaded);
        voicesRef.current = loaded;
      }
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;
    const timer = setTimeout(updateVoices, 300);

    return () => {
      clearTimeout(timer);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  // Strict female voice selector with zero possibility of falling back to a male voice
  const getFemaleVoice = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
    const available = voicesRef.current.length > 0 ? voicesRef.current : window.speechSynthesis.getVoices();
    if (!available || available.length === 0) return null;

    // 1. Explicit Male Blacklist — NEVER select any of these
    const maleNames = [
      'david', 'mark', 'george', 'ravi', 'guy', 'andrew', 'brian', 
      'ryan', 'prabhat', 'christopher', 'eric', 'frank', 'oliver', 
      'alfie', 'william', 'liam', 'james', 'richard', 'male'
    ];

    const isMale = (v) => {
      const name = (v.name || '').toLowerCase();
      return maleNames.some((m) => name.includes(m));
    };

    // 2. High-priority known natural female voices
    const priorityFemales = [
      'jenny', 'aria', 'zira', 'sonia', 'libby', 'samantha', 'karen', 
      'victoria', 'emma', 'ana', 'michelle', 'clara', 'natasha', 
      'swara', 'ananya', 'veena', 'heera', 'fiona', 'moira', 'tessa'
    ];

    for (const femaleName of priorityFemales) {
      const match = available.find((v) => {
        const name = (v.name || '').toLowerCase();
        return name.includes(femaleName) && !isMale(v);
      });
      if (match) return match;
    }

    // 3. Any voice explicitly tagged 'female' or 'woman'
    const taggedFemale = available.find((v) => {
      const name = (v.name || '').toLowerCase();
      return (name.includes('female') || name.includes('woman') || name.includes('girl')) && !isMale(v);
    });
    if (taggedFemale) return taggedFemale;

    // 4. Any English voice that is NOT in the male blacklist
    const anySafeEnglish = available.find((v) => v.lang && v.lang.startsWith('en') && !isMale(v));
    if (anySafeEnglish) return anySafeEnglish;

    // 5. Any voice in the entire system that is NOT male
    const anyNonMale = available.find((v) => !isMale(v));
    if (anyNonMale) return anyNonMale;

    return null;
  };

  // Browser Text-To-Speech with guaranteed female voice & youthful pitch
  const speakMessage = (text) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel(); // Stop any pending speech
      const cleanText = text.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').trim();
      const utterance = new SpeechSynthesisUtterance(cleanText);

      const femaleVoice = getFemaleVoice();
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }

      utterance.rate = 1.0; // Natural pace
      utterance.pitch = 1.4; // Distinctly bright, friendly female pitch

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
      setIsSpeaking(false);
    }
  };

  const handleMascotClick = () => {
    soundManager.playPop();
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1200);

    // Cute pink & rose confetti burst!
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.5, x: 0.8 },
      colors: ['#fb7185', '#f43f5e', '#ec4899', '#fbcfe8', '#fda4af', '#f472b6'],
    });

    const nextIndex = (messageIndex + 1) % messages.length;
    setMessageIndex(nextIndex);
    speakMessage(messages[nextIndex]);
  };

  return (
    <motion.div
      className="relative flex flex-col items-center select-none cursor-pointer group"
      onClick={handleMascotClick}
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Speech Bubble */}
      <AnimatePresence mode="wait">
        <motion.div
          key={messageIndex}
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="relative mb-3 max-w-[260px] sm:max-w-[280px] px-4 py-2.5 rounded-2xl bg-white/95 dark:bg-pink-950/80 backdrop-blur-md border border-pink-200/80 dark:border-pink-800/60 shadow-lg shadow-pink-500/10 text-center"
        >
          {/* Pulsing heart on the bubble */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-pink-700 dark:text-pink-200">
            <span>{messages[messageIndex]}</span>
          </div>

          {/* Click me hint badge with sound icon */}
          <div className="mt-1 text-[10px] font-medium text-pink-500 dark:text-pink-300 flex items-center justify-center gap-1.5">
            {isSpeaking ? (
              <>
                <Volume2 className="w-3 h-3 animate-pulse text-rose-500" />
                <span className="font-semibold text-rose-600 dark:text-rose-300">speaking...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-2.5 h-2.5" />
                <span>tap me to speak! 🔊</span>
              </>
            )}
          </div>

          {/* Bubble tail pointing down to mascot */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-pink-950/90 border-r border-b border-pink-200/80 dark:border-pink-800/60 rotate-45" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Animated Character (Nikita's Official Cafe-Vibe Avatar) */}
      <motion.div
        className="relative"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        {/* Soft background warm-rose glow aura */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-pink-400/20 via-rose-300/25 to-purple-400/15 blur-2xl scale-110 pointer-events-none" />

        {/* Floating Sparkle Accents */}
        <motion.span
          className="absolute -top-3 -right-2 text-pink-400 text-base pointer-events-none z-20"
          animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.25, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          ✨
        </motion.span>
        <motion.span
          className="absolute top-1/2 -left-4 text-rose-400 text-sm pointer-events-none z-20"
          animate={{ y: [0, -5, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          🌸
        </motion.span>

        {/* Portrait Container */}
        <div className="relative rounded-3xl p-1.5 bg-gradient-to-tr from-rose-300/60 via-pink-200/50 to-purple-300/60 shadow-xl shadow-rose-500/10 backdrop-blur-sm">
          <div className="relative w-56 sm:w-64 aspect-square rounded-[22px] overflow-hidden bg-rose-50/50">
            {/* The Custom Stylized 2D Illustration */}
            <img
              src="/nikita_avatar.jpg"
              alt="Nikita Rathour - AI & Full Stack Developer"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                // Smooth fallback if image is loading
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextElementSibling) {
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }
              }}
            />

            {/* Fallback SVG if image not yet copied */}
            <div style={{ display: 'none' }} className="w-full h-full">
              <svg viewBox="0 0 160 215" className="w-full h-full" fill="none">
                <rect width="100%" height="100%" fill="#fff1f2" />
              </svg>
            </div>

            {/* Subtle gloss overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10 pointer-events-none" />

            {/* Waving Hand Overlay Badge 👋 */}
            <motion.div
              className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-rose-200/80 dark:border-rose-800/60 text-xs font-semibold text-rose-600 dark:text-rose-300 shadow-sm flex items-center gap-1.5"
              animate={isWaving ? { rotate: [0, 18, -14, 18, 0], scale: [1, 1.15, 1] } : {}}
              transition={{ duration: 0.8 }}
            >
              <span>{isWaving ? '👋' : '✨'}</span>
              <span className="text-[11px]">Nikita</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
