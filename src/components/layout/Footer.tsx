'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Footer: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgText = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
        // 1. Parallax for the Giant Text
        gsap.fromTo(bgText.current, 
            { y: -100 },
            { 
                y: 0, 
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true
                }
            }
        );

        // 2. Content Stagger Entrance
        gsap.from(".footer-col", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 60%", 
                toggleActions: "play none none reverse"
            }
        });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div 
        ref={container}
        className="relative h-[800px]" 
        style={{ zIndex: 0 }}
    >
        <div 
            ref={contentRef}
            className="fixed bottom-0 left-0 w-full h-[800px] bg-slate-950 text-white flex flex-col justify-between px-6 md:px-12 py-24"
        >
            
            {/* Background Giant Text (Parallax) */}
            <div ref={bgText} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5 select-none overflow-hidden">
                <h1 className="text-[12vw] md:text-[14vw] font-black tracking-tighter leading-none text-white whitespace-nowrap">
                    GLOBAL STUDY ROAD
                </h1>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 pt-12">
                <div className="md:col-span-5 footer-col">
                    <span className="text-2xl font-bold tracking-tighter block mb-8">
                    GlobalStudyRoad<span className="text-blue-500">.</span>
                    </span>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-12">
                    An intelligent infrastructure for global education. We leverage advanced data processing to connect talent with opportunity.
                    </p>
                    <div className="flex gap-4">
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="bg-slate-900 border border-slate-800 px-6 py-4 text-sm w-full md:w-80 focus:outline-none focus:border-blue-600 transition-colors rounded-sm"
                        />
                        <button className="bg-blue-600 text-white px-6 py-4 hover:bg-blue-500 transition-colors">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="md:col-span-2 md:col-start-7 footer-col">
                    <h4 className="font-bold text-slate-200 mb-8 text-sm uppercase tracking-wider">Product</h4>
                    <ul className="space-y-4 text-slate-400">
                    {['Scholarship Match', 'Document AI', 'Visa Guidance', 'University API'].map(item => (
                        <li key={item} className="hover:text-white cursor-pointer transition-colors text-sm">{item}</li>
                    ))}
                    </ul>
                </div>

                <div className="md:col-span-2 footer-col">
                    <h4 className="font-bold text-slate-200 mb-8 text-sm uppercase tracking-wider">Company</h4>
                    <ul className="space-y-4 text-slate-400">
                    {['About', 'Careers', 'Press', 'Legal'].map(item => (
                        <li key={item} className="hover:text-white cursor-pointer transition-colors text-sm">{item}</li>
                    ))}
                    </ul>
                </div>

                <div className="md:col-span-2 footer-col">
                    <h4 className="font-bold text-slate-200 mb-8 text-sm uppercase tracking-wider">Connect</h4>
                    <ul className="space-y-4 text-slate-400">
                    {['Twitter', 'LinkedIn', 'Instagram', 'Contact'].map(item => (
                        <li key={item} className="hover:text-white cursor-pointer transition-colors text-sm">{item}</li>
                    ))}
                    </ul>
                </div>
            </div>

            <div className="relative z-10 border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 footer-col">
                <div className="text-xs text-slate-500 font-mono">
                    © 2025 GSR INC. ALL RIGHTS RESERVED.
                </div>
                <div className="flex gap-8 text-xs text-slate-500 font-mono uppercase">
                    <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
                    <a href="#" className="hover:text-white transition-colors">TERMS</a>
                    <a href="#" className="hover:text-white transition-colors">SITEMAP</a>
                </div>
            </div>
        </div>
    </div>
  );
};