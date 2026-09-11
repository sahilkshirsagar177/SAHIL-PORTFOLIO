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
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-teal-600 dark:text-teal-400 font-semibold mb-2">
            05. Academics & Recognitions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Education & Honors
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Formal university degrees, national honors, certifications, and athletic competitive achievements.
          </p>
        </div>

        {/* Education Degrees Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {resumeData.education.map((edu) => (
            <div
              key={edu.degree}
              className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between ${
                isDark
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {edu.degree}
                </h3>
                <div className="text-xs sm:text-sm font-semibold text-teal-600 dark:text-teal-400 mb-4">
                  {edu.institution}
                </div>

                <div className="space-y-2 mb-6">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </span>
                <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Honors, Certifications & Achievements Showcase */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-amber-500" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Certifications & National Accolades
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {resumeData.achievements.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div
                  key={item.title}
                  className={`p-5 rounded-2xl border flex flex-col justify-between ${
                    isDark
                      ? 'bg-slate-900/80 border-slate-800 text-slate-300'
                      : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                        {item.category}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-1">
                      {item.title}
                    </h4>
                    <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 mb-2">
                      {item.organization}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span>{item.event}</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{item.period}</span>
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
