import React from 'react';
import {
  X,
  Printer,
  Download,
  ExternalLink,
  MapPin,
  Phone,
  Mail,
  Award,
  BookOpen,
  Briefcase,
  Code,
  GraduationCap,
} from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      
      {/* Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header bar */}
        <div className="px-6 py-4 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="ml-2 font-mono text-xs text-slate-300 font-semibold">
              Sahil_Kshirsagar_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal-500 hover:bg-teal-600 text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-100 font-sans space-y-7 print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="text-center border-b border-slate-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-teal-400">
              {resumeData.personal.name}
            </h1>
            <p className="text-sm font-semibold text-slate-300 mt-1">
              Computer Science Graduate | Aspiring Software Engineer (MERN, Python)
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 mt-2.5">
              <span>{resumeData.personal.location}</span>
              <span>•</span>
              <span>{resumeData.personal.phone}</span>
              <span>•</span>
              <a href={`mailto:${resumeData.personal.email}`} className="text-teal-400 hover:underline">
                {resumeData.personal.email}
              </a>
              <span>•</span>
              <a href={resumeData.personal.linkedin} target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-1 mb-2">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {resumeData.personal.summary}
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-1 mb-2.5">
              Technical & Professional Skills
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              <div>
                <strong className="text-slate-200">Programming Languages:</strong> MongoDB, React.js, Node.js, Express.js, Core and Advance Java (project-based), Python, C++, SQL
              </div>
              <div>
                <strong className="text-slate-200">CS Fundamentals:</strong> Data Structures & Algorithms (DSA), Software Development Lifecycle (SDLC)
              </div>
              <div>
                <strong className="text-slate-200">Web Development:</strong> HTML, CSS, Bootstrap, Tailwind CSS, UI/UX
              </div>
              <div>
                <strong className="text-slate-200">Data & AI Tools:</strong> Python-based data analysis (data cleaning & visualization), Generative AI tools
              </div>
              <div>
                <strong className="text-slate-200">Professional Skills:</strong> Problem-Solving, Stakeholder Communication, Logical Reasoning, Analytical Thinking
              </div>
              <div>
                <strong className="text-slate-200">Languages:</strong> English, Hindi, Marathi
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {resumeData.projects.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold text-slate-200">
                    <span>{proj.title}</span>
                    <span className="text-xs font-mono text-slate-400 font-normal">{proj.timeline}</span>
                  </div>
                  <div className="text-[11px] font-mono text-teal-400 mb-1">{proj.organization}</div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-300">
                    {proj.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-1 mb-3">
              Experience
            </h2>
            <div className="space-y-4">
              {resumeData.experience.map((exp) => (
                <div key={exp.company} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold text-slate-200">
                    <span>{exp.role}</span>
                    <span className="text-xs font-mono text-slate-400 font-normal">{exp.period}</span>
                  </div>
                  <div className="text-[11px] font-mono text-teal-400 mb-1">
                    {exp.company} • {exp.location}
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-300">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {resumeData.education.map((edu) => (
                <div key={edu.degree} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold text-slate-200">
                    <span>{edu.degree}</span>
                    <span className="text-xs font-mono text-slate-400 font-normal">{edu.period}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">{edu.institution} • {edu.location}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-1 mb-2.5">
              Certifications & Achievements
            </h2>
            <ul className="list-disc pl-4 space-y-1.5 text-xs sm:text-sm text-slate-300">
              <li>Certification in HTML, CSS and Bootstrap — Dr. Ambedkar College, Nagpur (Jan '24)</li>
              <li>Presentation Skills — Saylor Academy (Nov '25)</li>
              <li>Student of the Year — Dr. Ambedkar College, Nagpur (Aug '24)</li>
              <li><strong className="text-teal-300">AIR-3, All India Thal Sainik Camp</strong> — DG NCC, New Delhi (Sep '23)</li>
              <li>West Zone Basketball Runner-Up — University Basketball Federation (Feb '26)</li>
            </ul>
          </div>

          {/* Leadership & Volunteering */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-1 mb-2">
              Leadership & Volunteering
            </h2>
            <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm text-slate-300">
              <li>Vice President, Rotaract Club of Nagpur United (Jul '26 – Present)</li>
              <li>Volunteer, Stambh Organization, Nagpur (Dec '24 – Present)</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
