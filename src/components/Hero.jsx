import React from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  GraduationCap,
  Trophy,
  Award,
  Users,
  Code2,
  FileText,
  Phone,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';
import sahilPhoto from '../assets/sahil.jpg';

export default function Hero({ onOpenResume, isDark }) {
  const techPills = [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Python',
    'Java',
    'SQL',
    'DSA',
    'Tailwind CSS',
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Intro & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Trainee Software Engineer / Full-Stack Roles</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-tight mb-3">
              Hi, I'm <span className="text-teal-600 dark:text-teal-400">{resumeData.personal.name}</span>
            </h1>

            {/* Subtitle / Role */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 mb-4">
              Computer Science Graduate & MCA Scholar at SPPU, Pune
            </p>

            {/* Location & Quick Education line */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>{resumeData.personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Modern College of Engineering (SPPU)</span>
              </div>
            </div>

            {/* Bio summary */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              I build scalable, clean web applications and analytical pipelines. Experienced in the{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">MERN Stack</strong>,{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">Python data analysis</strong>, and{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">Data Structures & Algorithms</strong>.
              Combining technical problem-solving with high-impact communication and disciplined leadership.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-3.5 items-center mb-9 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm border transition-all duration-200 w-full sm:w-auto ${
                  isDark
                    ? 'bg-slate-800/90 text-slate-200 border-slate-700 hover:bg-slate-800 hover:text-white hover:border-slate-600'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Mail className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-sm border transition-all duration-200 w-full sm:w-auto ${
                  isDark
                    ? 'bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800/80 hover:text-white'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                <FileText className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Tech Stack Pills */}
            <div className="w-full pt-6 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 block">
                Core Technologies & Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {techPills.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-3 py-1 rounded-lg border font-mono ${
                      isDark
                        ? 'bg-slate-800/60 text-slate-300 border-slate-700/80'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Photo & Personal Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end order-1 lg:order-2">
            <div
              className={`w-full max-w-sm rounded-2xl border p-4 sm:p-5 transition-all ${
                isDark
                  ? 'bg-slate-900/90 border-slate-800 shadow-xl'
                  : 'bg-white border-slate-200 shadow-lg'
              }`}
            >
              {/* Photo Frame */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-200 dark:bg-slate-800 mb-4 border border-slate-200 dark:border-slate-700/60">
                <img
                  src={sahilPhoto}
                  alt="Sahil Kshirsagar"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Subtle Overlay Caption */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                  <div className="font-semibold text-base">Sahil Kshirsagar</div>
                  <div className="text-xs text-slate-200">Software Developer • Pune, India</div>
                </div>
              </div>

              {/* Distinction Highlights Under Photo */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                
                <div
                  className={`p-2.5 rounded-xl border flex items-center gap-2.5 ${
                    isDark
                      ? 'bg-slate-800/60 border-slate-700/60'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">AIR-3</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">All India NCC Camp</div>
                  </div>
                </div>

                <div
                  className={`p-2.5 rounded-xl border flex items-center gap-2.5 ${
                    isDark
                      ? 'bg-slate-800/60 border-slate-700/60'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <Award className="w-4 h-4 text-teal-500 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">7.05 GPA</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">B.Sc. in Comp Sci</div>
                  </div>
                </div>

              </div>

              {/* Direct Quick Links Bar */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:sahilkshirsagar456@gmail.com"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    title="Email Sahil"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:9049090996"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    title="Call or WhatsApp"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={resumeData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={resumeData.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                  ● Pune, MH
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
