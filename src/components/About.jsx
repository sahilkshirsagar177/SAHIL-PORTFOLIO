import React from 'react';
import {
  User,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  BrainCircuit,
  Zap,
  Languages,
  BookOpen,
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function About({ isDark }) {
  const pillars = [
    {
      title: 'Full-Stack Web Development',
      desc: 'Hands-on experience architecting full-stack applications with React, Node.js, Express, and MongoDB from database schemas to fluid user interfaces.',
      icon: Zap,
    },
    {
      title: 'National NCC Discipline (AIR-3)',
      desc: 'Achieved Rank 3 in the All India Thal Sainik Camp (NCC), demonstrating rigorous discipline, tactical focus, and resilience under pressure.',
      icon: ShieldCheck,
    },
    {
      title: 'Leadership & Community',
      desc: 'Serving as Vice President at Rotaract Club of Nagpur United, leading teams in social initiatives, public outreach, and event coordination.',
      icon: TrendingUp,
    },
    {
      title: 'Data Analysis & Python',
      desc: 'Proficient in exploratory data analysis (EDA), data cleaning, and statistical visualizations using Python, Pandas, NumPy, and Seaborn.',
      icon: BrainCircuit,
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-teal-600 dark:text-teal-400 font-semibold mb-2">
            01. Background & Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            About Sahil
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Bridging software development, data analytics, and disciplined execution to build practical, reliable digital solutions.
          </p>
        </div>

        {/* Bio & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Main Story Card */}
          <div
            className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border ${
              isDark
                ? 'bg-slate-900/80 border-slate-800 text-slate-300 shadow-xl'
                : 'bg-white border-slate-200 text-slate-700 shadow-md'
            }`}
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <span>Personal Journey</span>
            </h3>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                I graduated with a <strong className="text-slate-900 dark:text-white font-semibold">B.Sc. in Computer Science (7.05 GPA)</strong> and was honored as <strong className="text-slate-900 dark:text-white font-semibold">Student of the Year (2024)</strong> at Dr. Ambedkar College, Nagpur. Currently, I am expanding my advanced software engineering capabilities through my <strong className="text-slate-900 dark:text-white font-semibold">Master's in Computer Application (MCA)</strong> at Modern College of Engineering (SPPU), Pune.
              </p>
              <p>
                My technical foundation spans <strong className="text-slate-900 dark:text-white font-semibold">Java, Python, C++, SQL</strong>, and <strong className="text-slate-900 dark:text-white font-semibold">Data Structures & Algorithms</strong>. I enjoy engineering full-stack products from ground up—such as <em>Purple (Invigi-Date)</em>, a multi-user productivity SaaS platform.
              </p>
              <p>
                Alongside engineering, my professional background in business development and lead generation has taught me the importance of active listening, clear cross-functional communication, and understanding real user needs.
              </p>
            </div>

            {/* Spoken Languages */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 block flex items-center gap-1.5">
                <Languages className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Languages</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {resumeData.skills.spokenLanguages.map((lang) => (
                  <div
                    key={lang.language}
                    className={`p-3 rounded-xl border ${
                      isDark
                        ? 'bg-slate-800/50 border-slate-700/60'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-100">{lang.language}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{lang.proficiency}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`p-5 rounded-2xl border transition-colors ${
                    isDark
                      ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
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
