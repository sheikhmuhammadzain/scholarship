
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight } from '@phosphor-icons/react';

// Micro-interaction components defined in Hero scope or reused if moved to separate file
// For now, inline simple versions if needed or assume user wants to keep file clean.
// Actually, I'll inline a simple Magnetic wrapper here for the button specifically 
// to avoid circular dependency issues if I tried to import from Layout (bad practice).
// A better approach is usually a separate `components/ui` folder, but per instructions, I'm limited.
// I will just implement the GSAP logic directly in the component for the button.

const ScrambleBadge = ({ text }: { text: string }) => {
  const [display, setDisplay] = useState(text);
  const chars = "10101010"; // Binary theme for this one
  
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
    <span onMouseEnter={handleEnter} className="cursor-default">{display}</span>
  );
};

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const searchBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!window.gsap) return;
    
    const ctx = window.gsap.context(() => {
      const tl = window.gsap.timeline();

      // Text Reveal Stagger
      tl.from(".hero-line-inner", {
        yPercent: 100,
        duration: 1.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2 
      });

      // Image Reveal
      tl.from(imageContainerRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 2.2,
        ease: "power2.out"
      }, "-=1.5");

      // Parallax Effect on Scroll
      window.gsap.to(imageRef.current, {
        yPercent: 20, // Move image down slightly as we scroll down
        ease: "none",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
      });

      // Magnetic Search Button
      const btn = searchBtnRef.current;
      if(btn) {
          btn.addEventListener("mousemove", (e) => {
             const rect = btn.getBoundingClientRect();
             const x = e.clientX - rect.left - rect.width/2;
             const y = e.clientY - rect.top - rect.height/2;
             window.gsap.to(btn, { x: x*0.4, y: y*0.4, duration: 0.6, ease: "power2.out" });
          });
          btn.addEventListener("mouseleave", () => {
             window.gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
          });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 min-h-screen flex flex-col bg-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 h-full flex-grow pb-12 relative z-10">
        
        {/* Left: Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
            <div className="overflow-hidden mb-2">
                <div className="hero-line-inner flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-mono text-slate-500 uppercase tracking-widest">
                        <ScrambleBadge text="Admissions 2025 Open" />
                    </span>
                </div>
            </div>
            
            <div className="overflow-hidden">
                <h1 className="hero-line-inner text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.9] mb-4">
                    GATEWAY TO
                </h1>
            </div>
            <div className="overflow-hidden">
                <h1 className="hero-line-inner text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.9] mb-8">
                    GLOBAL SUCCESS<span className="text-blue-600">.</span>
                </h1>
            </div>
            
            <div className="overflow-hidden max-w-xl">
                <p className="hero-line-inner text-xl text-slate-500 leading-relaxed font-light mb-12">
                    An intelligent platform connecting ambitious students with world-class education. Powered by data, driven by your potential.
                </p>
            </div>

            <div className="overflow-hidden">
                <div className="hero-line-inner flex flex-wrap gap-4">
                    <div className="relative group">
                        <input 
                            type="text" 
                            placeholder="What do you want to study?" 
                            className="w-80 px-0 py-4 bg-transparent border-b border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-colors text-lg cursor-hover"
                        />
                        <button 
                            ref={searchBtnRef}
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-900 opacity-50 group-hover:opacity-100 transition-opacity transform duration-300 p-2 cursor-hover"
                        >
                            <ArrowDownRight size={24} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8 max-w-lg overflow-hidden">
                 <div className="hero-line-inner group cursor-hover">
                     <div className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">150+</div>
                     <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Countries</div>
                 </div>
                 <div className="hero-line-inner group cursor-hover">
                     <div className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">500+</div>
                     <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Universities</div>
                 </div>
                 <div className="hero-line-inner group cursor-hover">
                     <div className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">98%</div>
                     <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Success Rate</div>
                 </div>
            </div>
        </div>

        {/* Right: Image */}
        <div className="lg:col-span-5 relative h-[60vh] lg:h-auto lg:min-h-[800px] flex flex-col justify-end pb-12">
            <div ref={imageContainerRef} className="relative w-full h-full overflow-hidden bg-slate-100">
                <img 
                    ref={imageRef}
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=100" 
                    alt="University Architecture" 
                    className="absolute top-[-20%] left-0 w-full h-[140%] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                />
                
                {/* Minimal Overlay Badge */}
                <div className="absolute bottom-0 left-0 bg-white p-6 border-t border-r border-white z-10">
                    <p className="text-xs font-mono text-slate-900">
                        FEATURED INSTITUTION <br/>
                        <span className="font-bold text-base mt-1 block">CAMBRIDGE UNIVERSITY</span>
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
