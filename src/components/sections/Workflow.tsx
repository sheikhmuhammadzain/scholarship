'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Check,
  DownloadSimple,
  TerminalWindow,
  Circuitry
} from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Workflow: React.FC = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const workflowSteps = [
    { id: 1, label: "PROFILE QUIZ", desc: "Gathering academic & preference data.", duration: 3000 },
    { id: 2, label: "AI ANALYSIS", desc: "Cross-referencing 15,000+ databases.", duration: 2500 },
    { id: 3, label: "SMART MATCHING", desc: "Identifying high-probability opportunities.", duration: 3000 },
    { id: 4, label: "DOC PREPARATION", desc: "Generating optimized resumes & essays.", duration: 3500 },
    { id: 5, label: "APPLICATION", desc: "Direct submission & tracking.", duration: 2000 },
    { id: 6, label: "ADMISSION", desc: "Offer received & verified.", duration: 1500 }
  ];

  // Initialize ScrollTrigger to start animation when in view
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 60%", // Start when top of section hits 60% of viewport
            onEnter: () => setIsActive(true),
            once: true // Only trigger start once
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Timer Logic
  useEffect(() => {
    if (!isActive) return;

    if (currentStep < workflowSteps.length) {
      const stepTimer = setTimeout(() => {
        setCompletedSteps(prev => [...prev, workflowSteps[currentStep].id]);
        setCurrentStep(prev => prev + 1);
      }, workflowSteps[currentStep].duration);
      return () => clearTimeout(stepTimer);
    } else {
      const loopTimer = setTimeout(() => {
        setCompletedSteps([]);
        setCurrentStep(0);
      }, 5000);
      return () => clearTimeout(loopTimer);
    }
  }, [currentStep, isActive]);

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
                 <div className="flex items-center gap-3 mb-4">
                     <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                         <Circuitry size={24} />
                     </div>
                     <span className="text-sm font-mono text-blue-600 uppercase tracking-widest">How It Works</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none mb-6">
                    INTELLIGENT <br/> WORKFLOW
                 </h2>
                 <p className="text-slate-500 max-w-md leading-relaxed">
                    From your first quiz to your final acceptance letter, our neural engine optimizes every step of the journey.
                 </p>
            </div>
            <div className="flex flex-col justify-end items-start lg:items-end">
                <div className={`flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full transition-colors duration-500 ${isActive ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`}></span>
                    <span className="text-xs font-mono text-slate-600 uppercase">
                        {isActive ? 'Pipeline Active' : 'System Idle'}
                    </span>
                </div>
            </div>
        </div>

        <div className="border border-slate-200 p-1">
            <div className="bg-slate-50 min-h-[600px] grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
                
                {/* Left: Terminal/Log */}
                <div className="lg:col-span-5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col">
                    <div className="flex items-center gap-3 mb-8 text-slate-400">
                        <TerminalWindow size={20} />
                        <span className="font-mono text-xs uppercase">System Log</span>
                    </div>

                    <div className="font-mono text-xs space-y-4 flex-grow">
                        <div className="text-slate-400 pb-4 border-b border-slate-200">
                            &gt; INITIALIZING SESSION... <br/>
                            &gt; CONNECTING TO GLOBAL DB... <br/>
                            {isActive && <span className="text-green-600">&gt; PIPELINE STARTED</span>}
                        </div>
                        
                        {workflowSteps.map((step, idx) => (
                            <div key={step.id} className={`transition-opacity duration-300 ${isActive && idx > currentStep ? 'opacity-0' : isActive ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="flex gap-4">
                                    <span className="text-slate-300">0{step.id}</span>
                                    <div>
                                        <span className={idx === currentStep && isActive ? 'text-blue-600' : 'text-slate-700'}>
                                            &gt; {step.label}
                                        </span>
                                        {idx === currentStep && isActive && (
                                            <div className="mt-1 text-slate-400 animate-pulse">
                                                [ {step.desc} ]
                                            </div>
                                        )}
                                        {idx < currentStep && (
                                            <div className="mt-1 text-green-600">
                                                [ COMPLETED ]
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Visualizer */}
                <div className="lg:col-span-7 bg-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                    <div className="relative z-10 space-y-8 min-h-[300px] flex flex-col justify-center">
                        {!isActive && (
                            <div className="text-center text-slate-400 font-mono text-sm uppercase tracking-widest animate-pulse">
                                Scroll to activate...
                            </div>
                        )}

                        {isActive && workflowSteps.map((step, index) => {
                            const isCurrent = currentStep === index;
                            
                            if (!isCurrent) return null;

                            return (
                                <div key={step.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="w-16 h-16 border border-slate-200 bg-white flex items-center justify-center mb-6 shadow-sm">
                                        <span className="font-mono text-2xl font-bold text-slate-900">0{step.id}</span>
                                    </div>
                                    <h3 className="text-4xl font-bold text-slate-900 mb-2">{step.label}</h3>
                                    <p className="text-slate-500 text-lg">{step.desc}</p>
                                    
                                    <div className="mt-8 h-1 w-full bg-slate-100">
                                        <div 
                                            className="h-full bg-slate-900"
                                            style={{
                                                animation: `progressFill ${step.duration}ms linear forwards`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                        
                        {isActive && currentStep >= workflowSteps.length && (
                            <div className="text-center py-12 animate-in zoom-in duration-500">
                                <div className="w-20 h-20 mx-auto bg-slate-900 text-white flex items-center justify-center rounded-full mb-6">
                                    <Check size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Process Complete</h3>
                                <button className="border border-slate-200 hover:bg-slate-50 text-slate-900 px-8 py-4 text-sm font-bold uppercase tracking-wider flex items-center gap-2 mx-auto transition-colors">
                                    <DownloadSimple size={16} />
                                    Download Roadmap
                                </button>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>

        <style>{`
          @keyframes progressFill {
            from { width: 0%; }
            to { width: 100%; }
          }
          @keyframes scan {
            0%, 100% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}</style>
      </div>
    </section>
  );
};