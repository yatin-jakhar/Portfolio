import React, { useState } from 'react';
import type { ProjectData } from '../data/portfolioData';
import { 
  X, 
  Cpu, 
  Terminal, 
  CheckCircle, 
  Copy, 
  Check, 
  Activity, 
  GitBranch, 
  Zap, 
  Play, 
  RotateCcw
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'interactive' | 'code' | 'specs'>('architecture');
  const [copiedCode, setCopiedCode] = useState(false);

  // Palindrome Interactive Simulator state
  const [simBits, setSimBits] = useState<[number, number, number, number]>([0, 1, 1, 0]);
  const [simStep, setSimStep] = useState<number>(0); // 0=idle, 1=S0, 2=S1, 3=S2, 4=S3, 5=S4 (eval)

  // Robotic Arm Interactive Joint focus state
  const [selectedJointIndex, setSelectedJointIndex] = useState<number>(0);
  const [simGripperOpen, setSimGripperOpen] = useState<boolean>(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  // Helper for FSM Simulator
  const b3 = simBits[0];
  const b2 = simBits[1];
  const b1 = simBits[2];
  const b0 = simBits[3];
  const isSimPalindrome = b3 === b0 && b2 === b1;

  const runStepSimulation = () => {
    setSimStep((prev) => {
      if (prev >= 5) return 1; // loop back to S0
      return prev + 1;
    });
  };

  const resetSimulation = () => {
    setSimStep(0);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl bg-canvas-card border border-canvas-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-canvas-subtle">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-silicon-500/10 border border-silicon-500/30 text-silicon-400 font-bold">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              // {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.leadRole && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                {project.leadRole} (Team of {project.teamSize})
              </span>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800/80 bg-slate-950/40">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-sans">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-silicon-400 mt-0.5">
            {project.subtitle}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tools.map((tool) => (
              <span key={tool} className="text-[11px] font-mono px-2 py-0.5 rounded bg-canvas-subtle border border-slate-800 text-slate-300">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-800 px-6 bg-canvas-subtle text-xs font-mono overflow-x-auto">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-4 border-b-2 font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'architecture'
                ? 'border-silicon-400 text-silicon-400 bg-slate-900/50'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>Architecture &amp; Principles</span>
          </button>

          <button
            onClick={() => setActiveTab('interactive')}
            className={`py-3 px-4 border-b-2 font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'interactive'
                ? 'border-silicon-400 text-silicon-400 bg-slate-900/50'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>{project.id === 'robotic-arm-6dof' ? 'Schematic & Servo Map' : 'Live FSM Simulator'}</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`py-3 px-4 border-b-2 font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'code'
                ? 'border-silicon-400 text-silicon-400 bg-slate-900/50'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>Source Code ({project.codeSnippet?.language})</span>
          </button>

          <button
            onClick={() => setActiveTab('specs')}
            className={`py-3 px-4 border-b-2 font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'specs'
                ? 'border-silicon-400 text-silicon-400 bg-slate-900/50'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>Technical Specifications</span>
          </button>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm flex-1">
          
          {/* TAB 1: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              
              {/* Architecture Pipeline Visualizer */}
              <div className="p-4 rounded-xl bg-canvas-subtle border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
                  SYSTEM ARCHITECTURE DATA FLOW
                </span>
                
                {project.id === 'robotic-arm-6dof' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center font-mono text-xs">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-silicon-400 font-bold mb-1">DUAL JOYSTICKS</div>
                      <div className="text-[11px] text-slate-400">4x Analog Axes (0–1023) + 2 Pushbuttons</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold mb-1">ARDUINO UNO</div>
                      <div className="text-[11px] text-slate-400">ADC Sampling, Deadzone Filter &amp; Angle Mapping</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-amber-400 font-bold mb-1">PWM DISTRIBUTION</div>
                      <div className="text-[11px] text-slate-400">6 PWM Signals with Mixed Power Isolation</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-purple-400 font-bold mb-1">6 DOF ARM</div>
                      <div className="text-[11px] text-slate-400">3x High-Torque RC Servos + 3x SG90 Micro Servos</div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center font-mono text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-silicon-400 font-bold">1. INPUT BIT</div>
                      <div className="text-[10px] text-slate-400">data_in (1 bit/cycle)</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-purple-400 font-bold">2. FSM STATE</div>
                      <div className="text-[10px] text-slate-400">S0 → S1 → S2 → S3 → S4</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold">3. BIT STORAGE</div>
                      <div className="text-[10px] text-slate-400">data[3:0] Register</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-amber-400 font-bold">4. COMPARISON</div>
                      <div className="text-[10px] text-slate-400">B3==B0 &amp;&amp; B2==B1</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-sky-400 font-bold">5. PALINDROME</div>
                      <div className="text-[10px] text-slate-400">Output Flag (0 or 1)</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Working Principles */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-100 font-sans flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-silicon-400" />
                  <span>Documented Working Principles</span>
                </h3>
                <div className="space-y-2.5 text-slate-300">
                  {project.workingPrinciple.map((principle, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-canvas-subtle border border-slate-850 text-xs sm:text-sm">
                      <span className="font-mono text-silicon-400 font-bold shrink-0 mt-0.5">
                        0{idx + 1}.
                      </span>
                      <p className="leading-relaxed">{principle}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Servo Architecture Breakdown (Robotic Arm) */}
              {project.schematicDetails?.servoArchitecture && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-100 font-sans flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>Mixed-Power Actuator Allocation</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/20">
                      <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        <span>Major Load Joints (External DC Power)</span>
                      </div>
                      <p className="text-xs text-slate-400 mb-3">
                        Utilizes 35kg high-torque RC digital servos. Powered via external supply to insulate the microcontroller from high stall current spikes.
                      </p>
                      <ul className="space-y-1.5 text-xs font-mono text-slate-300">
                        <li className="flex justify-between border-b border-slate-800/60 pb-1">
                          <span>Base Swivel:</span>
                          <span className="text-amber-300 font-semibold">RC Digital 35kg (Pin D3)</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-800/60 pb-1">
                          <span>Shoulder Elevation:</span>
                          <span className="text-amber-300 font-semibold">RC Digital 35kg (Pin D5)</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Elbow Articulation:</span>
                          <span className="text-amber-300 font-semibold">RC Digital 35kg (Pin D6)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-silicon-500/20">
                      <div className="text-xs font-mono font-bold text-silicon-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-silicon-400"></span>
                        <span>Precision End-Effector (Arduino 5V Power)</span>
                      </div>
                      <p className="text-xs text-slate-400 mb-3">
                        Utilizes SG90 micro-servos for light, responsive positioning of the gripper claw assembly.
                      </p>
                      <ul className="space-y-1.5 text-xs font-mono text-slate-300">
                        <li className="flex justify-between border-b border-slate-800/60 pb-1">
                          <span>Wrist Pitch:</span>
                          <span className="text-silicon-300 font-semibold">SG90 Servo (Pin D9)</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-800/60 pb-1">
                          <span>Gripper Clamp:</span>
                          <span className="text-silicon-300 font-semibold">SG90 Servo (Pin D10)</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Gripper Rotation:</span>
                          <span className="text-silicon-300 font-semibold">SG90 Servo (Pin D11)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* FSM Condition (Palindrome Detector) */}
              {project.fsmDetails && (
                <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/20 space-y-3">
                  <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
                    MATHEMATICAL PALINDROME EQUATION &amp; CRITERIA
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center font-mono">
                    <span className="text-slate-400 text-xs block mb-1">EVALUATED AT STATE S4:</span>
                    <span className="text-base sm:text-lg text-emerald-400 font-bold">
                      palindrome = (B3 == B0) &amp;&amp; (B2 == B1)
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Four sequential serial bits are captured across clock cycles into a 4-bit register. On reaching state S4, an equality comparator evaluates whether the outer bits (B3 and B0) and the inner bits (B2 and B1) are identical. If true, the palindrome signal is asserted high; otherwise, it is pulled low, and the FSM synchronously returns to S0.
                  </p>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: INTERACTIVE SCHEMATIC / FSM SIMULATOR */}
          {activeTab === 'interactive' && (
            <div>
              {project.id === 'robotic-arm-6dof' ? (
                /* Robotic Arm Interactive Circuit & Joint Map */
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-canvas-subtle border border-slate-800">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-base font-bold text-white font-sans">
                          Interactive 6 DOF Joint &amp; Pinout Inspector
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Click any joint below to inspect its electrical pin assignment, power isolation domain, and motion limits.
                        </p>
                      </div>
                      <button
                        onClick={() => setSimGripperOpen(!simGripperOpen)}
                        className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-silicon-400 border border-slate-700 flex items-center gap-1.5"
                      >
                        <span>Toggle Claw:</span>
                        <span className="font-bold text-white">{simGripperOpen ? '120° (OPEN)' : '0° (CLOSED)'}</span>
                      </button>
                    </div>

                    {/* Joint Selector Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-5">
                      {project.schematicDetails?.servoArchitecture?.map((joint, idx) => (
                        <button
                          key={joint.name}
                          onClick={() => setSelectedJointIndex(idx)}
                          className={`p-2.5 rounded-lg border text-left font-mono transition-all ${
                            selectedJointIndex === idx
                              ? 'bg-silicon-500/20 border-silicon-400 text-white shadow-[0_0_10px_rgba(56,189,248,0.2)]'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <div className="text-[10px] text-slate-500">AXIS {idx + 1}</div>
                          <div className="text-xs font-bold truncate mt-0.5">{joint.name}</div>
                          <div className="text-[10px] text-silicon-400 mt-1">{joint.pin}</div>
                        </button>
                      ))}
                    </div>

                    {/* Selected Joint Deep Dive Card */}
                    {project.schematicDetails?.servoArchitecture && (
                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
                        {(() => {
                          const joint = project.schematicDetails.servoArchitecture[selectedJointIndex];
                          return (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="p-3 rounded bg-slate-900 border border-slate-850">
                                <span className="text-slate-500 text-[10px] block">ACTUATOR MODEL</span>
                                <span className="text-slate-100 font-bold text-sm mt-0.5 block">{joint.type}</span>
                              </div>
                              <div className="p-3 rounded bg-slate-900 border border-slate-850">
                                <span className="text-slate-500 text-[10px] block">PWM CONTROL PIN</span>
                                <span className="text-silicon-400 font-bold text-sm mt-0.5 block">Arduino {joint.pin}</span>
                              </div>
                              <div className="p-3 rounded bg-slate-900 border border-slate-850">
                                <span className="text-slate-500 text-[10px] block">POWER DOMAIN</span>
                                <span className={`font-bold text-sm mt-0.5 block ${
                                  joint.powerSource.includes('External') ? 'text-amber-400' : 'text-emerald-400'
                                }`}>
                                  {joint.powerSource}
                                </span>
                              </div>
                              <div className="p-3 rounded bg-slate-900 border border-slate-855">
                                <span className="text-slate-500 text-[10px] block">RANGE OF MOTION</span>
                                <span className="text-purple-400 font-bold text-sm mt-0.5 block">{joint.motion}</span>
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    )}
                  </div>

                  {/* Complete Circuit Connections Table */}
                  <div className="p-4 rounded-xl bg-canvas-subtle border border-slate-800">
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Complete Circuit Interconnect Matrix
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left font-mono text-xs">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-500 text-[11px]">
                            <th className="pb-2">ARDUINO PIN</th>
                            <th className="pb-2">CONNECTED COMPONENT</th>
                            <th className="pb-2">OPERATIONAL NOTE</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                          {project.schematicDetails?.connections.map((c, i) => (
                            <tr key={i} className="hover:bg-slate-900/40">
                              <td className="py-2 text-silicon-400 font-semibold">{c.pin}</td>
                              <td className="py-2 text-slate-200">{c.target}</td>
                              <td className="py-2 text-slate-400 text-[11px]">{c.note}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ) : (
                /* Palindrome Live FSM Simulator */
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-canvas-subtle border border-slate-800 space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                      <div>
                        <h4 className="text-base font-bold text-white font-sans flex items-center gap-2">
                          <Activity className="w-4 h-4 text-emerald-400" />
                          <span>Interactive 4-Bit FSM Logic Simulator</span>
                        </h4>
                        <p className="text-xs text-slate-400">
                          Test custom binary sequences through the 5-state Verilog FSM logic.
                        </p>
                      </div>

                      {/* Quick Test Preset Buttons */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-mono text-slate-500 mr-1">PRESETS:</span>
                        {[
                          { val: [0, 1, 1, 0], label: '0110 (PAL)' },
                          { val: [1, 0, 0, 1], label: '1001 (PAL)' },
                          { val: [1, 1, 1, 1], label: '1111 (PAL)' },
                          { val: [0, 1, 0, 1], label: '0101 (NON)' },
                          { val: [0, 0, 1, 1], label: '0011 (NON)' }
                        ].map((preset, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              setSimBits(preset.val as [number, number, number, number]);
                              setSimStep(0);
                            }}
                            className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-800"
                          >
                            {preset.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 4 Bits Bit Toggle Controls */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono text-slate-400 uppercase">
                        CONFIGURE 4 SERIAL INPUT BITS (Click bit to toggle 0 / 1):
                      </span>
                      <div className="grid grid-cols-4 gap-3 font-mono">
                        {simBits.map((bit, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              const newBits = [...simBits] as [number, number, number, number];
                              newBits[idx] = newBits[idx] === 1 ? 0 : 1;
                              setSimBits(newBits);
                              setSimStep(0);
                            }}
                            className={`p-4 rounded-xl border text-center transition-all ${
                              bit === 1
                                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                                : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700'
                            }`}
                          >
                            <span className="text-[10px] text-slate-500 block mb-1">
                              BIT B{3 - idx} (Clock Cycle {idx + 1})
                            </span>
                            <span className="text-2xl font-bold">{bit}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step-by-Step Clock Execution */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={runStepSimulation}
                        className="px-4 py-2 rounded-md bg-silicon-400 hover:bg-silicon-100 text-slate-950 font-bold font-mono text-xs flex items-center gap-2"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Step Clock Edge (Cycle {simStep + 1})</span>
                      </button>

                      <button
                        onClick={resetSimulation}
                        className="px-3 py-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs flex items-center gap-1.5"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reset FSM (rst=1)</span>
                      </button>

                      <span className="text-xs font-mono text-slate-400 ml-auto">
                        CURRENT CYCLE: <strong className="text-white">#{simStep}</strong> / 5
                      </span>
                    </div>

                    {/* FSM State Pipeline Display */}
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 font-mono text-xs pt-3">
                      {project.fsmDetails?.states.map((st, i) => {
                        const isCurrent = simStep === i + 1;
                        const isPast = simStep > i + 1;
                        return (
                          <div
                            key={st.state}
                            className={`p-3 rounded-lg border transition-all ${
                              isCurrent
                                ? 'bg-purple-500/20 border-purple-400 text-white shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                                : isPast
                                ? 'bg-slate-900/90 border-slate-750 text-slate-300'
                                : 'bg-slate-950/60 border-slate-850 text-slate-600'
                            }`}
                          >
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-bold text-purple-300">{st.state}</span>
                              <span className="text-[10px] text-slate-500">{st.binary}</span>
                            </div>
                            <div className="text-[10px] truncate text-slate-400">{st.action}</div>
                            <div className="text-[9px] text-silicon-400 mt-1 truncate">{st.storedBit}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Output Evaluation Panel */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="space-y-1 text-center sm:text-left">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                          EVALUATION CRITERIA: (B3==B0) &amp;&amp; (B2==B1)
                        </span>
                        <div className="text-xs text-slate-300">
                          Outer bits: <span className={b3 === b0 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>{b3} == {b0} ({b3 === b0 ? 'MATCH' : 'MISMATCH'})</span> | 
                          Inner bits: <span className={b2 === b1 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>{b2} == {b1} ({b2 === b1 ? 'MATCH' : 'MISMATCH'})</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <span className="text-[10px] text-slate-500 uppercase block">PALINDROME FLAG</span>
                          <span className={`text-base font-bold ${
                            simStep < 5
                              ? 'text-slate-500'
                              : isSimPalindrome
                              ? 'text-emerald-400'
                              : 'text-rose-400'
                          }`}>
                            {simStep < 5 ? 'AWAITING S4' : isSimPalindrome ? '1 (TRUE)' : '0 (FALSE)'}
                          </span>
                        </div>
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold text-sm ${
                          simStep < 5
                            ? 'border-slate-700 bg-slate-900 text-slate-600'
                            : isSimPalindrome
                            ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                            : 'border-rose-500 bg-rose-500/20 text-rose-400'
                        }`}>
                          {simStep < 5 ? '?' : isSimPalindrome ? '1' : '0'}
                        </div>
                      </div>
                    </div>

                    {/* Documented Test Cases Table */}
                    <div className="pt-2">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                        Documented Project Report Test Cases
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 font-mono text-xs">
                        {project.fsmDetails?.testCases.map((tc, idx) => (
                          <div
                            key={idx}
                            className={`p-2.5 rounded-lg border text-center ${
                              tc.isPalindrome
                                ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
                                : 'bg-slate-900/50 border-slate-800 text-slate-400'
                            }`}
                          >
                            <div className="font-bold text-white text-sm">{tc.input}</div>
                            <div className="text-[10px] mt-0.5">{tc.output}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: SOURCE CODE */}
          {activeTab === 'code' && project.codeSnippet && (
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span className="text-slate-200 font-semibold">{project.codeSnippet.filename}</span>
                  <span className="text-slate-500">[{project.codeSnippet.language.toUpperCase()}]</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>

              <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs overflow-x-auto leading-relaxed text-slate-200 shadow-inner max-h-[480px]">
                <pre>{project.codeSnippet.code}</pre>
              </div>
            </div>
          )}

          {/* TAB 4: SPECIFICATIONS */}
          {activeTab === 'specs' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-100 font-sans">
                Technical Specification Parameters
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                {project.technicalSpecs.map((spec, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-canvas-subtle border border-slate-800 flex flex-col justify-between">
                    <span className="text-slate-500 uppercase text-[10px] tracking-wider mb-1">
                      {spec.label}
                    </span>
                    <span className="text-slate-200 font-semibold text-sm">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-canvas-subtle flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>DATA SOURCE: VERIFIED FROM PROJECT REPORT</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
