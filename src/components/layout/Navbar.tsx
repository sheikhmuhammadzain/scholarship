'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { CaretDown } from '@phosphor-icons/react';
import gsap from 'gsap';
import { Magnetic } from '@/components/ui/Magnetic';

// Scramble Text Component
const ScrambleText = ({ text, className }: { text: string, className?: string }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  
  const handleEnter = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(prev => 
        text.split("").map((letter, index) => {
          if(index < iteration) {
            return text[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      
      if(iteration >= text.length) {
        clearInterval(interval);
        setDisplay(text);
      }
      
      iteration += 1 / 3;
    }, 30);
  };
  
  return (
    <span 
        onMouseEnter={handleEnter} 
        className={`cursor-pointer inline-block ${className}`}
    >
        {display}
    </span>
  );
};

const studyMenu = {
  disciplines: [
    "Agriculture & Forestry", "Applied Sciences & Professions", "Arts, Design & Architecture",
    "Business & Management", "Computer Science & IT", "Education & Training",
    "Engineering & Technology", "Environmental Studies & Earth Sciences",
    "Hospitality, Leisure & Sports", "Humanities", "Journalism & Media", "Law",
    "Medicine & Health", "Natural Sciences & Mathematics", "Social Sciences"
  ],
  countries: [
    "Netherlands", "France", "Germany", "Norway", "United Kingdom", "Canada", "United States", "Australia"
  ]
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
        const ctx = gsap.context(() => {
            gsap.fromTo(navRef.current, 
                { yPercent: -100, autoAlpha: 0 },
                {
                    yPercent: 0,
                    autoAlpha: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    delay: 0.1,
                    clearProps: "transform"
                }
            );
        }, navRef);
        return () => ctx.revert();
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 border-b ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-slate-200 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer group z-50 cursor-hover">
          <span className="text-xl font-bold tracking-tighter text-slate-900">
            GlobalStudyRoad<span className="text-slate-400 group-hover:text-blue-600 transition-colors">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group cursor-hover">
            <ScrambleText text="Smart Match" />
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors py-2 cursor-hover">
              <ScrambleText text="Study" />
              <CaretDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 w-[800px]">
                <div className="bg-white border border-slate-200 shadow-xl p-8 grid grid-cols-12 gap-8 relative before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
                    <div className="col-span-8 border-r border-slate-100 pr-8">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">View Disciplines</h4>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                            {studyMenu.disciplines.map((item) => (
                                <a key={item} href="#" className="text-sm text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all block">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-4 pl-4">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">Most Popular Countries</h4>
                        <div className="space-y-3">
                            {studyMenu.countries.map((item) => (
                                <a key={item} href="#" className="text-sm text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all block">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group cursor-hover">
            <ScrambleText text="Services" />
          </Link>
        </div>

        <div className="flex items-center gap-6 z-50">
          <Magnetic>
              <Link href="/auth?mode=login" className="hidden md:block text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors cursor-hover px-4 py-2">
                Log In
              </Link>
          </Magnetic>
          <Magnetic>
              <Link href="/auth?mode=signup" className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-6 py-3 transition-all cursor-hover rounded-sm">
                Get Started
              </Link>
          </Magnetic>
        </div>
      </div>
    </nav>
  );
};