import React, { useState } from 'react';
import {
  Terminal,
  Calendar,
  Building2,
  CheckCircle2,
  Play,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';
import ProjectPlayground from './ProjectPlayground';

export default function Projects({ isDark }) {
  const [selectedDemoId, setSelectedDemoId] = useState('purple-invigi-date');

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-teal-600 dark:text-teal-400 font-semibold mb-2">
            03. Practical Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Full-stack web application engineering and data analysis systems solving real productivity and analytical problems.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {resumeData.projects.map((project) => {
            const isPurple = project.id === 'purple-invigi-date';
            return (
              <div
                key={project.id}
                className={`rounded-2xl p-7 sm:p-8 border flex flex-col justify-between transition-all ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-xl'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-md'
                }`}
              >
                <div>
                  {/* Top Badge & Date */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${
                        isPurple
                          ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                          : 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20'
                      }`}
                    >
                      {project.type}
                    </span>

                    <div className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{project.timeline}</span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-teal-600 dark:text-teal-400 mb-4 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{project.organization}</span>
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 mb-6">
                    {project.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 mt-auto">
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] font-mono px-2.5 py-0.5 rounded-lg border ${
                          isDark
                            ? 'bg-slate-800/80 text-slate-300 border-slate-700'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Button */}
                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => {
                        setSelectedDemoId(project.id);
                        const el = document.getElementById('playground-view');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white shadow-sm transition-all"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Test Live Interactive Demo</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2.5 rounded-xl border transition-colors ${
                        isDark
                          ? 'bg-slate-800 text-slate-300 hover:text-white border-slate-700'
                          : 'bg-slate-100 text-slate-700 hover:text-slate-900 border-slate-200'
                      }`}
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Embedded Interactive Demo Simulator */}
        <div id="playground-view" className="mt-8">
          <ProjectPlayground activeProject={selectedDemoId} />
        </div>

      </div>
    </section>
  );
}
