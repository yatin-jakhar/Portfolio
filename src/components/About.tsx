import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BookOpen, MapPin, Microchip, Layers, Wrench, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const facts = [
    {
      icon: <BookOpen className="w-4 h-4 text-silicon-400" />,
      label: "EDUCATION",
      val: "B.Tech in Electronics & Communication Engineering",
      sub: "Specialization: Very Large Scale Integration (VLSI)"
    },
    {
      icon: <Layers className="w-4 h-4 text-purple-400" />,
      label: "FOCUS",
      val: "RTL & Digital Logic Design",
      sub: "Finite State Machines, sequential circuits & timing verification"
    },
    {
      icon: <Microchip className="w-4 h-4 text-emerald-400" />,
      label: "HARDWARE",
      val: "Arduino & Embedded Systems",
      sub: "Multi-axis servo systems, analog joysticks, deadzone filters"
    },
    {
      icon: <Wrench className="w-4 h-4 text-amber-400" />,
      label: "SIMULATION",
      val: "EDA Playground & ModelSim",
      sub: "RTL testbench development & waveform debugging"
    },
    {
      icon: <MapPin className="w-4 h-4 text-rose-400" />,
      label: "LOCATION",
      val: personal.location,
      sub: `PIN Code: ${personal.pincode}`
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-sky-400" />,
      label: "INSTITUTION",
      val: "Manav Rachna University",
      sub: "Aug 2024 – Present"
    }
  ];

  return (
    <section id="about" className="py-20 bg-canvas relative border-t border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px bg-silicon-400/40 w-8"></div>
          <span className="font-mono text-xs uppercase tracking-widest text-silicon-400">
            01 // BACKGROUND & IDENTITY
          </span>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Short Introduction */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              An ECE student bridging digital logic models with physical hardware.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {personal.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-canvas-subtle border border-slate-800 text-xs font-mono text-slate-400 space-y-2">
              <div className="text-slate-200 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-silicon-400"></span>
                <span>ENGINEERING PHILOSOPHY</span>
              </div>
              <p className="leading-normal">
                Verifying digital systems in simulation first, understanding signal transitions at the clock edge, and structuring embedded firmware with predictable timing and clean power domains.
              </p>
            </div>
          </div>

          {/* Right Column: Small Technical Profile / Facts Grid */}
          <div className="lg:col-span-6">
            <div className="bg-canvas-card rounded-xl border border-canvas-border p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <span className="font-mono text-xs text-slate-400 tracking-wider">
                  TECHNICAL SPECIFICATION SHEET
                </span>
                <span className="text-[11px] font-mono text-silicon-400 px-2 py-0.5 rounded bg-silicon-500/10 border border-silicon-500/20">
                  UNDERGRADUATE PROFILE
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {facts.map((fact, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-lg bg-canvas-subtle border border-slate-800/70 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 mb-1">
                      {fact.icon}
                      <span className="font-bold tracking-wider">{fact.label}</span>
                    </div>
                    <div className="text-sm font-semibold text-slate-200">
                      {fact.val}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {fact.sub}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] font-mono text-slate-500 flex justify-between">
                <span>PRIMARY TRACK: VLSI DESIGN</span>
                <span>STATUS: ACTIVE UNDERGRADUATE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
