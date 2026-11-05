import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Volume2, VolumeX } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

export default function NikitaMascot() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isWaving, setIsWaving] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const messages = [
    "Hi, welcome to my portfolio! ✨🌸",
    "I'm Nikita — Full Stack & AI Developer! 💻💖",
    "Check out my NPTEL Silver Medal (78%) below! 🥈✨",
    "Interned at BKNetwork & Punjab & Haryana High Court! 🏢📜",
    "Have a question? Try chatting with my AI bot in the corner! 🤖💕",
    "Thanks for visiting! Feel free to say hi! 💌",
  ];

  // Browser Text-To-Speech with a cute, friendly voice pitch
  const speakMessage = (text) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel(); // Stop any pending speech
      // Clean emojis out for smoother speech synthesis
      const cleanText = text.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '').trim();
      const utterance = new SpeechSynthesisUtterance(cleanText);

      // Look for a pleasant female voice (e.g. Google US English, Samantha, Zira)
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(
        (v) =>
          (v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Zira') || v.name.includes('Natural') || v.name.includes('Female')) &&
          v.lang.startsWith('en')
      ) || voices.find((v) => v.lang.startsWith('en'));

      if (preferredVoice) utterance.voice = preferredVoice;
      utterance.rate = 1.05; // Slightly lively
      utterance.pitch = 1.25; // Gentle, friendly, youthful pitch

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

      {/* Floating Animated Character Illustration */}
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
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Soft background glow aura */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400/25 via-rose-300/30 to-purple-400/20 blur-xl scale-125 pointer-events-none" />

        {/* Floating Sparkle Accents */}
        <motion.span
          className="absolute -top-2 -right-2 text-pink-400 text-sm pointer-events-none"
          animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          ✨
        </motion.span>
        <motion.span
          className="absolute top-1/2 -left-3 text-rose-400 text-xs pointer-events-none"
          animate={{ y: [0, -4, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          🌸
        </motion.span>

        {/* The Character SVG (Chic 22-Year-Old Young Woman Developer) */}
        <svg
          viewBox="0 0 160 210"
          className="w-40 h-52 sm:w-48 sm:h-60 drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blazerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2c1a29" />
              <stop offset="100%" stopColor="#1a0c18" />
            </linearGradient>
            <linearGradient id="laptopGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          {/* Long Elegant Flowing Hair Behind Shoulders */}
          <path
            d="M48 65 C32 90, 26 140, 38 175 C45 160, 48 135, 52 105 Z"
            fill="url(#hairGrad)"
          />
          <path
            d="M112 65 C128 90, 134 140, 122 175 C115 160, 112 135, 108 105 Z"
            fill="url(#hairGrad)"
          />

          {/* Shoulders & Stylish Rose Blazer / Fitted Top */}
          <path
            d="M50 138 C50 120, 64 114, 80 114 C96 114, 110 120, 110 138 L116 186 C116 194, 108 198, 100 198 L60 198 C52 198, 44 194, 44 186 Z"
            fill="url(#blazerGrad)"
          />
          {/* Chic inner V-neck top */}
          <path
            d="M72 114 L80 138 L88 114 Z"
            fill="#ffffff"
          />
          {/* Dainty Gold Pendant Necklace ✨ */}
          <path
            d="M74 118 Q80 132 86 118"
            stroke="#fbbf24"
            strokeWidth="1.2"
            fill="none"
          />
          <circle cx="80" cy="126" r="1.8" fill="#f59e0b" />

          {/* Blazer lapels */}
          <path
            d="M60 124 L74 150 L70 178"
            stroke="#be185d"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M100 124 L86 150 L90 178"
            stroke="#be185d"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Slender Neck */}
          <rect x="75" y="94" width="10" height="24" rx="5" fill="#fde68a" opacity="0.9" />

          {/* Elegant Oval Face */}
          <path
            d="M62 62 C62 45, 68 35, 80 35 C92 35, 98 45, 98 62 C98 82, 88 98, 80 98 C72 98, 62 82, 62 62 Z"
            fill="#fef3c7"
          />

          {/* Styled Long Brunette Hair with Side Parting & Soft Waves */}
          <path
            d="M60 62 C58 35, 70 24, 80 24 C95 24, 102 34, 100 62 C96 52, 90 44, 80 42 C70 40, 64 50, 60 62 Z"
            fill="url(#hairGrad)"
          />
          {/* Soft Hair Strands framing face */}
          <path
            d="M61 55 C59 75, 58 105, 64 120 C66 110, 66 85, 65 65 Z"
            fill="url(#hairGrad)"
          />
          <path
            d="M99 55 C101 75, 102 105, 96 120 C94 110, 94 85, 95 65 Z"
            fill="url(#hairGrad)"
          />

          {/* Chic Pearl Earrings ✨ */}
          <circle cx="61" cy="74" r="2.5" fill="#fef08a" stroke="#d97706" strokeWidth="0.5" />
          <circle cx="99" cy="74" r="2.5" fill="#fef08a" stroke="#d97706" strokeWidth="0.5" />

          {/* Natural Defined Eyebrows */}
          <path d="M68 56 Q73 52 78 55" stroke="#2c1a29" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M82 55 Q87 52 92 56" stroke="#2c1a29" strokeWidth="1.8" strokeLinecap="round" />

          {/* Expressive Warm Almond Eyes with Eyelashes */}
          {/* Left Eye */}
          <ellipse cx="73" cy="64" rx="3.8" ry="4.5" fill="#1f1224" />
          <circle cx="71.8" cy="62.5" r="1.4" fill="white" />
          <circle cx="74" cy="65.5" r="0.8" fill="white" />
          <path d="M69 60 Q74 58 78 61" stroke="#1f1224" strokeWidth="1.4" strokeLinecap="round" />

          {/* Right Eye */}
          <ellipse cx="87" cy="64" rx="3.8" ry="4.5" fill="#1f1224" />
          <circle cx="85.8" cy="62.5" r="1.4" fill="white" />
          <circle cx="88" cy="65.5" r="0.8" fill="white" />
          <path d="M82 61 Q86 58 91 60" stroke="#1f1224" strokeWidth="1.4" strokeLinecap="round" />

          {/* Subtle Delicate Nose */}
          <path d="M79 69 L80 73 L82 73" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

          {/* Soft Feminine Cheek Blush */}
          <ellipse cx="67" cy="73" rx="4.5" ry="2.5" fill="#fb7185" opacity="0.3" />
          <ellipse cx="93" cy="73" rx="4.5" ry="2.5" fill="#fb7185" opacity="0.3" />

          {/* Polished Rose Lipstick Smile 💄 */}
          <path
            d="M76 80 Q80 85 84 80"
            stroke="#e11d48"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="#f43f5e"
          />

          {/* Slim Sleek Ultrabook / Laptop */}
          <g transform="translate(56, 150)">
            {/* Laptop Base with bevel */}
            <rect x="0" y="8" width="36" height="4" rx="2" fill="#cbd5e1" />
            <rect x="1" y="9" width="34" height="2" rx="1" fill="#94a3b8" />
            {/* Glossy Sleek Screen */}
            <rect x="3" y="-14" width="30" height="22" rx="3" fill="#0f172a" />
            <rect x="5" y="-12" width="26" height="18" rx="2" fill="url(#laptopGlow)" opacity="0.85" />
            {/* Code / Analytics UI lines */}
            <line x1="8" y1="-7" x2="18" y2="-7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="-3" x2="25" y2="-3" stroke="#fed7aa" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="8" y1="1" x2="21" y2="1" stroke="#a7f3d0" strokeWidth="1.4" strokeLinecap="round" />
            {/* Manicured Hands typing */}
            <circle cx="2" cy="10" r="3.5" fill="#fef3c7" />
            <circle cx="34" cy="10" r="3.5" fill="#fef3c7" />
          </g>

          {/* Right Arm: Natural Graceful Wave 👋 */}
          <motion.g
            animate={
              isWaving
                ? { rotate: [0, 20, -16, 20, -12, 16, 0] }
                : { rotate: [0, 8, 0] }
            }
            transition={{
              duration: isWaving ? 1.1 : 3.5,
              repeat: isWaving ? 0 : Infinity,
              ease: 'easeInOut',
            }}
            style={{ transformOrigin: '110px 135px' }}
          >
            <path
              d="M110 135 C118 126, 126 112, 130 98"
              stroke="#f43f5e"
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Graceful Hand */}
            <circle cx="132" cy="94" r="4.5" fill="#fef3c7" />
            {/* Waving fingers */}
            <ellipse cx="130" cy="89" rx="1.5" ry="3.2" fill="#fef3c7" transform="rotate(-15 130 89)" />
            <ellipse cx="134" cy="88" rx="1.5" ry="3.5" fill="#fef3c7" />
            <ellipse cx="138" cy="90" rx="1.5" ry="3.2" fill="#fef3c7" transform="rotate(15 138 90)" />
          </motion.g>
        </svg>

        {/* "Tap Me!" Pill under character */}
        <motion.div
          className="mt-1 px-3 py-1 rounded-full bg-pink-100/90 dark:bg-pink-950/70 border border-pink-300/70 dark:border-pink-800/60 text-[11px] font-bold text-pink-700 dark:text-pink-300 shadow-xs flex items-center justify-center gap-1.5"
          whileHover={{ scale: 1.08 }}
        >
          <span>💖 Nikita's Avatar</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
