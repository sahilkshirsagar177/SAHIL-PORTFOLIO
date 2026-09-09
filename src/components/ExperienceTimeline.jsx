import React, { useState } from 'react';
import {
  Briefcase,
  Users,
  Calendar,
  MapPin,
  CheckCircle2,
  Building,
  Award,
  ChevronRight,
  TrendingUp,
  Layout,
  HeartHandshake,
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ExperienceTimeline({ isDark }) {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-teal-500/10 text-teal-400 border border-teal-500/30 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04. CAREER & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Work Experience & <span className="text-gradient">Leadership</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Demonstrated history of business development, UI/UX product design, and executive community leadership.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-800/80 border border-slate-700 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-md shadow-teal-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('leadership')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'leadership'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md shadow-purple-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Leadership & Volunteering</span>
            </button>
          </div>
        </div>

        {/* Professional Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 pl-6 md:pl-10 space-y-10">
            {resumeData.experience.map((exp, idx) => (
              <div key={exp.company} className="relative group">
                
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center text-teal-400 shadow-lg shadow-teal-500/20 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Date indicator for desktop */}
                <div className="hidden md:block absolute -left-36 top-2 text-right w-24">
                  <span className="text-xs font-mono font-bold text-teal-400 block">{exp.period}</span>
                  <span className="text-[10px] text-slate-500">Duration</span>
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-800/70 to-slate-900/80 border border-slate-700/60 backdrop-blur-xl shadow-xl hover:border-teal-500/40 transition-all duration-300">
                  
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                        <span className="text-teal-400 font-semibold flex items-center gap-1">
                          <Building className="w-3.5 h-3.5" />
                          {exp.company}
                        </span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30">
                        {exp.badge}
                      </span>
                      <span className="md:hidden text-xs font-mono text-slate-400 mt-1">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Bullet achievements */}
                  <div className="space-y-2 mt-4 pt-4 border-t border-slate-700/50">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Leadership & Volunteering Timeline */}
        {activeTab === 'leadership' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.leadership.map((item) => (
              <div
                key={item.organization}
                className="p-7 rounded-2xl bg-gradient-to-b from-slate-800/70 to-slate-900/80 border border-slate-700/60 backdrop-blur-xl shadow-xl hover:border-purple-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 font-medium">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-1">{item.role}</h3>
                  <div className="text-sm font-semibold text-purple-300 mb-3">{item.organization}</div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1 text-purple-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
