'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Check, DownloadSimple, TerminalWindow, Circuitry } from '@phosphor-icons/react';
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 60%", 
            onEnter: () => setIsActive(true),
            once: true 
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
      {/* ... Content identical to previous Workflow component ... */}
       <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
                 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none mb-6">
                    INTELLIGENT <br/> WORKFLOW
                 </h2>
            </div>
        </div>
        <div className="border border-slate-200 p-1">
            <div className="bg-slate-50 min-h-[600px] grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
                <div className="lg:col-span-5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col">
                    <div className="flex items-center gap-3 mb-8 text-slate-400">
                        <TerminalWindow size={20} />
                        <span className="font-mono text-xs uppercase">System Log</span>
                    </div>
                    <div className="font-mono text-xs space-y-4 flex-grow">
                         {/* ... Logs ... */}
                    </div>
                </div>
                 <div className="lg:col-span-7 bg-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                      {/* ... Visualization ... */}
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};