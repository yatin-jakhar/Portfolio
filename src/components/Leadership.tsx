import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Users2, Sparkles, Code2 } from 'lucide-react';

export const Leadership: React.FC = () => {
  const { leadership } = PORTFOLIO_DATA;

  const roleIcons = [
    <Users2 className="w-5 h-5 text-silicon-400" />,
    <Code2 className="w-5 h-5 text-emerald-400" />,
    <Sparkles className="w-5 h-5 text-purple-400" />,
  ];

  return (
    <section id="leadership" className="py-20 bg-canvas-subtle relative border-t border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px bg-silicon-400/40 w-8"></div>
          <span className="font-mono text-xs uppercase tracking-widest text-silicon-400">
            06 // LEADERSHIP &amp; BEYOND
          </span>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Campus Leadership &amp; Creative Representation
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Active involvement in university event operations, peer technical mentorship, and competitive arts representation.
          </p>
        </div>

        {/* 3 Activity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadership.map((item, index) => (
            <div
              key={index}
              className="bg-canvas-card rounded-xl border border-canvas-border p-6 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    {roleIcons[index] || <Users2 className="w-5 h-5 text-silicon-400" />}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    ROLE 0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-sans">
                    {item.role}
                  </h3>
                  <div className="text-xs font-mono text-silicon-400 mt-0.5">
                    {item.organization}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.highlights}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-slate-800/80 mt-6 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
