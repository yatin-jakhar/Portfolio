import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-canvas-subtle border-t border-canvas-border font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-canvas-card border border-silicon-400/30 flex items-center justify-center text-silicon-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="text-slate-100 font-bold tracking-wider">
                YATIN SINGH JAKHAR
              </span>
              <div className="text-[10px] text-slate-500">
                ECE (VLSI) • Hardware &amp; RTL Portfolio
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400">
            <a href="#about" className="hover:text-silicon-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-silicon-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-silicon-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-silicon-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-silicon-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-silicon-400 transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits & Integrity Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All project data strictly verified from academic reports.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React, TypeScript &amp; Tailwind CSS</span>
            <span>•</span>
            <span className="text-slate-400">Faridabad, IN</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
