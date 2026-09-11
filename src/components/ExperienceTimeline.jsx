import React, { useState } from 'react';
import {
  Briefcase,
  Users,
  Calendar,
  MapPin,
  CheckCircle2,
  Building,
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ExperienceTimeline({ isDark }) {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-teal-600 dark:text-teal-400 font-semibold mb-2">
            04. Experience & Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Work Experience & Impact
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Professional roles in business development, UI/UX design, and executive student leadership.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div
            className={`inline-flex p-1 rounded-xl border ${
              isDark
                ? 'bg-slate-900 border-slate-800'
                : 'bg-slate-100 border-slate-200'
            }`}
          >
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'experience'
                  ? 'bg-teal-600 dark:bg-teal-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('leadership')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'leadership'
                  ? 'bg-teal-600 dark:bg-teal-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Leadership & Volunteering</span>
            </button>
          </div>
        </div>

        {/* Professional Experience */}
        {activeTab === 'experience' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {resumeData.experience.map((exp) => (
              <div
                key={exp.company}
                className={`p-6 sm:p-7 rounded-2xl border ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300'
                    : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                      <span className="font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1">
                        <Building className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 font-medium">
                      {exp.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Leadership & Volunteering */}
        {activeTab === 'leadership' && (
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.leadership.map((item) => (
              <div
                key={item.organization}
                className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300'
                    : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-medium">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {item.role}
                  </h3>
                  <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 mb-3">
                    {item.organization}
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
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
