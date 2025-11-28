'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, Star } from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// --- Components ---

const ScrambleBadge = ({ text }: { text: string }) => {
  const [display, setDisplay] = useState(text);
  const chars = "AX01!@#";
  
  const handleEnter = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(prev => 
        text.split("").map((letter, index) => {
          if(index < iteration) return text[index];
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
    <span onMouseEnter={handleEnter} className="cursor-default inline-block">{display}</span>
  );
};

const RotatingBadge = () => (
  <div className="absolute -top-12 -right-12 w-32 h-32 z-20 hidden md:flex items-center justify-center pointer-events-none mix-blend-difference">
    <div className="relative w-full h-full animate-[spin_10s_linear_infinite]">
       <svg viewBox="0 0 100 100" width="100%" height="100%">
        <defs>
          <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text fontSize="11" fontWeight="bold" fill="white">
          <textPath xlinkHref="#circle" className="uppercase tracking-[0.2em]">
            • Est 2025 • World Class Education
          </textPath>
        </text>
      </svg>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
        <ArrowDownRight size={24} className="text-white transform -rotate-45" />
    </div>
  </div>
);

// --- Main Hero ---

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const searchBtnRef = useRef<HTMLButtonElement>(null);
  const floatingCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Text Animations
      tl.from(".hero-line-inner", {
        yPercent: 100,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2 
      });

      // Advanced Image Reveal (Clip Path)
      tl.fromTo(imageWrapperRef.current, 
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", scale: 1.1 },
        { 
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", 
          scale: 1,
          duration: 1.8,
          ease: "expo.inOut" 
        }, 
        "-=1.0"
      );

      // Reveal Floating Card
      tl.from(floatingCardRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8");

      // Scroll Parallax for Image
      gsap.to(imageRef.current, {
        yPercent: 15,
        scale: 1.1, // Slight zoom on scroll
        ease: "none",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
      });

      // Button Magnetic Effect
      const btn = searchBtnRef.current;
      if(btn) {
          btn.addEventListener("mousemove", (e) => {
             const rect = btn.getBoundingClientRect();
             const x = e.clientX - rect.left - rect.width/2;
             const y = e.clientY - rect.top - rect.height/2;
             gsap.to(btn, { x: x*0.4, y: y*0.4, duration: 0.6, ease: "power2.out" });
          });
          btn.addEventListener("mouseleave", () => {
             gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
          });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mouse Move Parallax Logic
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageWrapperRef.current || !floatingCardRef.current) return;
    
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5);
    const yPos = (clientY / window.innerHeight - 0.5);

    // Move Image Wrapper (Base)
    gsap.to(imageWrapperRef.current, {
        x: xPos * 20,
        y: yPos * 20,
        rotationY: xPos * 5,
        rotationX: -yPos * 5,
        duration: 1,
        ease: "power2.out"
    });

    // Move Floating Card (Opposite/Deeper for 3D effect)
    gsap.to(floatingCardRef.current, {
        x: xPos * -40,
        y: yPos * -40,
        duration: 1.2,
        ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to([imageWrapperRef.current, floatingCardRef.current], {
        x: 0,
        y: 0,
        rotationY: 0,
        rotationX: 0,
        duration: 1,
        ease: "power2.out"
    });
  };

  return (
    <section ref={containerRef} className="relative pt-32 min-h-screen flex flex-col bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 h-full flex-grow pb-12 relative z-10">
        
        {/* Left Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
            <div className="overflow-hidden mb-4">
                <div className="hero-line-inner flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-mono text-slate-500 uppercase tracking-widest border border-slate-200 px-3 py-1 rounded-full">
                        <ScrambleBadge text="Admissions 2025 Open" />
                    </span>
                </div>
            </div>
            <div className="overflow-hidden"><h1 className="hero-line-inner text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.9] mb-4">GATEWAY TO</h1></div>
            <div className="overflow-hidden"><h1 className="hero-line-inner text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.9] mb-8">GLOBAL SUCCESS<span className="text-blue-600">.</span></h1></div>
            <div className="overflow-hidden max-w-xl"><p className="hero-line-inner text-xl text-slate-500 leading-relaxed font-light mb-12">An intelligent platform connecting ambitious students with world-class education.</p></div>
             <div className="overflow-hidden">
                <div className="hero-line-inner flex flex-wrap gap-4">
                    <div className="relative group">
                        <input type="text" placeholder="What do you want to study?" className="w-80 px-0 py-4 bg-transparent border-b border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-colors text-lg cursor-hover" />
                        <button ref={searchBtnRef} className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-900 opacity-50 group-hover:opacity-100 transition-opacity transform duration-300 p-2 cursor-hover"><ArrowDownRight size={24} /></button>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Image Content - The Awwwards Part */}
        <div 
            className="lg:col-span-5 relative min-h-[500px] lg:h-auto flex flex-col justify-center items-center lg:items-end perspective-[1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* The Main Visual Wrapper */}
            <div 
                ref={imageWrapperRef} 
                className="relative w-[90%] md:w-full h-[60vh] lg:h-[75vh] overflow-hidden rounded-[2rem] will-change-transform"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Rotating SVG Badge */}
                <RotatingBadge />

                {/* Main Image */}
                <div className="absolute inset-0 bg-slate-900">
                    <img 
                        ref={imageRef} 
                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=100" 
                        alt="University Architecture" 
                        className="w-full h-[120%] object-cover opacity-90 transition-all duration-700 ease-out hover:scale-105" 
                    />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Floating Glass Card (Depth Layer) */}
            <div 
                ref={floatingCardRef}
                className="absolute bottom-[10%] -left-[5%] md:-left-[10%] bg-black/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl  z-30 max-w-[240px]"
            >
                <div className="flex items-center gap-2 mb-2 text-yellow-400">
                    <Star weight="fill" />
                    <Star weight="fill" />
                    <Star weight="fill" />
                    <Star weight="fill" />
                    <Star weight="fill" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-1">98%</h3>
                <p className="text-white/80 text-sm leading-tight">Graduates employed within 6 months of completion.</p>
            </div>

        </div>
      </div>
    </section>
  );
};