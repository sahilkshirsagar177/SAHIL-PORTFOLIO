import React, { useState } from 'react';
import {
  Code,
  Globe,
  Code2,
  Cpu,
  Sparkles,
  CheckCircle2,
  Layers,
  Database,
  Terminal,
  CpuIcon,
  Server,
  Layout,
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Skills({ isDark }) {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [Globe, Code2, Cpu, Sparkles];

  const categories = resumeData.skills.categories;

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-teal-500/10 text-teal-400 border border-teal-500/30 mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>02. TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Skills & <span className="text-gradient">Proficiencies</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Categorized breakdown of programming languages, modern frameworks, core CS fundamentals, and analytical tools.
          </p>
        </div>

        {/* Category Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat, idx) => {
            const Icon = icons[idx] || Code;
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25 scale-[1.02]'
                    : isDark
                    ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories[activeTab].items.map((skill, index) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/80 border border-slate-700/60 backdrop-blur-md hover:border-teal-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/5 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 text-sm sm:text-base group-hover:text-teal-300 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] font-mono uppercase text-slate-400">
                      {skill.tag}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-950/80 h-2 rounded-full overflow-hidden p-0.5 border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CS Fundamentals & Architecture Matrix */}
        <div className="mt-14 p-7 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90 border border-slate-700/60 backdrop-blur-xl shadow-xl">
          <div className="flex items-center gap-2.5 mb-6">
            <Layers className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-slate-100">
              Core Engineering Competencies & Architecture
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { title: 'Data Structures', tag: 'Core CS' },
              { title: 'Algorithms (DSA)', tag: 'Problem Solving' },
              { title: 'SDLC & Agile', tag: 'Methodology' },
              { title: 'Object Oriented (OOP)', tag: 'Architecture' },
              { title: 'Relational SQL', tag: 'Database' },
              { title: 'REST API Design', tag: 'Backend' },
            ].map((item) => (
              <div
                key={item.title}
                className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center hover:border-cyan-500/40 transition-colors"
              >
                <div className="text-xs font-bold text-slate-200">{item.title}</div>
                <div className="text-[10px] font-mono text-cyan-400/90 mt-0.5">{item.tag}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
