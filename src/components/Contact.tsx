import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Copy, 
  Check, 
  FileDown, 
  Send, 
  ExternalLink,
  Code2,
  FileText
} from 'lucide-react';

// Official SVG Icons for Brand fidelity
const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      subject || 'Inquiry regarding VLSI / Hardware Engineering'
    )}&body=${encodeURIComponent(
      `Hi Yatin,\n\nMy name is ${name || '[Your Name]'}.\n\n${message}\n\nBest regards,\n${name}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const isGithubConfigured = personal.github && personal.github !== 'GITHUB_URL_HERE';

  return (
    <section id="contact" className="py-24 bg-canvas relative border-t border-canvas-border">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-silicon-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px bg-silicon-400/40 w-8"></div>
          <span className="font-mono text-xs uppercase tracking-widest text-silicon-400">
            07 // GET IN TOUCH
          </span>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        {/* Closing Title */}
        <div className="mb-14 text-center max-w-2xl mx-auto space-y-3">
          <p className="font-mono text-xs text-silicon-400 uppercase tracking-widest">
            Have a project, idea, or opportunity?
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-sans">
            Let's build something.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I am currently open to internship opportunities, research collaborations, and discussions in VLSI, digital logic, and embedded hardware development.
          </p>
        </div>

        {/* 2-Column Contact Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="bg-canvas-card rounded-2xl border border-canvas-border p-6 shadow-xl space-y-4 hover:border-silicon-400/40 transition-all">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Mail className="w-4 h-4 text-silicon-400" />
                  <span>PRIMARY INBOX</span>
                </span>
                <span className="text-emerald-400">DIRECT ROUTE</span>
              </div>

              <div>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-base sm:text-lg font-mono font-bold text-slate-100 hover:text-silicon-400 transition-colors break-all"
                >
                  {personal.email}
                </a>
                <p className="text-xs text-slate-400 mt-1">
                  Click to launch your email client, or copy address to clipboard.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex-1 py-2 px-3 rounded-lg bg-silicon-400 hover:bg-silicon-100 text-slate-950 font-bold font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Compose Mail</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs flex items-center gap-1.5 border border-slate-700 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Social & Networking Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* LinkedIn */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-canvas-card border border-canvas-border hover:border-silicon-400/40 hover:bg-canvas-subtle transition-all group shadow-md"
              >
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <LinkedInIcon className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-silicon-400" />
                </div>
                <div className="font-semibold text-slate-200 text-sm">
                  LinkedIn Profile
                </div>
                <div className="text-[11px] font-mono text-slate-400 truncate mt-0.5">
                  linkedin.com/in/yatinsinghjakhar
                </div>
              </a>

              {/* GitHub Placeholder Handling (Rule 29: Do not fabricate link) */}
              <div className="p-4 rounded-xl bg-canvas-card border border-canvas-border relative shadow-md">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <GitHubIcon className="w-5 h-5 text-slate-400" />
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                    isGithubConfigured 
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                      : 'bg-slate-900 border-slate-800 text-amber-400'
                  }`}>
                    {isGithubConfigured ? 'LINKED' : 'PLACEHOLDER'}
                  </span>
                </div>
                <div className="font-semibold text-slate-200 text-sm">
                  GitHub Handle
                </div>
                {isGithubConfigured ? (
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-silicon-400 hover:underline block truncate mt-0.5"
                  >
                    {personal.github}
                  </a>
                ) : (
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                    Configure in <code className="text-silicon-300">portfolioData.ts</code>
                  </div>
                )}
              </div>

            </div>

            {/* Location & Telephone Info */}
            <div className="p-4 rounded-xl bg-canvas-subtle border border-slate-800 text-xs font-mono space-y-2">
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{personal.location} (PIN: {personal.pincode})</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{personal.phone}</span>
              </div>
            </div>

            {/* Official PDF Documents */}
            <div className="p-4 rounded-xl bg-canvas-card border border-canvas-border space-y-3">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Official PDF Documents (Source of Truth):
              </span>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={personal.resumeUrl}
                  download="Yatin_Singh_Jakhar_Resume.pdf"
                  className="flex-1 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-700/80 text-xs font-mono text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5 text-silicon-400" />
                  <span>Download Resume (PDF)</span>
                </a>
                <a
                  href={personal.projectReportsUrl}
                  download="Yatin_Project_Reports.pdf"
                  className="flex-1 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-700/80 text-xs font-mono text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-purple-400" />
                  <span>Project Reports (PDF)</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="bg-canvas-card rounded-2xl border border-canvas-border p-6 sm:p-8 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                  <Code2 className="w-4 h-4 text-silicon-400" />
                  <span>TRANSMIT DIRECT DISPATCH</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  CLIENT-SIDE PROTOCOL
                </span>
              </div>

              <form onSubmit={handleSendDraft} className="space-y-4 text-xs font-mono">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-slate-400 uppercase tracking-wider block">
                    Your Full Name / Organization
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Sharma / Tech Recruiter / Peer Student"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-canvas-subtle border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-silicon-400 transition-colors font-sans text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-slate-400 uppercase tracking-wider block">
                    Subject / Discussion Scope
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. VLSI Internship / RTL Discussion / Project Collaboration"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-canvas-subtle border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-silicon-400 transition-colors font-sans text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-slate-400 uppercase tracking-wider block">
                    Message Body
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Details about the role, technical question, or project inquiry..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-canvas-subtle border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-silicon-400 transition-colors font-sans text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-silicon-400 hover:bg-silicon-100 text-slate-950 font-bold font-mono text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch Email Draft to Yatin</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center font-sans">
                  This opens your preferred email client directly addressed to <strong>{personal.email}</strong>.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
