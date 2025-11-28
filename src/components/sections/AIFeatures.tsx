'use client';

import React, { useRef, useEffect } from 'react';
import { Target, Robot, Scan, Sparkle, Brain, ChartBar, Lightning, FileText, PenNib, RocketLaunch, ArrowRight } from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const aiFeatures = [
  { id: 1, title: "Smart Match System", desc: "Adaptive algorithm filtering scholarships by profile data.", icon: Target },
  { id: 2, title: "Qubit AI Chatbot", desc: "Natural language assistant for instant scholarship queries.", icon: Robot },
  // ... rest of items
];

export const AIFeatures: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const container = containerRef.current;
      
      if (!track || !container) return;

      const totalWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const xTranslation = -(totalWidth - viewportWidth + 100);

      gsap.to(track, {
        x: xTranslation,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth}`, 
          scrub: 1.5,
          pin: true,
          invalidateOnRefresh: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-slate-50 relative overflow-hidden h-screen flex flex-col justify-center border-y border-slate-200">
      {/* ... Content ... */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 w-full flex-shrink-0 z-10">
         <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">INTELLIGENCE <br/> MODULES</h3>
      </div>
      <div className="w-full pl-6 md:pl-[max(3rem,calc(50vw-42rem))] overflow-visible z-10">
        <div ref={trackRef} className="flex gap-0 w-max border-l border-slate-200">
          {aiFeatures.map((feature) => (
            <div key={feature.id} className="group relative w-[300px] md:w-[400px] h-[400px] bg-white border-r border-y border-slate-200 p-8 flex flex-col justify-between hover:bg-slate-900 transition-colors duration-500">
               {/* ... Card Content ... */}
               <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};