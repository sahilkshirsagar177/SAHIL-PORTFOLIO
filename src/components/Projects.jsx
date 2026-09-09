import React, { useState } from 'react';
import {
  Terminal,
  ExternalLink,
  Calendar,
  Building2,
  CheckCircle2,
  Layers,
  Sparkles,
  Flame,
  BarChart3,
  Play,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';
import ProjectPlayground from './ProjectPlayground';

export default function Projects({ isDark }) {
  const [activeProjectTab, setActiveProjectTab] = useState('all');
  const [showPlayground, setShowPlayground] = useState(true);
  const [selectedDemoId, setSelectedDemoId] = useState('purple-invigi-date');

  const filteredProjects =
    activeProjectTab === 'all'
      ? resumeData.projects
      : resumeData.projects.filter((p) => p.category === activeProjectTab);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-teal-500/10 text-teal-400 border border-teal-500/30 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>03. FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Engineering <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Hands-on full-stack software and data analysis systems built to solve real-world productivity and analytical challenges.
          </p>
        </div>

        {/* Project Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {['all', 'Full-Stack Web App', 'Data & AI'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveProjectTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeProjectTab === tab
                  ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/20'
                  : isDark
                  ? 'bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/60'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
              }`}
            >
              {tab === 'all' ? 'All Projects' : tab}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => {
            const isPurple = project.id === 'purple-invigi-date';
            return (
              <div
                key={project.id}
                className="relative rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-slate-800/70 to-slate-900/90 border border-slate-700/70 backdrop-blur-xl shadow-2xl flex flex-col justify-between group hover:border-teal-500/50 transition-all duration-300"
              >
                <div>
                  {/* Top Badge & Date */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${
                        isPurple
                          ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
                          : 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
                      }`}
                    >
                      {isPurple ? <Flame className="w-3.5 h-3.5" /> : <BarChart3 className="w-3.5 h-3.5" />}
                      <span>{project.type}</span>
                    </span>

                    <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{project.timeline}</span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-teal-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-teal-400 mb-4 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{project.organization}</span>
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 mb-6">
                    {project.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack & Actions */}
                <div className="pt-6 border-t border-slate-700/60 mt-auto">
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
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
                        setShowPlayground(true);
                        const el = document.getElementById('playground-view');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 shadow-md shadow-teal-500/20 transition-all hover:scale-[1.02]"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Launch Interactive Demo</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
                        title="View Source Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Embedded Interactive Playground Section */}
        <div id="playground-view" className="mt-8">
          <ProjectPlayground activeProject={selectedDemoId} />
        </div>

      </div>
    </section>
  );
}
