import React, { useState } from 'react';
import {
  Code,
  Globe,
  Code2,
  Cpu,
  Sparkles,
  Layers,
  Database,
  CheckCircle2,
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Skills({ isDark }) {
  const skillGroups = [
    {
      name: 'Programming & Languages',
      icon: Code2,
      description: 'Core languages used for problem solving, backend systems, and application logic.',
      skills: [
        { name: 'Python', role: 'Data Analysis, Scripting, Automation' },
        { name: 'Core & Advance Java', role: 'OOP, Backend Logic & Architecture' },
        { name: 'C++', role: 'Data Structures, Algorithmic Foundations' },
        { name: 'SQL', role: 'Relational Database Queries & Schema' },
      ],
    },
    {
      name: 'Full-Stack & Web Development',
      icon: Globe,
      description: 'Modern frontend interfaces, RESTful services, and full-stack integration.',
      skills: [
        { name: 'React.js', role: 'Component State & Modern UI' },
        { name: 'Node.js & Express.js', role: 'REST APIs & Server Logic' },
        { name: 'MongoDB', role: 'NoSQL Schemas & CRUD' },
        { name: 'Tailwind CSS / Bootstrap', role: 'Responsive Layouts & Styling' },
        { name: 'HTML5 & CSS3', role: 'Semantic Markup & Modern CSS' },
      ],
    },
    {
      name: 'Core CS & Engineering Fundamentals',
      icon: Layers,
      description: 'Theoretical foundations and engineering best practices.',
      skills: [
        { name: 'Data Structures & Algorithms (DSA)', role: 'Problem-Solving & Optimization' },
        { name: 'Object-Oriented Programming (OOP)', role: 'Modular Software Design' },
        { name: 'Database Management (DBMS)', role: 'Normalization & Query Optimization' },
        { name: 'SDLC & Agile Workflows', role: 'Iterative Development & Planning' },
      ],
    },
    {
      name: 'Data Analytics & AI Tools',
      icon: Cpu,
      description: 'Exploratory data analysis, statistical insights, and modern developer tooling.',
      skills: [
        { name: 'Pandas & NumPy', role: 'Data Cleaning & Array Manipulation' },
        { name: 'Matplotlib & Seaborn', role: 'Exploratory Visualizations' },
        { name: 'Git & GitHub', role: 'Version Control & Collaboration' },
        { name: 'Generative AI & LLM Tools', role: 'AI-assisted Development & APIs' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-teal-600 dark:text-teal-400 font-semibold mb-2">
            02. Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Skills & Proficiencies
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Categorized overview of languages, frameworks, core computer science concepts, and analytical tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.name}
                className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100">
                      {group.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                    {group.description}
                  </p>

                  <div className="space-y-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-1 ${
                          isDark
                            ? 'bg-slate-800/40 border-slate-700/60'
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          {skill.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Strengths */}
        <div
          className={`p-6 sm:p-7 rounded-2xl border ${
            isDark
              ? 'bg-slate-900/60 border-slate-800 text-slate-300'
              : 'bg-slate-100 border-slate-200 text-slate-700'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
              Professional & Collaborative Strengths
            </h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              'Analytical Problem Solving',
              'Stakeholder Communication',
              'Leadership & Team Management',
              'Rapid Adaptability & Learning',
            ].map((strength) => (
              <div
                key={strength}
                className={`p-3 rounded-xl border text-center text-xs font-medium ${
                  isDark
                    ? 'bg-slate-800/60 border-slate-700 text-slate-200'
                    : 'bg-white border-slate-200 text-slate-800 shadow-sm'
                }`}
              >
                {strength}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
