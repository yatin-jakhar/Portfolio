import React, { useState, useEffect } from 'react';
import { ArrowRight, FileDown, Terminal, Play, Pause, RefreshCw, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  // Interactive clock cycle simulator state
  const [clockCycle, setClockCycle] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [sampleBit, setSampleBit] = useState(1);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setClockCycle((prev) => (prev + 1) % 16);
      setSampleBit((prev) => (prev === 1 ? 0 : 1));
    }, 1200);
    return () => clearInterval(interval);
  }, [isRunning]);

  const identityTags = [
    'VERILOG',
    'RTL DESIGN',
    'DIGITAL LOGIC',
    'EMBEDDED SYSTEMS',
    'CIRCUIT ANALYSIS',
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-silicon-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Brand & Intro */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-canvas-card border border-canvas-border text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-400">STATUS:</span>
              <span className="text-slate-200">B.Tech ECE (VLSI) • Manav Rachna University</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <p className="text-lg sm:text-xl font-mono text-silicon-400 font-medium">
                Electronics &amp; Communication Engineering
                <span className="block text-sm sm:text-base text-slate-400 font-normal mt-1">
                  Specialization: <span className="text-slate-200">Very Large Scale Integration (VLSI)</span>
                </span>
              </p>
            </div>

            {/* Core Truthful Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Building at the intersection of <span className="text-white font-medium">digital logic</span>,{' '}
              <span className="text-white font-medium">RTL design</span>, and{' '}
              <span className="text-white font-medium">embedded systems</span>. Exploring synthesizable Verilog architectures and practical microcontroller hardware.
            </p>

            {/* Technical Identity Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {identityTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] sm:text-xs tracking-wider px-2.5 py-1 rounded bg-canvas-subtle border border-slate-800 text-slate-300 hover:border-silicon-400/50 hover:text-silicon-400 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-silicon-400 text-slate-950 font-semibold text-sm hover:bg-silicon-100 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all font-mono"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Yatin_Singh_Jakhar_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-canvas-card border border-canvas-border hover:border-silicon-400/50 text-slate-200 hover:text-white text-sm font-mono transition-all"
              >
                <FileDown className="w-4 h-4 text-silicon-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-slate-400 hover:text-slate-200 text-sm font-mono transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Fast Stats Bar */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg text-left">
              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase block">RTL &amp; HDL</span>
                <span className="text-sm font-semibold text-slate-200 font-mono">Verilog HDL</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase block">Simulation</span>
                <span className="text-sm font-semibold text-slate-200 font-mono">ModelSim / EDA</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase block">Embedded</span>
                <span className="text-sm font-semibold text-slate-200 font-mono">Arduino / C++</span>
              </div>
            </div>

          </div>

          {/* Right Column: Engineering Hardware & RTL Circuit Visualizer */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl bg-canvas-subtle border border-slate-800/90 shadow-2xl p-5 overflow-hidden">
              
              {/* Header: Signal Monitor */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <Terminal className="w-4 h-4 text-silicon-400" />
                  <span>LOGIC_TRACE_CORE :: RTL_MONITOR</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsRunning(!isRunning)}
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title={isRunning ? "Pause clock" : "Resume clock"}
                  >
                    {isRunning ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                  <button
                    onClick={() => setClockCycle((prev) => (prev + 1) % 16)}
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Single clock step"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* RTL Waveform / Bus Display */}
              <div className="py-4 space-y-3 font-mono text-xs">
                
                {/* Clock Signal */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-silicon-400 font-semibold">
                      <span>clk</span>
                      <span className="text-[9px] text-slate-500">[POSEDGE]</span>
                    </span>
                    <span className="text-slate-500">CYCLE #{clockCycle.toString().padStart(2, '0')}</span>
                  </div>
                  {/* Visual Clock Pulse */}
                  <div className="h-7 bg-slate-950/80 rounded border border-slate-800/70 p-1 flex items-center overflow-hidden">
                    <div className="flex items-center gap-1 w-full">
                      {[...Array(12)].map((_, i) => {
                        const isHigh = (i + clockCycle) % 2 === 0;
                        return (
                          <div
                            key={i}
                            className={`flex-1 h-4 transition-all duration-300 rounded-sm flex items-center justify-center text-[9px] font-bold ${
                              isHigh
                                ? 'bg-silicon-500/30 text-silicon-400 border-t-2 border-silicon-400'
                                : 'bg-slate-900 text-slate-600 border-b-2 border-slate-700'
                            }`}
                          >
                            {isHigh ? '1' : '0'}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Serial Data In Waveform */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span className="text-emerald-400 font-semibold">data_in [SERIAL]</span>
                    <span className="text-emerald-400 font-bold">STATE: BIT {sampleBit}</span>
                  </div>
                  <div className="h-7 bg-slate-950/80 rounded border border-slate-800/70 p-1 flex items-center">
                    <div className="flex items-center gap-1 w-full">
                      {[...Array(12)].map((_, i) => {
                        const bit = ((i * 3 + clockCycle) % 7 > 3) ? 1 : 0;
                        return (
                          <div
                            key={i}
                            className={`flex-1 h-4 rounded-sm flex items-center justify-center text-[9px] font-mono ${
                              bit === 1
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                                : 'bg-slate-900 text-slate-600 border border-slate-800'
                            }`}
                          >
                            {bit}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Register State Matrix */}
                <div className="p-3 rounded-lg bg-slate-950/90 border border-slate-800 space-y-2">
                  <div className="text-[10px] text-slate-400 flex items-center justify-between uppercase tracking-wider">
                    <span>Synchronous Register Bank</span>
                    <span className="text-silicon-400 font-bold">4-Bit Buffer</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {['data[3]', 'data[2]', 'data[1]', 'data[0]'].map((bitName, idx) => {
                      const bitVal = (clockCycle >> (3 - idx)) & 1;
                      return (
                        <div
                          key={bitName}
                          className="bg-slate-900/90 border border-slate-800 p-2 rounded text-center"
                        >
                          <div className="text-[10px] text-slate-500">{bitName}</div>
                          <div className={`text-base font-bold mt-0.5 ${bitVal ? 'text-silicon-400' : 'text-slate-600'}`}>
                            {bitVal}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* FSM State Indicator */}
                <div className="flex items-center justify-between text-[11px] p-2 rounded bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    <span>FSM State:</span>
                  </span>
                  <span className="font-mono text-purple-300 font-bold">
                    S{clockCycle % 5} [3'b{(clockCycle % 5).toString(2).padStart(3, '0')}]
                  </span>
                  <span className="text-[10px] text-slate-500">
                    {clockCycle % 5 === 4 ? 'EVALUATION CYCLE' : 'CAPTURING BIT'}
                  </span>
                </div>

              </div>

              {/* Hardware Pinout Footer */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>TARGET: ATmega328P / FPGA</span>
                <span>VOLTAGE: 5.0V / 3.3V DUAL RAIL</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
