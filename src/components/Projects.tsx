import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { ProjectData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  Users, 
  Activity, 
  Terminal, 
  ArrowRight, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-24 bg-canvas relative border-t border-canvas-border">
      {/* Background Circuit Grid effect */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px bg-silicon-400/40 w-8"></div>
          <span className="font-mono text-xs uppercase tracking-widest text-silicon-400">
            03 // HARDWARE &amp; RTL PORTFOLIO
          </span>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Authentic hardware and digital design implementations with verifiable schematics, finite state logic, and embedded firmware.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-silicon-400 animate-pulse"></span>
            <span>INTERACTIVE TESTBENCHES ENABLED</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const isRoboticArm = project.id === 'robotic-arm-6dof';
            return (
              <div
                key={project.id}
                className="bg-canvas-card rounded-2xl border border-canvas-border hover:border-slate-700 transition-all shadow-xl overflow-hidden group"
              >
                {/* Project Header Bar */}
                <div className="px-6 py-4 border-b border-slate-850 bg-canvas-subtle/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-silicon-500/10 text-silicon-400 border border-silicon-500/20">
                      PROJECT // 0{index + 1}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.leadRole && (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                        <Users className="w-3.5 h-3.5" />
                        <span>Lead: Team of {project.teamSize}</span>
                      </div>
                    )}
                    <span className="text-xs font-mono text-slate-500">
                      VERIFIED REPORT
                    </span>
                  </div>
                </div>

                {/* Main Card Content */}
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Project Overview */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-silicon-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-slate-400 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Summary Bullets from Resume */}
                    <div className="space-y-2.5">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Key Accomplishments &amp; Implementation Details:
                      </div>
                      <ul className="space-y-2">
                        {project.summaryBullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-silicon-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Modal Trigger CTA */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-silicon-400 hover:bg-silicon-100 text-slate-950 font-bold font-mono text-xs transition-all shadow-md"
                      >
                        <Terminal className="w-3.5 h-3.5" />
                        <span>
                          {isRoboticArm
                            ? 'Inspect Schematics & C++ Firmware'
                            : 'Launch Live FSM Testbench Simulator'}
                        </span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
                      >
                        View Full Specs →
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Clean Technical Diagram / Visual */}
                  <div className="lg:col-span-5">
                    <div className="rounded-xl bg-canvas-subtle border border-slate-800 p-5 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-silicon-400" />
                          <span>{isRoboticArm ? 'SYSTEM ARCHITECTURE' : 'FSM STATE TRANSITION'}</span>
                        </span>
                        <span className="text-[10px] text-emerald-400 font-bold">SYNTHESIZED</span>
                      </div>

                      {/* Schematic Visual */}
                      {isRoboticArm ? (
                        <div className="space-y-3 font-mono text-xs">
                          {/* Flow Diagram */}
                          <div className="space-y-2">
                            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                              <span className="text-slate-400">INPUT STAGE</span>
                              <span className="text-silicon-400 font-bold">2x Joysticks (4 Analog Axes)</span>
                            </div>
                            <div className="text-center text-slate-600 text-xs">↓ [ADC Conversion &amp; Deadzone 50]</div>
                            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                              <span className="text-slate-400">CONTROLLER</span>
                              <span className="text-emerald-400 font-bold">Arduino Uno (moveGradually)</span>
                            </div>
                            <div className="text-center text-slate-600 text-xs">↓ [PWM Channels 3, 5, 6, 9, 10, 11]</div>
                            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                              <span className="text-slate-400">MAJOR JOINTS</span>
                              <span className="text-amber-400 font-bold">3x RC Digital 35kg (External Supply)</span>
                            </div>
                            <div className="text-center text-slate-600 text-xs">+</div>
                            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                              <span className="text-slate-400">END EFFECTOR</span>
                              <span className="text-purple-400 font-bold">3x SG90 Servos (Arduino 5V Rail)</span>
                            </div>
                          </div>

                          <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                            <strong>Safety Isolation:</strong> External power prevents inductive surge brownouts on the ATmega328P.
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3 font-mono text-xs">
                          {/* FSM 5-State Pipeline */}
                          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                            <div className="text-[10px] text-slate-500 uppercase">State Sequence Pipeline:</div>
                            <div className="flex items-center justify-between text-center gap-1">
                              {['S0 (000)', 'S1 (001)', 'S2 (010)', 'S3 (011)', 'S4 (100)'].map((st, i) => (
                                <React.Fragment key={st}>
                                  <div className="flex-1 py-1.5 px-1 bg-slate-900 rounded border border-purple-500/30 text-purple-300 font-bold text-[10px]">
                                    {st.split(' ')[0]}
                                  </div>
                                  {i < 4 && <span className="text-slate-600 text-[10px]">→</span>}
                                </React.Fragment>
                              ))}
                            </div>
                            <div className="text-center text-[10px] text-purple-400 mt-1">
                              ↻ S4 returns to S0 on next clock cycle
                            </div>
                          </div>

                          {/* Symmetry Match Equation */}
                          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
                            <div className="text-[10px] text-slate-500 uppercase">SYNCHRONOUS CHECK:</div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-300">Outer Bit Symmetry:</span>
                              <span className="text-emerald-400 font-bold">B3 == B0</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-300">Inner Bit Symmetry:</span>
                              <span className="text-emerald-400 font-bold">B2 == B1</span>
                            </div>
                            <div className="pt-1 border-t border-slate-800 text-[11px] text-slate-400">
                              Simulated in <strong>ModelSim</strong> &amp; <strong>EDA Playground</strong>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Quick Interactive Button */}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 flex items-center justify-center gap-2 transition-colors"
                      >
                        <span>Open Interactive Engineering View</span>
                        <ArrowRight className="w-3.5 h-3.5 text-silicon-400" />
                      </button>

                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
