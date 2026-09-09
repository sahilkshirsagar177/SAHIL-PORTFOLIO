import React from 'react';
import {
  GraduationCap,
  Award,
  Trophy,
  Medal,
  Presentation,
  Code,
  ShieldAlert,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function EducationAchievements({ isDark }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert':
        return ShieldAlert;
      case 'Award':
        return Award;
      case 'Medal':
        return Medal;
      case 'Presentation':
        return Presentation;
      case 'Code':
      default:
        return Code;
    }
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-teal-500/10 text-teal-400 border border-teal-500/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05. ACADEMICS & RECOGNITIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Education & <span className="text-gradient">Distinctions</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Formal university degrees, national honors, certifications, and athletic competitive achievements.
          </p>
        </div>

        {/* Education Degrees Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {resumeData.education.map((edu, idx) => (
            <div
              key={edu.degree}
              className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-800/70 to-slate-900/90 border border-slate-700/70 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:border-teal-500/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/30">
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-1 group-hover:text-teal-300 transition-colors">
                  {edu.degree}
                </h3>
                <div className="text-sm font-semibold text-teal-400 mb-4">{edu.institution}</div>

                <div className="space-y-2 mb-6">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </span>
                <span className="flex items-center gap-1 text-teal-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Honors, Certifications & Achievements Showcase */}
        <div>
          <div className="flex items-center gap-2.5 mb-8">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold text-slate-100">
              Certifications & National Accolades
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {resumeData.achievements.map((item) => {
              const Icon = getIcon(item.icon);
              const isTop = item.title.includes('AIR-3') || item.title.includes('Student of the Year');
              return (
                <div
                  key={item.title}
                  className={`p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group ${
                    isTop
                      ? 'bg-gradient-to-b from-slate-800/90 to-slate-900/95 border-amber-500/30 hover:border-amber-400 shadow-xl shadow-amber-500/5'
                      : 'bg-slate-800/60 border-slate-700/60 hover:border-teal-500/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isTop
                            ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                            : 'bg-teal-500/10 text-teal-400 border border-teal-500/30'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {item.category}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-100 text-base mb-1 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h4>
                    <div className="text-xs font-semibold text-teal-400 mb-2">{item.organization}</div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-700/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{item.event}</span>
                    <span className="text-teal-400 font-bold">{item.period}</span>
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
