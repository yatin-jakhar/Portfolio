import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu, Binary, Wrench, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  const categoryIcons: Record<string, React.ReactNode> = {
    'Hardware & Digital Design': <Cpu className="w-5 h-5 text-emerald-400" />,
    'HDL / Programming': <Binary className="w-5 h-5 text-silicon-400" />,
    'Tools & Platforms': <Wrench className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="skills" className="py-20 bg-canvas-subtle relative border-t border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px bg-silicon-400/40 w-8"></div>
          <span className="font-mono text-xs uppercase tracking-widest text-silicon-400">
            02 // TECHNICAL CAPABILITIES
          </span>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Verified Technical Competencies
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Strictly derived from academic coursework, simulation testbenches, and physical embedded projects.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>NO ARBITRARY PERCENTAGES • REAL DOMAIN MAPPINGS</span>
          </div>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((catGroup, idx) => (
            <div
              key={catGroup.category}
              className="bg-canvas-card rounded-xl border border-canvas-border p-5 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {categoryIcons[catGroup.category] || <Cpu className="w-5 h-5 text-silicon-400" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">CATEGORY 0{idx + 1}</span>
                      <h3 className="text-base font-semibold text-slate-100 font-sans">
                        {catGroup.category}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {catGroup.description}
                </p>

                {/* Skills Cards List */}
                <div className="space-y-3">
                  {catGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-lg bg-canvas-subtle/80 border border-slate-800/80 hover:border-silicon-500/30 transition-all group"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-silicon-400 shrink-0" />
                          <span className="text-sm font-semibold text-slate-200 group-hover:text-silicon-400 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0">
                          {skill.levelTag}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal pl-5">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Indicator */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>VERIFICATION: ACADEMIC &amp; LAB</span>
                <span>STATUS: APPLIED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
