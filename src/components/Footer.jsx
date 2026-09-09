import React from 'react';
import {
  ArrowUp,
  Heart,
  Terminal,
  Mail,
  Phone,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070b14] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-start">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center font-bold text-white shadow-md shadow-teal-500/25">
                <span className="font-display text-sm">SK</span>
              </div>
              <span className="text-base font-bold text-slate-100 font-display">
                {resumeData.personal.name}
              </span>
            </div>
            <p className="text-slate-400 max-w-sm text-xs leading-relaxed">
              Computer Science Graduate & MCA Scholar specializing in MERN Stack, Python, and Data Structures & Algorithms. Built with React & Tailwind CSS.
            </p>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono uppercase text-slate-300 font-semibold block text-[11px]">
              Navigation
            </span>
            <div className="flex flex-col space-y-1.5">
              <a href="#about" className="hover:text-teal-400 transition-colors">About & Vision</a>
              <a href="#skills" className="hover:text-teal-400 transition-colors">Technical Arsenal</a>
              <a href="#projects" className="hover:text-teal-400 transition-colors">Featured Projects</a>
              <a href="#experience" className="hover:text-teal-400 transition-colors">Experience & Leadership</a>
              <a href="#education" className="hover:text-teal-400 transition-colors">Education & Honors</a>
              <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Col 3: Direct Connect & Resume */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono uppercase text-slate-300 font-semibold block text-[11px]">
              Fast Connect
            </span>
            <div className="flex items-center gap-3">
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${resumeData.personal.email}`}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-teal-400 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              Open ATS Resume Modal
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>© {new Date().getFullYear()} Sahil Kshirsagar. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
