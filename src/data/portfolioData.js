export const portfolioData = {
  personal: {
    name: "Nikita Rathour",
    role: "Full Stack Developer & AI Engineer",
    title: "Building Agentic AI Systems, RAG Pipelines & Scalable Web Applications",
    bio: "I'm a full-stack developer and AI engineer who loves turning complex systems into clean, responsive web experiences. I build autonomous agents with LangGraph, fast APIs with Python, and interactive frontends with React — with industry internship experience shipping production software.",
    location: "India (Open to Remote Worldwide)",
    email: "nikitarathour14@gmail.com",
    phone: "+91 7078723768",
    avatar: "https://avatars.githubusercontent.com/u/160528272?v=4",
    availability: "Seeking Software Developer / Full Stack / AI Engineer Roles",
    statusBadge: "🟢 Actively seeking entry-level Software Developer or Full Stack Engineer roles",
    resumeUrl: "/Nikita_Rathour_Resume.pdf",
    socials: {
      github: "https://github.com/nik14ta",
      linkedin: "https://www.linkedin.com/in/nikita-rathour-6a88ba2a8",
      email: "mailto:nikitarathour14@gmail.com",
      phone: "tel:+917078723768",
    },
    stats: [
      { label: "NPTEL Silver Medal", value: "78%" },
      { label: "ACM Hackathon Rank", value: "Top 10%" },
      { label: "LangGraph State Machine", value: "8-Node" },
      { label: "Public Repositories", value: "10+" },
    ],
  },

  about: {
    lead: "Building useful AI tools and modern web apps with curiosity and attention to detail.",
    paragraphs: [
      "Hey there! I'm Nikita, a Computer Science student at Haridwar University (2023–2027) passionate about AI and web development. I love the balance between deep engineering — like building multi-step AI agents with LangGraph or optimizing RAG pipelines — and designing warm, aesthetic user interfaces that people actually enjoy using.",
      "Beyond college, I worked as a software engineering intern at BKNetwork Services where I built live enterprise HRMS/LMS features, and contributed QA testing and documentation for the Punjab & Haryana High Court judicial platform. When I'm not coding, you'll probably find me at a cafe exploring new ideas or competing in hackathons!",
    ],
    highlights: [
      "Scored 78% (Elite + Silver Medal) in NPTEL Genetic / Generative AI for Computer Vision.",
      "Performed QA testing and authored the official User Manual for Punjab & Haryana High Court's judicial web platform.",
      "Engineered an 8-node LangGraph state machine with Human-in-the-Loop checkpoints for automated GitHub patch synthesis.",
      "Developed a Multilingual Voice-Enabled RAG pipeline with Hybrid Retrieval (ChromaDB + BM25) and BHASHINI speech synthesis.",
      "Built real-time computer vision biomechanical analysis using YOLOv8, MediaPipe, OpenCV, and React.js for SIH.",
      "Production enterprise experience building secure JWT-authenticated REST APIs and responsive React/Tailwind frontends.",
    ],
  },

  skills: {
    categories: [
      {
        name: "AI & Agentic Systems",
        icon: "Cpu",
        skills: [
          { name: "LangGraph & LangChain", level: "Expert" },
          { name: "Multi-Node Agent Workflows", level: "Expert" },
          { name: "Hybrid RAG (Dense + BM25)", level: "Expert" },
          { name: "ChromaDB & Vector Stores", level: "Expert" },
          { name: "Gemini API & LLMs", level: "Expert" },
          { name: "Human-in-the-Loop Checkpoints", level: "Advanced" },
        ],
      },
      {
        name: "Frontend Engineering",
        icon: "Layout",
        skills: [
          { name: "React.js & Vite", level: "Expert" },
          { name: "Next.js", level: "Advanced" },
          { name: "Tailwind CSS", level: "Expert" },
          { name: "JavaScript (ES6+) & TypeScript", level: "Expert" },
          { name: "Streamlit UI", level: "Advanced" },
          { name: "HTML5, CSS3 & Responsive UX", level: "Expert" },
        ],
      },
      {
        name: "Backend & Systems",
        icon: "Server",
        skills: [
          { name: "Python", level: "Expert" },
          { name: "FastAPI", level: "Expert" },
          { name: "Node.js & Express.js", level: "Advanced" },
          { name: "RESTful API Architecture", level: "Expert" },
          { name: "JWT Authentication", level: "Expert" },
          { name: "Pytest & Automated Testing", level: "Advanced" },
        ],
      },
      {
        name: "Databases, CV & Tools",
        icon: "Cloud",
        skills: [
          { name: "PostgreSQL & DBeaver", level: "Expert" },
          { name: "MongoDB", level: "Advanced" },
          { name: "Computer Vision (YOLOv8, MediaPipe)", level: "Advanced" },
          { name: "Git, GitHub API & CI/CD", level: "Expert" },
          { name: "Data Structures & Algorithms", level: "Advanced" },
          { name: "DBMS, OS & OOP Principles", level: "Expert" },
        ],
      },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Autonomous Software Engineer Agent",
      category: "Full-Stack",
      description:
        "An autonomous AI engineering studio (React, Vite, FastAPI) that automatically resolves GitHub Issues through patch synthesis, 8-node LangGraph state machines, and sandbox verification.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Python", "FastAPI", "LangGraph", "Gemini", "GitHub API", "Pytest"],
      demoUrl: "https://github.com/nik14ta/autonomous-code-agent",
      githubUrl: "https://github.com/nik14ta/autonomous-code-agent",
      featured: true,
      metrics: "8-Node LangGraph State Machine & Automated Patch Synthesis",
      problem:
        "Engineering teams spend hours manually reproducing bug reports from GitHub issues, drafting boilerplate fixes, and managing pull request lifecycles for routine issues.",
      solution:
        "Architected an autonomous agentic studio that accepts GitHub issue URLs, maps the repository AST, synthesizes code patches using Gemini and LangGraph, tests fixes in an isolated sandbox, and opens verified pull requests.",
      challenges: [
        {
          title: "Multi-Step Context Drift & Infinite Loops",
          challenge:
            "Unconstrained LLM loops frequently hallucinated invalid dependencies or repeated failing code modifications endlessly.",
          resolution:
            "Engineered an 8-node LangGraph state machine with Human-in-the-Loop ('interrupt_before') approval checkpoints and hard 3-retry recursion limits.",
        },
        {
          title: "Safe Sandboxed Test Execution",
          challenge:
            "Executing generated code directly risked crashing the server or introducing security vulnerabilities.",
          resolution:
            "Implemented an isolated pytest execution sandbox that captures stdout/stderr, analyzes assertion tracebacks, and feeds failure signals back into the agent for self-correction.",
        },
      ],
      features: [
        "8-node LangGraph state machine orchestrating issue triage, planning, coding, and review",
        "Human-in-the-Loop interactive approval checkpoints before applying code changes",
        "Self-correcting pytest automation that analyzes test failures and retries synthesis up to 3 times",
        "Automated Git workflows via GitHub REST API generating diff patches, feature branches, and PRs with test metrics",
      ],
      architecture: {
        client: "React.js, Vite, Tailwind CSS, real-time agent thought stream",
        api: "FastAPI (Python), LangGraph state machine, Gemini LLM API",
        data: "GitHub REST API, Pytest sandbox runtimes, JSON session cache",
        infra: "Isolated execution environment with automated Git branch & PR dispatch",
        dataFlow:
          "Reported Issue ➜ AI Code Analysis ➜ Automated Code Fix ➜ Test Execution ➜ Developer Approval ➜ GitHub Pull Request",
      },
    },
    {
      id: 2,
      title: "Multilingual Voice-Enabled Legal Assistant",
      category: "Full-Stack",
      description:
        "An end-to-end Multilingual RAG pipeline querying Indian statutory documents (IPC, IT Act) via voice and text with Hybrid Retrieval (ChromaDB + BM25) and evidence verification.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "LangChain", "ChromaDB", "Gemini", "Streamlit", "BM25", "BHASHINI"],
      demoUrl: "https://github.com/nik14ta/RAG_INDIAN_GOVERMENT_SYSTEMS",
      githubUrl: "https://github.com/nik14ta/RAG_INDIAN_GOVERMENT_SYSTEMS",
      featured: true,
      metrics: "Evaluated on 110+ statutory benchmark queries",
      problem:
        "Indian statutory law (IPC, IT Act) is written in intricate legal terminology, making it inaccessible to ordinary citizens, while generic LLMs routinely hallucinate non-existent sections or penalties.",
      solution:
        "Constructed a voice-and-text enabled Multilingual RAG assistant incorporating Hybrid Retrieval, Cross-Encoder reranking, and an Evidence Verification & Abstention layer to guarantee legal faithfulness.",
      challenges: [
        {
          title: "Legal Hallucination & Citation Fabrications",
          challenge:
            "Standard vector embeddings often retrieved vaguely similar sections, causing the LLM to invent statutory penalties.",
          resolution:
            "Implemented Hybrid Retrieval (ChromaDB dense vectors + BM25 sparse keyword matching) with a Cross-Encoder reranker and an Evidence Verification & Abstention gate when context is insufficient.",
        },
        {
          title: "Multilingual Voice Accessibility across Dialects",
          challenge:
            "English-only text models alienated vernacular users seeking legal advice in Indian regional languages.",
          resolution:
            "Integrated government-backed BHASHINI / TTS voice synthesis, allowing seamless multilingual speech input and spoken legal guidance.",
        },
      ],
      features: [
        "End-to-end voice and text interface querying Indian statutory legal codes (IPC, IT Act)",
        "Hybrid Retrieval combining ChromaDB dense semantic vectors with BM25 keyword search",
        "Cross-Encoder reranking pass ensuring highest-relevance legal clauses reach the LLM",
        "Evidence Verification & Abstention mechanism preventing hallucinations when evidence is weak",
        "Integrated BHASHINI / TTS speech synthesis with an empirical benchmark tested on 110+ queries",
      ],
      architecture: {
        client: "Streamlit voice & text interface, BHASHINI speech synthesis",
        api: "Python LangChain RAG pipeline, Gemini API, Cross-Encoder Reranker",
        data: "ChromaDB Vector Store (dense embeddings) + BM25 sparse index (statutory documents)",
        infra: "Local & Cloud GPU/CPU inference, indexed Indian statutory gazettes",
        dataFlow:
          "User Voice / Text Question ➜ Regional Speech-to-Text ➜ AI Meaning & Keyword Search ➜ Fact-Check Verification ➜ Clear Spoken / Text Answer",
      },
    },
    {
      id: 3,
      title: "AI Athlete Performance & Validation System",
      category: "Full-Stack",
      description:
        "A real-time computer vision biomechanical analysis platform using MoveNet, MediaPipe, YOLOv8, and OpenCV for athletic pose tracking, cheat detection, and low-bandwidth scoring.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "YOLOv8", "MediaPipe", "OpenCV", "React.js", "FastAPI", "MongoDB"],
      demoUrl: "https://github.com/nik14ta",
      githubUrl: "https://github.com/nik14ta",
      featured: true,
      metrics: "Shortlisted in Smart India Hackathon (SIH)",
      problem:
        "Athletic performance evaluations in remote sports academies suffer from human bias, lack of objective biomechanical validation, and inability to run computer vision models over weak internet connections.",
      solution:
        "Engineered an automated athlete assessment platform utilizing MoveNet and MediaPipe for skeletal pose tracking, YOLOv8 for automated cheat/foul detection, and a React dashboard backed by FastAPI.",
      challenges: [
        {
          title: "Real-Time 30+ FPS Pose Estimation Lag",
          challenge:
            "Heavy computer vision models dropped frames on standard consumer webcams, missing rapid athletic movements.",
          resolution:
            "Utilized lightweight MoveNet and MediaPipe pipelines optimized with OpenCV frame skipping and multi-threaded video stream workers.",
        },
        {
          title: "Low-Bandwidth Remote Sports Academy Environments",
          challenge:
            "Internet dropouts prevented video uploading to cloud servers during live fitness trials.",
          resolution:
            "Built client-side edge inference with a FastAPI backend and MongoDB supporting complete offline analysis and batch sync when reconnected.",
        },
      ],
      features: [
        "Real-time skeletal landmark tracking using MoveNet and MediaPipe for biomechanical posture analysis",
        "Automated cheat detection and foul validation using custom YOLOv8 and OpenCV algorithms",
        "Interactive React.js athletic metrics dashboard displaying joint angles, repetitions, and velocity",
        "FastAPI backend with MongoDB schema supporting offline-first video evaluations",
      ],
      architecture: {
        client: "React.js, Tailwind CSS, HTML5 Canvas landmark rendering",
        api: "FastAPI (Python), OpenCV processing stream, MoveNet / MediaPipe",
        data: "MongoDB athlete session telemetry and performance records",
        infra: "Edge inference support for low-bandwidth environments",
        dataFlow:
          "Live Camera Feed ➜ Body Detection (YOLOv8) ➜ 17 Joint Points Tracking ➜ Posture Math ➜ Instant Athlete Metrics",
      },
    },
    {
      id: 4,
      title: "Enterprise HRMS & LMS Platforms",
      category: "Full-Stack",
      description:
        "Production enterprise Human Resource Management and Learning Management platforms engineered during software development internship at BKNetwork Services Pvt. Ltd.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "React.js", "PostgreSQL", "DBeaver", "REST APIs", "JWT", "Tailwind CSS"],
      demoUrl: "https://github.com/nik14ta/human-resource-management-system",
      githubUrl: "https://github.com/nik14ta/human-resource-management-system",
      featured: false,
      metrics: "Deployed to live production at BKNetwork Services",
      problem:
        "Enterprise staff operations required a unified, secure system to manage multi-department employee records, automated payroll deductions, attendance tracking, and internal learning course delivery.",
      solution:
        "Engineered core modules for enterprise HRMS and LMS solutions, deploying secure Python RESTful APIs with PostgreSQL (DBeaver) and responsive React.js/Tailwind CSS frontends to production.",
      challenges: [
        {
          title: "Enterprise Multi-Tenant Authorization Security",
          challenge:
            "Strict confidentiality requirements dictated that employee payroll and performance reviews could only be accessed by verified department heads.",
          resolution:
            "Designed and implemented secure RESTful API middleware in Python with cryptographic JWT authentication and role-based route guards.",
        },
        {
          title: "High-Volume Relational Schema Query Optimization",
          challenge:
            "Complex joins between attendance logs, employee profiles, and payroll tables caused query slowdowns.",
          resolution:
            "Optimized PostgreSQL relational schemas using DBeaver, introduced composite indexes on employee_id and timestamp, cutting query execution times significantly.",
        },
      ],
      features: [
        "Core enterprise modules for staff directory, clock-in attendance, and automated payroll calculations",
        "LMS module for corporate employee training course tracking and module completion metrics",
        "Secure RESTful APIs using Python with JWT authentication and granular role validation",
        "Intuitive, responsive frontend interfaces engineered with React.js and Tailwind CSS",
      ],
      architecture: {
        client: "React.js, Tailwind CSS, Axios, Context API",
        api: "Python RESTful API services with JWT token authentication",
        data: "PostgreSQL relational database managed via DBeaver",
        infra: "Enterprise cloud deployment with Git/GitHub CI/CD pull request workflows",
        dataFlow:
          "Enterprise User Action ➜ JWT Authenticated Python API ➜ PostgreSQL Optimized Query ➜ React.js UI Render",
      },
    },
    {
      id: 5,
      title: "ApnaKhet - AI-Driven Agriculture Platform",
      category: "Full-Stack",
      description:
        "An AI-powered smart agriculture platform recognized with a Top 10% ranking (12th out of 121 teams) at the ACM Shivalik Hackathon for empowering farmers with crop intelligence.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Python", "REST APIs", "Tailwind CSS", "AgriTech", "AI"],
      demoUrl: "https://github.com/nik14ta/AirFarmer",
      githubUrl: "https://github.com/nik14ta/AirFarmer",
      featured: false,
      metrics: "Top 10% Ranking (12th / 121 Teams) at ACM Shivalik Hackathon",
      problem:
        "Farmers in rural regions face severe crop losses due to undetected plant diseases, unseasonal weather shifts, and lack of actionable agricultural advisory.",
      solution:
        "Constructed ApnaKhet, an AI-driven smart agriculture platform that provides real-time crop disease diagnosis, weather advisories, and resource management designed specifically for low-bandwidth rural connectivity.",
      challenges: [
        {
          title: "Hackathon 24-Hour Rapid Prototyping Pressure",
          challenge:
            "Building full end-to-end computer vision crop classification and a responsive dashboard within a strict 24-hour hackathon timeline.",
          resolution:
            "Structured modular frontend and backend responsibilities, utilizing pre-trained model transfer learning and streamlined React component libraries.",
        },
        {
          title: "Low-Literacy & Low-Bandwidth UI Accessibility",
          challenge:
            "Designing an interface intuitive enough for non-technical rural farmers with intermittent 2G/3G connectivity.",
          resolution:
            "Created an icon-driven, high-contrast UI with visual health status indicators and lightweight asset compression.",
        },
      ],
      features: [
        "AI-driven crop disease diagnosis with visual symptom checklists and treatment guides",
        "Hyperlocal weather forecast integration with rainfall probability and harvest timing alerts",
        "Soil moisture and organic fertilization schedule planner",
        "Lightweight mobile-responsive design optimized for rural network connectivity",
      ],
      architecture: {
        client: "React.js, Tailwind CSS, Responsive PWA architecture",
        api: "Python REST API, Weather service integrations",
        data: "Local cache and agricultural advisory knowledgebase",
        infra: "Cloud edge deployment with continuous GitHub delivery",
        dataFlow:
          "Crop Photo / Location ➜ Python AI Model ➜ Diagnostic Pipeline ➜ Actionable Treatment Advisory ➜ React UI",
      },
    },
    {
      id: 6,
      title: "Retro Music & Audio Experience App",
      category: "Frontend",
      description:
        "A nostalgic retro-styled interactive music web application featuring spinning cassette tape animations, real-time frequency spectrum visualizers, and tactile analog controls.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "HTML5 Canvas", "Web Audio API", "CSS3", "Audio UI"],
      demoUrl: "https://github.com/nik14ta/retro-music-app",
      githubUrl: "https://github.com/nik14ta/retro-music-app",
      featured: false,
      metrics: "Smooth 60fps real-time audio visualizer",
      problem:
        "Standard web streaming interfaces are visually sterile and generic, missing the tactile nostalgia and joy of analog cassette tapes and classic stereo equalizers.",
      solution:
        "Designed and built an interactive retro music player featuring cassette reel physics, responsive frequency spectrum visualizers, and tactile analog controls.",
      challenges: [
        {
          title: "Audio Frequency Visualizer Performance",
          challenge:
            "Extracting fast Fourier transform (FFT) audio data on the main thread caused visual stutter during playback.",
          resolution:
            "Optimized HTML5 Canvas rendering routines using requestAnimationFrame and decoupled the frequency analyzer buffer.",
        },
        {
          title: "Cross-Browser Autoplay Restrictions",
          challenge:
            "Modern browsers block audio playback until user interaction, causing muted initial loads.",
          resolution:
            "Implemented an elegant 'Click to Insert Cassette' user onboarding gesture that naturally unlocks the Web Audio context.",
        },
      ],
      features: [
        "Interactive cassette deck with spinning tape reels synced to audio playback speed",
        "Real-time neon audio spectrum visualizer rendered with HTML5 Canvas",
        "Volume equalizer, custom playlist curation, and track scrubbing slider",
        "Full keyboard shortcuts (Space to Play/Pause, Arrow keys for track navigation)",
      ],
      architecture: {
        client: "Vanilla JavaScript (ES6+), HTML5 Canvas, Web Audio API (AnalyserNode)",
        api: "Web Audio Context, LocalStorage state persistence",
        data: "Static audio assets & playlist JSON metadata",
        infra: "GitHub Pages / Vercel Edge Hosting",
        dataFlow:
          "Music Playback ➜ Audio Soundwave Extraction ➜ 60 FPS Visual Canvas ➜ Animated Cassette Display",
      },
    },
  ],

  experience: [
    {
      type: "work",
      role: "Software Development Intern",
      company: "BKNetwork Services Pvt. Ltd.",
      location: "Ghaziabad, India",
      period: "June 2026 – Sept 2026",
      description:
        "Engineered core modules for enterprise HRMS and LMS platforms, building secure Python APIs, PostgreSQL databases, and responsive React.js interfaces deployed to production.",
      achievements: [
        "Engineered core modules for enterprise HRMS and LMS platforms, deploying live applications to production.",
        "Designed and maintained secure RESTful APIs using Python and PostgreSQL (DBeaver) with JWT authentication.",
        "Developed intuitive, responsive frontend interfaces with React.js and Tailwind CSS for seamless navigation.",
        "Collaborated with cross-functional teams in an agile environment using Git/GitHub for pull requests and code reviews.",
      ],
      technologies: ["Python", "React.js", "PostgreSQL", "DBeaver", "REST APIs", "Tailwind CSS", "JWT", "Git"],
    },
    {
      type: "work",
      role: "QA Tester & Technical Documentation",
      company: "Punjab and Haryana High Court",
      location: "Chandigarh, India",
      period: "2026",
      description:
        "Contributed to quality assurance and technical documentation for the official judicial web platform of Punjab and Haryana High Court, ensuring accuracy, usability, and compliance of court-facing digital systems.",
      achievements: [
        "Performed comprehensive functional and usability testing on the High Court's official web platform, identifying and reporting bugs and UI inconsistencies.",
        "Authored a detailed User Manual covering end-to-end workflows for court staff and legal practitioners using the digital system.",
        "Validated form submissions, navigation flows, and edge-case scenarios across multiple browser environments.",
        "Ensured documentation accuracy by cross-referencing system behavior with legal/procedural requirements.",
      ],
      technologies: ["Manual Testing", "QA", "Technical Writing", "User Manual", "Browser Testing", "Documentation"],
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Haridwar University",
      location: "India",
      period: "2023 – 2027",
      description:
        "Specializing in Computer Science & Engineering. Core coursework in Data Structures & Algorithms, DBMS, Operating Systems, OOP, and Artificial Intelligence.",
      honors: ["B.Tech CSE (2023–2027)", "Active Technical Problem Solver & Hackathon Builder"],
    },
  ],

  achievements: [
    {
      title: "NPTEL Elite + Silver Medal (78%)",
      subtitle: "Genetic / Generative AI for Computer Vision • NPTEL / IIT",
      description:
        "Achieved an Elite + Silver Medal certification with 78% score in the rigorous NPTEL examination on AI for Computer Vision, demonstrating deep technical mastery in convolutional neural networks, vision transformers, generative vision models, and real-time inference.",
      date: "Silver Medal (78%)",
      isSilverMedal: true,
      score: "78%",
      badge: "Elite + Silver Medalist",
    },
    {
      title: "ACM Shivalik Hackathon – Top 10% Rank",
      subtitle: "12th rank among 121 competing teams",
      description:
        "Awarded Top 10% standing for engineering ApnaKhet, an AI-driven smart agriculture platform that provides disease diagnosis and localized crop advisories.",
      date: "Top 10% Rank",
      badge: "ACM Hackathon",
    },
    {
      title: "Smart India Hackathon (SIH) – Shortlisted",
      subtitle: "Internal Round Selection",
      description:
        "Shortlisted for the internal round for the AI-Based Athlete Performance Evaluation System using MoveNet, MediaPipe, and YOLOv8 computer vision pipelines.",
      date: "SIH Selection",
      badge: "SIH Finalist",
    },
  ],

  certifications: [
    {
      name: "Genetic / Generative AI for Computer Vision",
      issuer: "NPTEL (IIT)",
      date: "2026",
      score: "78% (Elite + Silver Medal)",
      highlight: true,
      badge: "🥈 Silver Medal (78%)",
    },
    {
      name: "Autonomous AI Agents with LangGraph & LangChain",
      issuer: "AI Engineering Studio",
      date: "2026",
      score: "Advanced Agentic Workflows",
    },
    {
      name: "Enterprise Full Stack Development with React & Python",
      issuer: "BKNetwork Services / Production Engineering",
      date: "2026",
      score: "FastAPI, PostgreSQL & React",
    },
  ],
};
