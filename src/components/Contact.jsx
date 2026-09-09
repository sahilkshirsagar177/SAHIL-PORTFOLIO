import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { resumeData } from '../data/resumeData';

export default function Contact({ isDark }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity / Trainee Engineer Role',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('9049090996');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Direct mailto fallback link constructor
    const mailtoUrl = `mailto:${resumeData.personal.email}?subject=${encodeURIComponent(
      formState.subject + ' - From ' + formState.name
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#2dd4bf', '#38bdf8', '#a855f7'],
      });
    } catch (err) {}

    // Open mail client after slight pause
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-teal-500/10 text-teal-400 border border-teal-500/30 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>06. LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Open for Trainee Software Engineer roles, Full-Stack engineering opportunities, and technical projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary Contact Card */}
            <div className="p-7 rounded-3xl bg-gradient-to-b from-slate-800/70 to-slate-900/90 border border-slate-700/70 backdrop-blur-xl shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-400" />
                <span>Contact Details</span>
              </h3>

              {/* Email item */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-slate-400 block">Email Address</span>
                    <a
                      href={`mailto:${resumeData.personal.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-teal-400 transition-colors truncate block"
                    >
                      {resumeData.personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Phone & WhatsApp</span>
                    <a
                      href={`tel:${resumeData.personal.phone}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      {resumeData.personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Current Base</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    {resumeData.personal.location}
                  </span>
                </div>
              </div>

              {/* Social profiles */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Professional Handles:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={resumeData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={resumeData.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Availability Banner */}
            <div className="p-5 rounded-2xl bg-teal-950/30 border border-teal-500/20 text-xs sm:text-sm text-slate-300 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-teal-400 shrink-0" />
              <span>
                Ready to relocate or join immediately for Software Engineer Trainee / MERN / Python roles.
              </span>
            </div>

          </div>

          {/* Right Column: Direct Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-slate-800/70 to-slate-900/90 border border-slate-700/70 backdrop-blur-xl shadow-xl">
              
              <h3 className="text-xl font-bold text-slate-100 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-teal-400" />
                <span>Send Direct Inquiry</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below to send an instant message directly to Sahil's inbox.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-teal-950/40 border border-teal-500/40 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-teal-500/20 border border-teal-500/50 mx-auto flex items-center justify-center text-teal-400">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-100">Message Prepared!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your email client is opening with your formatted message to{' '}
                    <strong className="text-teal-300 font-mono">sahilkshirsagar456@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Subject</label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-teal-500 transition-colors"
                    >
                      <option value="Job Opportunity / Trainee Engineer Role">Job Opportunity / Trainee Engineer Role</option>
                      <option value="Full-Stack Web Development Project">Full-Stack Web Development Project</option>
                      <option value="Data Analytics & Python Collaboration">Data Analytics & Python Collaboration</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Sahil, I reviewed your portfolio and would like to discuss an opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 shadow-lg shadow-teal-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Sahil</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
