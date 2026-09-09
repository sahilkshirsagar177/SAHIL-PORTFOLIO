import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  Database,
  Code2,
  Cpu,
  Trophy,
  GraduationCap,
  Users,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';

export default function Hero({ onOpenResume, isDark }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    'Aspiring Software Engineer',
    'MERN Stack Developer',
    'Python & Data Analyst',
    'MCA Scholar & Problem Solver',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const techBadges = [
    { name: 'React.js', color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30' },
    { name: 'Node.js', color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30' },
    { name: 'Python', color: 'from-amber-500/20 to-yellow-500/20 text-amber-300 border-amber-500/30' },
    { name: 'Java', color: 'from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/30' },
    { name: 'MongoDB', color: 'from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30' },
    { name: 'DSA', color: 'from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30' },
    { name: 'SQL', color: 'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30' },
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden">
      {/* Subtle background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Information & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/30 mb-6 shadow-sm shadow-teal-500/10 animate-pulse-slow">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-teal-400 -ml-4" />
              <span>Available for Trainee Software Engineer / Full-Stack Roles</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4">
              Hi, I'm{' '}
              <span className="text-gradient">
                {resumeData.personal.name}
              </span>
            </h1>

            {/* Dynamic Animated Role Badge */}
            <div className="h-10 mb-6 flex items-center">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-slate-800/60 dark:bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
                <Terminal className="w-4 h-4 text-teal-400" />
                <span className="font-mono text-sm sm:text-base font-semibold text-teal-300 transition-all duration-300">
                  {roles[roleIndex]}
                </span>
              </div>
            </div>

            {/* Location & Key Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-500" />
                <span>{resumeData.personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>MCA Scholar (SPPU) & B.Sc CS Graduate</span>
              </div>
            </div>

            {/* Summary Excerpt */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300/90 leading-relaxed max-w-2xl mb-8">
              Passionate Computer Science graduate with hands-on experience building scalable web applications with the{' '}
              <strong className="text-teal-400 font-semibold">MERN Stack</strong>, developing{' '}
              <strong className="text-cyan-400 font-semibold">Python data analysis</strong> pipelines, and solving complex problems using{' '}
              <strong className="text-indigo-400 font-semibold">Data Structures & Algorithms</strong>.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-all duration-300 w-full sm:w-auto ${
                  isDark
                    ? 'bg-slate-800/80 text-slate-200 border-slate-700 hover:bg-slate-700/80 hover:text-white'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:text-slate-900 shadow-sm'
                }`}
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>Get In Touch</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-300 hover:text-white border border-transparent hover:border-slate-700 transition-all duration-300 w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>Resume Preview</span>
              </button>
            </div>

            {/* Tech Stack Chips */}
            <div className="w-full">
              <div className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-3 flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Primary Arsenal:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((tech) => (
                  <span
                    key={tech.name}
                    className={`text-xs font-mono font-medium px-3 py-1 rounded-lg border bg-gradient-to-r ${tech.color} backdrop-blur-sm transition-transform hover:scale-105`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Distinction & Interactive Showcase Card */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Main Interactive Profile Showcase Card */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-800/70 to-slate-900/90 border border-slate-700/60 backdrop-blur-xl shadow-2xl overflow-hidden group">
              
              {/* Card top banner */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">sahil.profile.tsx</span>
                </div>
                <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/30">
                  Ready to Deploy
                </span>
              </div>

              {/* Distinction Stat Grid */}
              <div className="grid grid-cols-2 gap-3.5 mb-5">
                
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-teal-500/40 transition-colors">
                  <div className="flex items-center gap-2 text-teal-400 mb-1">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold font-mono">AIR-3 (National)</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-medium">All India Thal Sainik Camp (NCC)</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-teal-500/40 transition-colors">
                  <div className="flex items-center gap-2 text-teal-400 mb-1">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold font-mono">7.05 GPA</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-medium">B.Sc. in Computer Science</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-teal-500/40 transition-colors">
                  <div className="flex items-center gap-2 text-teal-400 mb-1">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-bold font-mono">Student of Year</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-medium">Dr. Ambedkar College (2024)</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-teal-500/40 transition-colors">
                  <div className="flex items-center gap-2 text-teal-400 mb-1">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold font-mono">Vice President</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-medium">Rotaract Club of Nagpur</p>
                </div>

              </div>

              {/* Code Snippet Preview */}
              <div className="p-3.5 rounded-xl bg-[#090d16] border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
                <div className="text-slate-500">// Software Engineer Candidate</div>
                <div>
                  <span className="text-purple-400">const</span> <span className="text-teal-300">engineer</span> = &#123;
                </div>
                <div className="pl-4">
                  name: <span className="text-emerald-300">'Sahil Kshirsagar'</span>,
                </div>
                <div className="pl-4">
                  education: <span className="text-emerald-300">'MCA @ SPPU | B.Sc CS'</span>,
                </div>
                <div className="pl-4">
                  focus: [<span className="text-amber-300">'MERN'</span>, <span className="text-amber-300">'Python'</span>, <span className="text-amber-300">'DSA'</span>],
                </div>
                <div className="pl-4">
                  discipline: <span className="text-cyan-300">'National NCC Ranker (AIR-3)'</span>,
                </div>
                <div className="pl-4">
                  hireReady: <span className="text-teal-400">true</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Social Quick Links */}
              <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:sahilkshirsagar456@gmail.com"
                    className="hover:text-teal-400 transition-colors flex items-center gap-1"
                    title="Send Email"
                  >
                    <Mail className="w-3.5 h-3.5 text-teal-400" />
                    <span>sahilkshirsagar456@gmail.com</span>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-slate-800 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-slate-800 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
