import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, ShieldCheck } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  const { education, certifications } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 bg-canvas relative border-t border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px bg-silicon-400/40 w-8"></div>
          <span className="font-mono text-xs uppercase tracking-widest text-silicon-400">
            05 // ACADEMICS &amp; CREDENTIALS
          </span>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Education &amp; Specialized Certifications
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Formal engineering degree coursework combined with industry HDL training programs.
          </p>
        </div>

        {/* 2-Column Grid: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <GraduationCap className="w-5 h-5 text-silicon-400" />
              <h3 className="text-lg font-bold text-white font-sans">
                Academic Pathway
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="bg-canvas-card rounded-xl border border-canvas-border p-5 hover:border-slate-700 transition-all shadow-md space-y-2.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-mono text-xs text-silicon-400 font-semibold">
                      {item.institution}
                    </span>
                    <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white font-sans">
                    {item.degree}
                  </h4>

                  {item.specialization && (
                    <div className="inline-block px-2 py-0.5 rounded bg-silicon-500/10 border border-silicon-500/30 text-silicon-300 font-mono text-xs">
                      Specialization: {item.specialization}
                    </div>
                  )}

                  {item.details && (
                    <p className="text-xs text-slate-400 leading-relaxed pt-1">
                      {item.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <Award className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-white font-sans">
                Industry Trainings &amp; Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-canvas-card rounded-xl border border-canvas-border p-5 hover:border-slate-700 transition-all shadow-md space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base font-bold text-white font-sans flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{cert.title}</span>
                    </h4>
                    <span className="font-mono text-xs text-slate-400 flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 self-start sm:self-auto">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {cert.date}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-emerald-400 font-medium">
                    {cert.issuer}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {cert.focus}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-lg bg-canvas-subtle border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Training credentials verified against official curriculum &amp; resume documents.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
