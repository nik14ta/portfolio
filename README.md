# 🚀 Ultra-Creative Full-Stack Developer Portfolio

An interactive, animated, high-performance portfolio website built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🎨 Creative & Animated Highlights

1. **Interactive Particle Constellation**:
   - Dynamic 2D HTML5 Canvas background with drifting nodes that connect via subtle glowing filaments.
   - Mouse repulsion & attraction physics that respond as you move across the viewport.

2. **Ambient Spotlight Glow Follower**:
   - Sleek radial spotlight cursor follower giving modern Apple/Linear-style ambient illumination across cards.

3. **Dynamic Typewriter & 3D Tilt Developer Card**:
   - Typewriter header cycling through your specialization roles.
   - 3D interactive tilt physics on the developer card that responds dynamically to mouse coordinate angles (`perspective: 1000px`).
   - "Cyber Mode" toggle directly on the code window.

4. **Interactive CLI Terminal (Easter Egg)**:
   - Hit **`~`** (backtick) or **`Ctrl + K`**, or click the **Terminal** button in the navbar or bottom-right corner!
   - Type commands like `help`, `whoami`, `skills`, `projects`, `hire`, `matrix`, `theme`, or `clear`.
   - Includes quick-action chip buttons for mobile and fast exploration.

5. **Celebratory Confetti & Tactile Sound FX**:
   - Multi-colored confetti burst on clicking **"Hire Me"**, copying emails, or submitting messages (`canvas-confetti`).
   - Zero-dependency Web Audio API synthesizer for tactile UI clicks, chimes, and micro-interactions (with a mute toggle in the navigation bar).

6. **Animated Project Cards with Architecture Modal**:
   - Spring filtering with `framer-motion` layout animations.
   - Click any card or "Inspect Architecture" to open a deep-dive modal detailing engineering challenges, optimizations, and metrics.

7. **Animated Skills Progress Bars**:
   - Interactive category switcher with smooth animated progress bars indicating technology proficiency.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) + [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Icons
- **Audio**: Web Audio API Synthesizer (zero external sound files)

---

## 📂 Project Structure

```text
developer-portfolio/
├── src/
│   ├── components/
│   │   ├── InteractiveCanvasBackground.jsx  # Physics-driven constellation canvas
│   │   ├── SpotlightCursor.jsx              # Radial spotlight cursor aura
│   │   ├── InteractiveTerminal.jsx          # Interactive CLI terminal easter egg
│   │   ├── ProjectModal.jsx                 # Deep-dive architecture inspector
│   │   ├── Navbar.jsx                       # Sound toggle, theme toggle, CLI button
│   │   ├── Hero.jsx                         # Typewriter, 3D tilt card, confetti trigger
│   │   ├── About.jsx                        # Narrative & accomplishments
│   │   ├── Skills.jsx                       # Animated progress bars & categorized tabs
│   │   ├── Projects.jsx                     # Framer Motion spring filtering & cards
│   │   ├── Experience.jsx                   # Milestone timeline & education tabs
│   │   ├── Contact.jsx                      # Confetti celebration form & copy email
│   │   ├── Footer.jsx                       # Credits & back-to-top button
│   │   └── SocialIcons.jsx                  # Custom SVG brand icons
│   ├── data/
│   │   └── portfolioData.js                 # ⚡ Single file to customize all content!
│   ├── utils/
│   │   └── audio.js                         # Web Audio micro-interaction synthesizer
│   ├── App.jsx                              # Root wrapper with keyboard shortcuts
│   ├── index.css                            # Tailwind v4 styles
│   └── main.jsx                             # React bootstrap
├── index.html                               # HTML template & SVG favicon
└── package.json
```

---

## ⚡ Quick Start

```bash
cd "C:\Users\nikit\.gemini\antigravity\scratch\developer-portfolio"
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
