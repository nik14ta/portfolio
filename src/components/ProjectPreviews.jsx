import React from 'react';
import { GitBranch, CheckCircle2, Play, Activity, Terminal, Shield, Sparkles, Volume2, Search, ArrowRight, Cpu, Layers } from 'lucide-react';

export function AgentGraphPreview() {
  const nodes = [
    { num: '1', name: 'Read Bug Report', status: 'done' },
    { num: '2', name: 'Analyze Code', status: 'done' },
    { num: '3', name: 'Write Fix', status: 'done' },
    { num: '4', name: 'Run Tests', status: 'active' },
    { num: '5', name: 'Human Approval', status: 'pending' },
    { num: '6', name: 'Publish Fix (PR)', status: 'pending' },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-5 bg-zinc-950 font-mono text-xs flex flex-col justify-between border-b border-zinc-800/80">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60 text-[11px] text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-200 font-semibold">AI Automated Coding Pipeline</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-emerald-400 font-bold">
          14 Tests Passing ✓
        </span>
      </div>

      {/* Nodes pipeline visual with clear steps */}
      <div className="py-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
        {nodes.map((node, i) => (
          <div
            key={i}
            className={`p-2.5 rounded-lg border text-[11px] flex items-center justify-between transition-all ${
              node.status === 'done'
                ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-300'
                : node.status === 'active'
                ? 'bg-indigo-950/40 border-indigo-700 text-indigo-200 shadow-sm shadow-indigo-500/20'
                : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-500'
            }`}
          >
            <span className="truncate">{node.name}</span>
            {node.status === 'done' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
            {node.status === 'active' && <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping shrink-0" />}
          </div>
        ))}
      </div>

      {/* Clear description snippet */}
      <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-[11px] text-zinc-400 truncate">
        <span className="text-emerald-400 font-semibold">Status:</span> Automated code fix tested & ready for GitHub
      </div>
    </div>
  );
}

export function LegalRAGPreview() {
  return (
    <div className="w-full h-full p-4 sm:p-5 bg-zinc-950 font-mono text-xs flex flex-col justify-between border-b border-zinc-800/80">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60 text-[11px] text-zinc-400">
        <div className="flex items-center gap-2">
          <Search className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-zinc-200 font-semibold">Smart Legal Search (Voice & Text)</span>
        </div>
        <span className="text-emerald-400 text-[10px] bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/60">
          Voice Readout Active
        </span>
      </div>

      <div className="space-y-2 py-3">
        <div className="p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800 flex items-center justify-between text-[11px]">
          <span className="text-zinc-300">Meaning Search (AI Understands Context)</span>
          <span className="text-indigo-400 font-bold">94% match</span>
        </div>
        <div className="p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800 flex items-center justify-between text-[11px]">
          <span className="text-zinc-300">Exact Legal Law & Section Lookup</span>
          <span className="text-emerald-400 font-bold">Found Section</span>
        </div>
      </div>

      <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-[11px] text-emerald-300 flex items-center gap-2">
        <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span className="truncate">Source Verified: 100% Fact-Checked Official Laws</span>
      </div>
    </div>
  );
}

export function AthleteVisionPreview() {
  return (
    <div className="w-full h-full p-4 sm:p-5 bg-zinc-950 font-mono text-xs flex flex-col justify-between border-b border-zinc-800/80">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60 text-[11px] text-zinc-400">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
          <span className="text-zinc-200 font-semibold">Real-Time Camera AI & Posture Tracking</span>
        </div>
        <span className="text-zinc-400 text-[10px] bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
          SIH Finalist
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 py-3 text-center">
        <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
          <div className="text-[10px] text-zinc-500 uppercase">Camera Speed</div>
          <div className="text-base font-bold text-zinc-200">32 FPS</div>
        </div>
        <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
          <div className="text-[10px] text-zinc-500 uppercase">Knee / Joint Angle</div>
          <div className="text-base font-bold text-emerald-400">142° (Good)</div>
        </div>
        <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
          <div className="text-[10px] text-zinc-500 uppercase">Posture Errors</div>
          <div className="text-base font-bold text-indigo-400">0 Fouls</div>
        </div>
      </div>

      <div className="p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800 text-[11px] text-zinc-400 truncate">
        Detecting 17 body joint points live via video without lag
      </div>
    </div>
  );
}

export function EnterpriseHRMSPreview() {
  return (
    <div className="w-full h-full p-4 sm:p-5 bg-zinc-950 font-mono text-xs flex flex-col justify-between border-b border-zinc-800/80">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60 text-[11px] text-zinc-400">
        <div className="flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-zinc-200 font-semibold">BKNetwork Company Portal</span>
        </div>
        <span className="text-emerald-400 text-[10px] bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/60">
          Active in Production
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 py-3">
        <div className="p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800">
          <div className="text-[10px] text-zinc-500">System Modules</div>
          <div className="text-xs font-semibold text-zinc-300 mt-1">HRMS &amp; Employee Training</div>
        </div>
        <div className="p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800">
          <div className="text-[10px] text-zinc-500">Database</div>
          <div className="text-xs font-semibold text-zinc-300 mt-1">PostgreSQL Database</div>
        </div>
      </div>

      <div className="p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800 text-[11px] text-zinc-400 truncate">
        Secure employee logins, automated payroll, and course tracking
      </div>
    </div>
  );
}

export function AgriTechPreview() {
  return (
    <div className="w-full h-full p-4 sm:p-5 bg-zinc-950 font-mono text-xs flex flex-col justify-between border-b border-zinc-800/80">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60 text-[11px] text-zinc-400">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-zinc-200 font-semibold">ApnaKhet Farmer Assistant</span>
        </div>
        <span className="text-amber-400 text-[10px] bg-amber-950/40 px-2 py-0.5 rounded border border-amber-900/60">
          ACM Hackathon Top 10%
        </span>
      </div>

      <div className="space-y-2 py-3">
        <div className="p-2 rounded-lg bg-zinc-900/70 border border-zinc-800 flex items-center justify-between text-[11px]">
          <span className="text-zinc-400">Hackathon Standing</span>
          <span className="text-amber-400 font-bold">12th of 121 Teams</span>
        </div>
        <div className="p-2 rounded-lg bg-zinc-900/70 border border-zinc-800 flex items-center justify-between text-[11px]">
          <span className="text-zinc-400">Offline Capability</span>
          <span className="text-zinc-200">Works in Low-Internet Rural Areas</span>
        </div>
      </div>

      <div className="p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800 text-[11px] text-zinc-400 truncate">
        Photo-based crop disease diagnosis &amp; localized weather advice
      </div>
    </div>
  );
}

export function RetroMusicPreview() {
  return (
    <div className="w-full h-full p-4 sm:p-5 bg-zinc-950 font-mono text-xs flex flex-col justify-between border-b border-zinc-800/80">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60 text-[11px] text-zinc-400">
        <div className="flex items-center gap-2">
          <Volume2 className="w-3.5 h-3.5 text-violet-400" />
          <span className="text-zinc-200 font-semibold">Interactive Music Visualizer</span>
        </div>
        <span className="text-violet-400 text-[10px] bg-violet-950/40 px-2 py-0.5 rounded border border-violet-900/60">
          Smooth 60 FPS
        </span>
      </div>

      {/* Simulated equalizer visualizer */}
      <div className="flex items-end justify-between gap-1 h-14 py-2 px-1">
        {[45, 75, 95, 60, 85, 40, 100, 70, 50, 80, 65, 90, 35, 75, 55].map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%` }}
            className="flex-1 bg-gradient-to-t from-violet-600 to-indigo-400 rounded-xs opacity-80"
          />
        ))}
      </div>

      <div className="p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800 text-[11px] text-zinc-400 truncate">
        Real-time audio soundwave animation &amp; retro cassette player
      </div>
    </div>
  );
}

export function getProjectPreview(id) {
  switch (id) {
    case 1:
      return <AgentGraphPreview />;
    case 2:
      return <LegalRAGPreview />;
    case 3:
      return <AthleteVisionPreview />;
    case 4:
      return <EnterpriseHRMSPreview />;
    case 5:
      return <AgriTechPreview />;
    case 6:
      return <RetroMusicPreview />;
    default:
      return <AgentGraphPreview />;
  }
}
