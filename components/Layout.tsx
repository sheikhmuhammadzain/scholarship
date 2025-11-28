
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, CaretDown } from '@phosphor-icons/react';

interface NavbarProps {
    onNavigate: (route: 'home' | 'auth', params?: { mode: 'login' | 'signup' }) => void;
}

// --- Micro-Interaction Components ---

const ScrambleText = ({ text, className, onClick }: { text: string, className?: string, onClick?: () => void }) => {
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
        setDisplay(text); // Ensure it ends clean
      }
      
      iteration += 1 / 3;
    }, 30);
  };
  
  return (
    <span 
        onMouseEnter={handleEnter} 
        onClick={onClick}
        className={`cursor-pointer inline-block ${className}`}
    >
        {display}
    </span>
  );
};

const Magnetic = ({ children }: { children?: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const el = ref.current;
        if(!el) return;
        
        const mouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = el.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            
            window.gsap.to(el, {x: x * 0.3, y: y * 0.3, duration: 1, ease: "elastic.out(1, 0.3)"});
        }
        
        const mouseLeave = () => {
            window.gsap.to(el, {x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)"});
        }
        
        el.addEventListener("mousemove", mouseMove);
        el.addEventListener("mouseleave", mouseLeave);
        
        return () => {
            el.removeEventListener("mousemove", mouseMove);
            el.removeEventListener("mouseleave", mouseLeave);
        }
    }, []);
    
    return <div ref={ref} className="inline-block">{children}</div>
};

// --- Main Components ---

const studyMenu = {
  disciplines: [
    "Agriculture & Forestry",
    "Applied Sciences & Professions",
    "Arts, Design & Architecture",
    "Business & Management",
    "Computer Science & IT",
    "Education & Training",
    "Engineering & Technology",
    "Environmental Studies & Earth Sciences",
    "Hospitality, Leisure & Sports",
    "Humanities",
    "Journalism & Media",
    "Law",
    "Medicine & Health",
    "Natural Sciences & Mathematics",
    "Social Sciences"
  ],
  countries: [
    "Netherlands",
    "France",
    "Germany",
    "Norway",
    "United Kingdom",
    "Canada",
    "United States",
    "Australia"
  ]
};

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
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
    // Animation Logic
    if (window.gsap && navRef.current) {
        const ctx = window.gsap.context(() => {
            window.gsap.fromTo(navRef.current, 
                { yPercent: -100, autoAlpha: 0 },
                {
                    yPercent: 0,
                    autoAlpha: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    delay: 0.1, // Minimal delay just to ensure mount
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
        {/* Logo */}
        <div 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-2 cursor-pointer group z-50 cursor-hover"
        >
          <span className="text-xl font-bold tracking-tighter text-slate-900">
            GlobalStudyRoad<span className="text-slate-400 group-hover:text-blue-600 transition-colors">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          
          <button onClick={() => onNavigate('home')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group cursor-hover">
            <ScrambleText text="Smart Match" />
          </button>

          {/* Mega Menu Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors py-2 cursor-hover">
              <ScrambleText text="Study" />
              <CaretDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            
            {/* Dropdown Content */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 w-[800px]">
                <div className="bg-white border border-slate-200 shadow-xl p-8 grid grid-cols-12 gap-8 relative before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
                    
                    {/* Disciplines Column */}
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

                    {/* Countries Column */}
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

          <button onClick={() => onNavigate('home')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group cursor-hover">
            <ScrambleText text="Services" />
          </button>

        </div>

        {/* Buttons */}
        <div className="flex items-center gap-6 z-50">
          <Magnetic>
              <button 
                onClick={() => onNavigate('auth', { mode: 'login' })}
                className="hidden md:block text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors cursor-hover px-4 py-2"
              >
                Log In
              </button>
          </Magnetic>
          
          <Magnetic>
              <button 
                onClick={() => onNavigate('auth', { mode: 'signup' })}
                className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-6 py-3 transition-all cursor-hover rounded-sm"
              >
                Get Started
              </button>
          </Magnetic>
        </div>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12 z-10 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <span className="text-xl font-bold tracking-tighter text-slate-900 block mb-6">
              GlobalStudyRoad<span className="text-slate-400">.</span>
            </span>
            <p className="text-slate-500 text-base leading-relaxed max-w-sm mb-8">
              An intelligent infrastructure for global education. We leverage advanced data processing to connect talent with opportunity.
            </p>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white border border-slate-200 px-4 py-2 text-sm w-64 focus:outline-none focus:border-slate-900 transition-colors"
              />
              <button className="bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-blue-600 transition-colors cursor-hover">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {['Scholarship Match', 'Document AI', 'Visa Guidance', 'University API'].map(item => (
                <li key={item} className="hover:text-slate-900 cursor-pointer transition-colors cursor-hover">{item}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {['About', 'Careers', 'Press', 'Legal'].map(item => (
                <li key={item} className="hover:text-slate-900 cursor-pointer transition-colors cursor-hover">{item}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Connect</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {['Twitter', 'LinkedIn', 'Instagram', 'Contact'].map(item => (
                <li key={item} className="hover:text-slate-900 cursor-pointer transition-colors cursor-hover">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-slate-400 font-mono">
            © 2025 GSR INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
             <span className="text-xs text-slate-400 hover:text-slate-900 cursor-pointer cursor-hover">PRIVACY</span>
             <span className="text-xs text-slate-400 hover:text-slate-900 cursor-pointer cursor-hover">TERMS</span>
             <span className="text-xs text-slate-400 hover:text-slate-900 cursor-pointer cursor-hover">SITEMAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
