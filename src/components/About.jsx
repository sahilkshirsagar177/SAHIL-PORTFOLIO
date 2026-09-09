import React from 'react';
import {
  User,
  Sparkles,
  BookOpen,
  BrainCircuit,
  Terminal,
  Languages,
  CheckCircle,
  ShieldCheck,
  Zap,
  TrendingUp,
  Award,
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function About({ isDark }) {
  const values = [
    {
      title: 'Full-Stack & Systems Mindset',
      desc: 'Hands-on experience architecting SaaS platforms from database design to fluid frontend state management.',
      icon: Zap,
      color: 'text-amber-400',
    },
    {
      title: 'National NCC Discipline (AIR-3)',
      desc: 'Proven leadership, perseverance, and rigorous execution under high-stress conditions at national camp levels.',
      icon: ShieldCheck,
      color: 'text-teal-400',
    },
    {
      title: 'Client & Business Acumen',
      desc: 'Unique blend of technical depth and polished stakeholder communication developed in real-world business roles.',
      icon: TrendingUp,
      color: 'text-cyan-400',
    },
    {
      title: 'Continuous Innovation & AI',
      desc: 'Actively integrating Generative AI pipelines and modern machine learning foundations into data workflows.',
      icon: BrainCircuit,
      color: 'text-purple-400',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-teal-500/10 text-teal-400 border border-teal-500/30 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01. BIOGRAPHY & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About <span className="text-gradient">Sahil Kshirsagar</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Bridging technical software development, data analytics, and disciplined execution to build impactful software.
          </p>
        </div>

        {/* Top Grid: Bio Card & Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/80 border border-slate-700/60 backdrop-blur-xl flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">Engineering Profile</h3>
                    <p className="text-xs font-mono text-teal-400">Software Developer • Problem Solver</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  Pune, India
                </span>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a Computer Science graduate (<strong className="text-teal-300 font-semibold">B.Sc. CS</strong>) currently pursuing my{' '}
                  <strong className="text-teal-300 font-semibold">Master's in Computer Application (MCA)</strong> at Modern College of Engineering (SPPU), Pune.
                </p>
                <p>
                  With a solid foundation in <strong className="text-cyan-300 font-semibold">Java, Python, C++, SQL</strong>, and Data Structures & Algorithms, I love transforming complex requirements into reliable, intuitive web platforms and analytical systems.
                </p>
                <p>
                  Beyond software engineering, my background in client-facing business development and my tenure as <strong className="text-indigo-300 font-semibold">Vice President of Rotaract Club</strong> have honed my leadership, empathy, and communication skills—allowing me to collaborate seamlessly with product managers, designers, and fellow engineers.
                </p>
              </div>
            </div>

            {/* Spoken Languages Row */}
            <div className="mt-8 pt-6 border-t border-slate-700/60">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                <Languages className="w-4 h-4 text-teal-400" />
                <span>Languages & Communication:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {resumeData.skills.spokenLanguages.map((lang) => (
                  <div
                    key={lang.language}
                    className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-center"
                  >
                    <div className="font-semibold text-sm text-slate-200">{lang.language}</div>
                    <div className="text-[11px] text-slate-400">{lang.proficiency}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillars & Distinctions */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-teal-500/40 hover:bg-slate-800/80 transition-all duration-300 flex items-start gap-4"
                >
                  <div className={`p-2.5 rounded-xl bg-slate-800 border border-slate-700 ${val.color} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100 text-sm mb-1">{val.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Currently Learning & Active Growth Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-950/40 via-slate-900/60 to-purple-950/40 border border-teal-500/20 backdrop-blur-xl shadow-lg">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-teal-300 font-semibold">
              Currently Expanding Horizons
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.skills.currentlyLearning.map((item) => {
              const Icon = item.icon === 'BrainCircuit' ? BrainCircuit : Terminal;
              return (
                <div
                  key={item.title}
                  className="p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col justify-between"
                >
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                      <span>Competency Focus</span>
                      <span className="text-teal-400 font-semibold">{item.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
