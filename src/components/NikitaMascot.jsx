import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

export default function NikitaMascot() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isWaving, setIsWaving] = useState(false);

  const messages = [
    "Hi, it's Nikita! ✨ Welcome to my portfolio! 🌸",
    "I love building autonomous AI agents & aesthetic web apps! 💻💖",
    "Check out my NPTEL Silver Medal (78%) below! 🥈✨",
    "Interned at BKNetwork & Punjab & Haryana High Court! 🏢📜",
    "Have a question? Try chatting with my AI bot in the corner! 🤖💕",
    "Thanks for visiting! Feel free to say hi! 💌",
  ];

  const handleMascotClick = () => {
    soundManager.playPop();
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1200);

    // Cute pink & rose confetti burst!
    confetti({
      particleCount: 40,
      spread: 55,
      origin: { y: 0.5, x: 0.8 },
      colors: ['#fb7185', '#f43f5e', '#ec4899', '#fbcfe8', '#fda4af', '#f472b6'],
    });

    setMessageIndex((prev) => (prev + 1) % messages.length);
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

          {/* Click me hint badge */}
          <div className="mt-1 text-[10px] font-medium text-pink-400 dark:text-pink-400 flex items-center justify-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />
            <span>tap me to chat!</span>
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

        {/* The Character SVG (Cute Developer Chibi Nikita) */}
        <svg
          viewBox="0 0 160 180"
          className="w-36 h-40 sm:w-44 sm:h-48 drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hair Back */}
          <path
            d="M38 65 C30 95, 26 130, 36 150 C44 145, 46 115, 48 95 Z"
            fill="#2c1a29"
          />
          <path
            d="M122 65 C130 95, 134 130, 124 150 C116 145, 114 115, 112 95 Z"
            fill="#2c1a29"
          />

          {/* Body / Cute Pink Hoodie */}
          <path
            d="M48 130 C48 115, 62 108, 80 108 C98 108, 112 115, 112 130 L118 165 C118 172, 112 176, 105 176 L55 176 C48 176, 42 172, 42 165 Z"
            fill="#fda4af"
          />
          {/* Hoodie pocket & collar */}
          <path
            d="M66 112 C72 122, 88 122, 94 112"
            stroke="#f43f5e"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M60 148 C60 142, 100 142, 100 148 L96 166 L64 166 Z"
            fill="#fecdd3"
          />
          {/* Little heart icon on hoodie */}
          <path
            d="M80 135 C77 131, 72 131, 72 136 C72 141, 80 146, 80 146 C80 146, 88 141, 88 136 C88 131, 83 131, 80 135 Z"
            fill="#f43f5e"
          />

          {/* Neck */}
          <rect x="74" y="98" width="12" height="14" rx="4" fill="#fed7aa" />

          {/* Head */}
          <circle cx="80" cy="68" r="34" fill="#ffedd5" />

          {/* Cute Haircut (Bangs & Framing) */}
          <path
            d="M46 64 C46 36, 60 26, 80 26 C100 26, 114 36, 114 64 C114 68, 108 55, 102 52 C96 50, 92 56, 84 52 C78 50, 74 56, 68 52 C60 55, 46 68, 46 64 Z"
            fill="#361f32"
          />

          {/* Cute Hair Ribbon / Bow on Side 🎀 */}
          <g transform="translate(102, 34)">
            <ellipse cx="0" cy="0" rx="6" ry="4" fill="#fb7185" transform="rotate(-25)" />
            <ellipse cx="8" cy="-3" rx="6" ry="4" fill="#fb7185" transform="rotate(25)" />
            <circle cx="4" cy="-1" r="3" fill="#f43f5e" />
          </g>

          {/* Left Eye (Sparkling & Happy) */}
          <ellipse cx="68" cy="68" rx="4.5" ry="6" fill="#31192e" />
          <circle cx="66.5" cy="66" r="2" fill="white" />
          <circle cx="69.5" cy="71" r="1" fill="white" />

          {/* Right Eye (Sparkling or Winking) */}
          <ellipse cx="92" cy="68" rx="4.5" ry="6" fill="#31192e" />
          <circle cx="90.5" cy="66" r="2" fill="white" />
          <circle cx="93.5" cy="71" r="1" fill="white" />

          {/* Eyebrows */}
          <path d="M63 59 Q68 56 73 59" stroke="#361f32" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M87 59 Q92 56 97 59" stroke="#361f32" strokeWidth="1.8" strokeLinecap="round" />

          {/* Cute Pink Blushing Cheeks 🌸 */}
          <ellipse cx="61" cy="76" rx="6" ry="3.5" fill="#f43f5e" opacity="0.35" />
          <ellipse cx="99" cy="76" rx="6" ry="3.5" fill="#f43f5e" opacity="0.35" />

          {/* Happy Smiling Mouth */}
          <path
            d="M75 77 Q80 84 85 77"
            stroke="#e11d48"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="#fda4af"
          />

          {/* Left Hand Holding Mini Laptop with Glowing Screen */}
          <g transform="translate(54, 138)">
            {/* Laptop Base */}
            <rect x="0" y="8" width="36" height="5" rx="2" fill="#e2e8f0" />
            {/* Laptop Screen */}
            <rect x="3" y="-12" width="30" height="20" rx="3" fill="#3b82f6" />
            <rect x="5" y="-10" width="26" height="16" rx="2" fill="#eff6ff" />
            {/* Cute code lines on screen */}
            <line x1="8" y1="-5" x2="18" y2="-5" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="-1" x2="24" y2="-1" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="3" x2="20" y2="3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            {/* Hands typing */}
            <circle cx="2" cy="10" r="4.5" fill="#ffedd5" />
            <circle cx="34" cy="10" r="4.5" fill="#ffedd5" />
          </g>

          {/* Right Arm: Animated Waving Hand 👋 */}
          <motion.g
            animate={
              isWaving
                ? { rotate: [0, 22, -18, 22, -14, 18, 0] }
                : { rotate: [0, 10, 0] }
            }
            transition={{
              duration: isWaving ? 1.1 : 3,
              repeat: isWaving ? 0 : Infinity,
              ease: 'easeInOut',
            }}
            style={{ transformOrigin: '112px 125px' }}
          >
            <path
              d="M112 125 C122 118, 128 105, 132 94"
              stroke="#fda4af"
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* Waving Hand Palm */}
            <circle cx="134" cy="90" r="5.5" fill="#ffedd5" />
            {/* Little fingers waving */}
            <ellipse cx="132" cy="85" rx="1.8" ry="3.5" fill="#ffedd5" transform="rotate(-15 132 85)" />
            <ellipse cx="136" cy="84" rx="1.8" ry="3.8" fill="#ffedd5" />
            <ellipse cx="140" cy="86" rx="1.8" ry="3.5" fill="#ffedd5" transform="rotate(15 140 86)" />
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
