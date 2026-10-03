import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, Building, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 bg-canvas-subtle relative border-t border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px bg-silicon-400/40 w-8"></div>
          <span className="font-mono text-xs uppercase tracking-widest text-silicon-400">
            04 // PROFESSIONAL EXPERIENCE
          </span>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Institutional Experience &amp; Logistics
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Demonstrating cross-functional execution, stakeholder communication, and organizational leadership across multi-day national conferences.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-canvas-card rounded-2xl border border-canvas-border p-6 sm:p-8 hover:border-slate-700 transition-all shadow-xl"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/80 gap-3">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-silicon-500/10 text-silicon-400 text-xs font-mono mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{item.type}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-1">
                    <Building className="w-4 h-4 text-slate-400" />
                    <span>{item.organization}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-silicon-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-6 space-y-4">
                <p className="text-sm text-slate-300">
                  {item.description}
                </p>

                <div className="space-y-3 pt-2">
                  {item.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Truthful Note / Context */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>FOCUS: OPERATIONAL &amp; ACADEMIC COORDINATION</span>
                <span>AUTHENTIC RESUME RECORD</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
