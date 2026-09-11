import React from 'react';
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 pt-12 pb-10 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                {resumeData.personal.name}
              </span>
              <span>•</span>
              <span className="text-teal-600 dark:text-teal-400">Software Engineer Candidate</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs">
              Computer Science Graduate & MCA Scholar at SPPU, Pune.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={resumeData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 rounded border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-xs"
            >
              Resume Modal
            </button>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400">
          <span>© {new Date().getFullYear()} Sahil Kshirsagar. Crafted with care.</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
