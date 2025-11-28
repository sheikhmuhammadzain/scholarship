
import React, { useRef, useEffect } from 'react';
import { 
  Target, 
  Robot, 
  Scan, 
  Sparkle, 
  Brain, 
  ChartBar, 
  Lightning, 
  FileText, 
  PenNib, 
  RocketLaunch,
  ArrowRight
} from '@phosphor-icons/react';

const aiFeatures = [
  { id: 1, title: "Smart Match System", desc: "Adaptive algorithm filtering scholarships by profile data.", icon: Target },
  { id: 2, title: "Qubit AI Chatbot", desc: "Natural language assistant for instant scholarship queries.", icon: Robot },
  { id: 3, title: "Resume Parsing", desc: "Extraction of candidate profiles from PDF/DOCX files.", icon: Scan },
  { id: 4, title: "Summary Generator", desc: "Context-aware professional summary generation.", icon: Sparkle },
  { id: 5, title: "Skill Suggestion", desc: "Intelligent skill gap analysis and recommendation.", icon: Brain },
  { id: 6, title: "Compatibility Report", desc: "Detailed scoring with gap analysis and priorities.", icon: ChartBar },
  { id: 7, title: "Smart Feeds", desc: "Personalized feeds prioritizing tuition waivers.", icon: Lightning },
  { id: 8, title: "Resume Builder", desc: "Professional templates with one-click AI customization.", icon: FileText },
  { id: 9, title: "Cover Letter AI", desc: "Drafts compelling letters using extracted profile data.", icon: PenNib },
  { id: 10, title: "Application Portal", desc: "Unified tracking system for all global applications.", icon: RocketLaunch }
];

export const AIFeatures: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;
    
    const ctx = window.gsap.context(() => {
      const track = trackRef.current;
      const container = containerRef.current;
      
      if (!track || !container) return;

      const totalWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const xTranslation = -(totalWidth - viewportWidth + 100);

      window.gsap.to(track, {
        x: xTranslation,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth}`, 
          scrub: 1.5, // Increased scrub for smoother/weightier feel
          pin: true,
          invalidateOnRefresh: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-slate-50 relative overflow-hidden h-screen flex flex-col justify-center border-y border-slate-200">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 w-full flex-shrink-0 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
                <h2 className="text-sm font-mono text-slate-500 mb-4 uppercase tracking-widest">
                    Qubit Dynamics Engine
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                    INTELLIGENCE <br/> MODULES
                </h3>
            </div>
            <div className="md:text-right pb-2">
                 <p className="text-slate-500 text-sm font-mono">
                    SCROLL TO EXPLORE THE ECOSYSTEM <span className="inline-block ml-2">→</span>
                 </p>
            </div>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div className="w-full pl-6 md:pl-[max(3rem,calc(50vw-42rem))] overflow-visible z-10">
        <div 
          ref={trackRef}
          className="flex gap-0 w-max border-l border-slate-200"
        >
          {aiFeatures.map((feature) => (
            <div 
              key={feature.id}
              className="group relative w-[300px] md:w-[400px] h-[400px] bg-white border-r border-y border-slate-200 p-8 flex flex-col justify-between hover:bg-slate-900 transition-colors duration-500"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-slate-50 border border-slate-100 group-hover:bg-slate-800 group-hover:border-slate-700 transition-colors">
                  <feature.icon className="text-slate-900 group-hover:text-white transition-colors" size={24} />
                </div>
                <span className="font-mono text-xs text-slate-300 group-hover:text-slate-600">
                    {feature.id.toString().padStart(2, '0')}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">
                    {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">
                    {feature.desc}
                </p>
              </div>

              <div className="flex items-center gap-2">
                 <span className="w-8 h-[1px] bg-slate-200 group-hover:bg-slate-600 transition-colors"></span>
                 <ArrowRight size={14} className="text-slate-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
