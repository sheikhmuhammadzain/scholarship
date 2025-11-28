
import React, { useEffect, useRef, useState } from 'react';
import { 
  Check, 
  X, 
  Plus, 
  Minus, 
  Shield, 
  Lock, 
  Medal, 
  ArrowRight,
  FileText,
  PenNib,
  Layout,
  CaretDown,
  Cpu,
  Sparkle
} from '@phosphor-icons/react';

// --- Stats Dashboard ---
export const StatsDashboard = () => {
    const sectionRef = useRef(null);
    const [counts, setCounts] = useState({ scholarships: 0, funding: 0, students: 0, success: 0 });

    useEffect(() => {
        if (!window.gsap || !window.ScrollTrigger) return;
        
        const ctx = window.gsap.context(() => {
            window.ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 70%",
                onEnter: () => {
                    const targets = { scholarships: 0, funding: 0, students: 0, success: 0 };
                    window.gsap.to(targets, {
                        scholarships: 15000,
                        funding: 50,
                        students: 10000,
                        success: 98,
                        duration: 4.0,
                        ease: "power2.out",
                        onUpdate: () => {
                            setCounts({
                                scholarships: Math.floor(targets.scholarships),
                                funding: Math.floor(targets.funding),
                                students: Math.floor(targets.students),
                                success: Math.floor(targets.success)
                            });
                        }
                    });
                },
                once: true
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-slate-950 text-white border-y border-slate-800">
             <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 divide-y md:divide-y-0 lg:divide-x divide-slate-800">
                     {[
                         { label: "Scholarships Available", value: counts.scholarships.toLocaleString(), suffix: "+" },
                         { label: "Funding Unlocked", value: `$${counts.funding}`, suffix: "M+" },
                         { label: "Students Matched", value: counts.students.toLocaleString(), suffix: "+" },
                         { label: "Success Rate", value: counts.success, suffix: "%" }
                     ].map((stat, i) => (
                         <div key={i} className="px-6 lg:px-12 py-8 lg:py-0 text-center lg:text-left group cursor-hover transition-colors duration-500 hover:bg-slate-900/50">
                             <div className="text-4xl md:text-5xl font-bold font-mono mb-2 group-hover:text-blue-500 transition-colors duration-300">
                                 {stat.value}{stat.suffix}
                             </div>
                             <div className="text-sm text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">
                                 {stat.label}
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
        </section>
    );
};

// --- Spotlight Card Component ---
const SpotlightCard = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        divRef.current.style.setProperty("--mouse-x", `${x}px`);
        divRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={`relative group border border-slate-200 bg-white overflow-hidden ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.1), transparent 40%)`,
                }}
            />
             <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.4), transparent 40%)`,
                    maskImage: 'linear-gradient(black, black)',
                    WebkitMaskImage: 'linear-gradient(black, black)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'destination-out', // Keeps only the border visible
                    padding: '1px' 
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
};

// --- Feature Deep Dive ---
export const FeatureDeepDive = () => {
    const resumeRef = useRef(null);
    const writingRef = useRef(null);

    useEffect(() => {
        if (!window.gsap) return;
        
        // Resume Animation Context
        const resumeCtx = window.gsap.context(() => {
            const tl = window.gsap.timeline({ repeat: -1, repeatDelay: 2 });
            
            // Initial State
            tl.set(".scan-line", { top: "0%", opacity: 0 });
            tl.set(".doc-line", { backgroundColor: "#e2e8f0" }); // slate-200
            tl.set(".parsed-badge", { scale: 0, opacity: 0 });
            tl.set(".progress-bar-fill", { width: "0%" });

            // Start Scan
            tl.to(".scan-line", { opacity: 1, duration: 0.2 });
            
            // Scan moves down
            tl.to(".scan-line", { 
                top: "100%", 
                duration: 2.5, 
                ease: "power1.inOut" 
            }, "<");

            // Stagger lines turning parsed (blue)
            tl.to(".doc-line", {
                backgroundColor: "#cbd5e1", // slate-300 (simulating highlight)
                stagger: 0.15,
                duration: 0.3
            }, "<0.2");

            // Parsed Badge Pop
            tl.to(".parsed-badge", { 
                scale: 1, 
                opacity: 1, 
                duration: 0.4, 
                ease: "back.out(1.7)" 
            }, "-=0.5");
            
            // Progress Bar
            tl.to(".progress-bar-fill", {
                width: "98%",
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.2");

            // Fade out scanner
            tl.to(".scan-line", { opacity: 0, duration: 0.2 });

        }, resumeRef);

        // Writing Animation Context
        const writingCtx = window.gsap.context(() => {
             const tl = window.gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
             
             // Initial State
             tl.set(".prompt-text", { width: "0%" });
             tl.set(".generate-btn", { scale: 1 });
             tl.set(".type-line", { width: "0%", backgroundColor: "#e2e8f0" });
             tl.set(".optimization-badge", { scale: 0, opacity: 0 });
             
             // 1. Type Prompt
             tl.to(".prompt-text", { width: "70%", duration: 0.6, ease: "power2.out" });
             
             // 2. Click Generate
             tl.to(".generate-btn", { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
             
             // 3. Typing sequence
             const lines = window.gsap.utils.toArray(".type-line");
             lines.forEach((line: any) => {
                 tl.to(line, {
                     width: line.dataset.width,
                     duration: 0.2, // fast typing
                     ease: "none"
                 });
             });

             // 4. Optimization Highlight
             tl.to(".type-line", { 
                backgroundColor: "#dbeafe", // blue-100
                duration: 0.3,
                stagger: 0.05 
             });
             tl.to(".type-line", { 
                backgroundColor: "#e2e8f0", 
                duration: 0.5 
             }, "+=0.2");

             // 5. Badge Pop
             tl.to(".optimization-badge", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, "-=0.3");

             // Reset delay handled by repeatDelay

        }, writingRef);

        return () => {
            resumeCtx.revert();
            writingCtx.revert();
        };
    }, []);

    return (
        <section className="py-32 bg-white border-t border-slate-200">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="mb-24 max-w-2xl">
                    <span className="text-blue-600 font-mono text-xs uppercase tracking-widest mb-4 block">Core Capabilities</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                        INTELLIGENT <br/> TOOLKIT
                    </h2>
                </div>

                <div className="space-y-12">
                    {/* Feature 1: Resume Parser */}
                    <SpotlightCard className="feature-card rounded-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                            {/* Visual Side */}
                            <div ref={resumeRef} className="relative bg-slate-50 overflow-hidden flex items-center justify-center p-12 order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-slate-200">
                                {/* Grid Background */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
                                
                                <div className="relative w-full max-w-[340px] bg-white shadow-2xl shadow-slate-200/50 rounded-lg p-8 z-10">
                                    {/* Document Header */}
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="flex gap-4 w-full">
                                            <div className="w-12 h-12 bg-slate-100 rounded-full flex-shrink-0"></div>
                                            <div className="space-y-2 w-full pt-1">
                                                <div className="h-2 w-1/2 bg-slate-200 rounded-full doc-line"></div>
                                                <div className="h-2 w-1/3 bg-slate-100 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="parsed-badge bg-green-100 text-green-700 px-2 py-1 text-[10px] font-bold rounded-full flex items-center gap-1 uppercase tracking-wider">
                                            <Check weight="bold" /> Parsed
                                        </div>
                                    </div>

                                    {/* Document Body lines */}
                                    <div className="space-y-3 mb-8">
                                        {[...Array(6)].map((_, i) => (
                                            <div key={i} className="h-2 w-full bg-slate-100 rounded-full doc-line"></div>
                                        ))}
                                        <div className="h-2 w-2/3 bg-slate-100 rounded-full doc-line"></div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                         <div className="h-2 w-full bg-slate-100 rounded-full doc-line"></div>
                                         <div className="h-2 w-4/5 bg-slate-100 rounded-full doc-line"></div>
                                    </div>

                                    {/* Scanner Bar */}
                                    <div className="scan-line absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] z-20 pointer-events-none"></div>
                                </div>

                                {/* Floating Progress Bar */}
                                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[80%] bg-white rounded-lg shadow-xl p-4 border border-slate-100 z-20">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Analysis Complete</span>
                                        <span className="text-[10px] font-bold text-green-600">98% Match</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="progress-bar-fill h-full bg-green-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="feature-text-block p-12 lg:p-20 flex flex-col justify-center order-1 lg:order-2">
                                <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-lg mb-8 shadow-lg shadow-blue-600/20">
                                    <FileText size={24} weight="fill" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Resume Intelligence</h3>
                                <p className="text-lg text-slate-500 leading-relaxed mb-8">
                                    Upload your existing resume and let our engine extract key qualifications, identify gaps, and reformat it for global standards in seconds.
                                </p>
                                <ul className="space-y-4">
                                    {['ATS-Friendly Parsing', 'Skill Gap Analysis', 'Auto-Formatting'].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                                                <Check size={12} weight="bold" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Feature 2: Cover Letter */}
                    <SpotlightCard className="feature-card rounded-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                            {/* Content Side */}
                            <div className="feature-text-block p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
                                <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-lg mb-8">
                                    <PenNib size={24} weight="fill" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">AI-Assisted Writing</h3>
                                <p className="text-lg text-slate-500 leading-relaxed mb-8">
                                    Generate compelling, personalized cover letters tailored to specific universities and programs. Stop staring at a blank page.
                                </p>
                                <ul className="space-y-4">
                                    {['Tone Adjustment', 'University-Specific Context', 'Keyword Optimization'].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                                                <Check size={12} weight="bold" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visual Side */}
                            <div ref={writingRef} className="relative bg-slate-50 overflow-hidden flex items-center justify-center p-12">
                                {/* Dot Grid Bg */}
                                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

                                {/* Floating Paper */}
                                <div className="relative w-full max-w-[380px] bg-white shadow-xl border border-slate-100 p-8 rounded-xl transform hover:rotate-0 transition-transform duration-700 z-10">
                                    
                                    {/* Mock Input Header */}
                                    <div className="flex gap-2 mb-6 border-b border-slate-100 pb-6">
                                        <div className="flex-grow bg-slate-50 rounded-md h-10 p-2 flex items-center">
                                            <div className="h-1.5 bg-slate-400 rounded-full prompt-text"></div>
                                        </div>
                                        <div className="w-10 h-10 bg-purple-600 rounded-md flex items-center justify-center text-white generate-btn shadow-lg shadow-purple-200 cursor-pointer">
                                            <Sparkle weight="fill" />
                                        </div>
                                    </div>

                                    {/* Generated Content */}
                                    <div className="space-y-3 relative">
                                        <div className="h-2 bg-slate-200 rounded-full type-line" data-width="100%"></div>
                                        <div className="h-2 bg-slate-200 rounded-full type-line" data-width="95%"></div>
                                        <div className="h-2 bg-slate-200 rounded-full type-line" data-width="98%"></div>
                                        <div className="h-2 bg-slate-200 rounded-full type-line mb-4" data-width="60%"></div>
                                        
                                        <div className="h-2 bg-slate-200 rounded-full type-line" data-width="100%"></div>
                                        <div className="h-2 bg-slate-200 rounded-full type-line" data-width="85%"></div>
                                        <div className="h-2 bg-slate-200 rounded-full type-line" data-width="92%"></div>
                                        <div className="h-2 bg-slate-200 rounded-full type-line" data-width="40%"></div>
                                    
                                        {/* Badge Overlay */}
                                        <div className="optimization-badge absolute -right-4 top-10 bg-white border border-purple-100 shadow-xl px-3 py-2 rounded-lg flex items-center gap-2 z-20">
                                            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                                            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wide">Tone: Persuasive</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
};

// --- Comparison Table ---
export const ComparisonTable = () => {
    const tableRef = useRef(null);

    useEffect(() => {
        if (!window.gsap || !window.ScrollTrigger) return;
        
        const ctx = window.gsap.context(() => {
            // "Drawing" the lines
            window.gsap.from(".table-border", {
                scaleX: 0,
                duration: 1.5,
                stagger: 0.1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: tableRef.current,
                    start: "top 70%"
                }
            });

            // Fading in content
            window.gsap.from(".table-content", {
                y: 20,
                opacity: 0,
                duration: 1.0,
                stagger: 0.05,
                ease: "power2.out",
                delay: 0.5,
                scrollTrigger: {
                    trigger: tableRef.current,
                    start: "top 70%"
                }
            });
        }, tableRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={tableRef} className="py-32 bg-white">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Why choose intelligence?</h2>
                    <p className="text-slate-500 text-lg">
                        Traditional consultancy is manual, opaque, and expensive. We are automated, transparent, and precise.
                    </p>
                </div>

                <div className="relative">
                    {/* Header */}
                    <div className="grid grid-cols-12 pb-6 relative">
                         <div className="col-span-4 text-sm font-bold text-slate-400 uppercase tracking-widest table-content">Metric</div>
                         <div className="col-span-4 text-center text-xl font-bold text-slate-900 table-content flex items-center justify-center gap-2">
                             GlobalStudyRoad
                             <div className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] uppercase rounded-full tracking-wider">AI Powered</div>
                         </div>
                         <div className="col-span-4 text-center text-xl font-bold text-slate-400 table-content">Traditional Agents</div>
                         <div className="absolute bottom-0 left-0 w-full h-px bg-slate-200 origin-left table-border"></div>
                    </div>

                    {/* Rows */}
                    <div className="space-y-0">
                        {[
                            { feat: "Matching Accuracy", gsr: "98% Precision", trad: "~65% Intuition" },
                            { feat: "Processing Speed", gsr: "Milliseconds", trad: "3-5 Weeks" },
                            { feat: "Bias Factor", gsr: "Zero (Data-Driven)", trad: "High (Commission)" },
                            { feat: "24/7 Availability", gsr: "Full Access", trad: "Office Hours" },
                            { feat: "Cost Structure", gsr: "Freemium / Low Cost", trad: "High Retainer Fees" }
                        ].map((row, i) => (
                            <div key={i} className="grid grid-cols-12 py-6 relative group hover:bg-slate-50 transition-colors duration-300">
                                <div className="col-span-4 font-medium text-slate-700 group-hover:text-slate-900 transition-colors pl-4 table-content flex items-center">
                                    {row.feat}
                                </div>
                                <div className="col-span-4 text-center font-bold text-blue-600 bg-blue-50/0 group-hover:bg-blue-50/50 rounded-lg transition-colors py-2 table-content">
                                    {row.gsr}
                                </div>
                                <div className="col-span-4 text-center text-slate-400 group-hover:text-slate-500 transition-colors py-2 table-content">
                                    {row.trad}
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-px bg-slate-100 origin-left table-border group-hover:bg-slate-200 transition-colors"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Impact Metrics (Success Stories) ---
export const ImpactMetrics = () => {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                     <div>
                         <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none mb-12">
                             REAL LIVES <br/> TRANSFORMED
                         </h2>
                         
                         <div className="space-y-12">
                             {[
                                 { quote: "I saved $25,000 in tuition fees thanks to the Smart Match algorithm finding a waiver I missed.", author: "Ananya S.", metric: "$25k Saved" },
                                 { quote: "The resume parser pointed out gaps that would have caused a rejection. Now I'm at Imperial.", author: "David K.", metric: "Accepted" }
                             ].map((item, i) => (
                                 <div key={i} className="border-l-4 border-blue-600 pl-8 py-2 group cursor-hover hover:border-l-8 transition-all duration-300">
                                     <p className="text-xl text-slate-600 italic mb-6 group-hover:text-slate-900 transition-colors">"{item.quote}"</p>
                                     <div className="flex justify-between items-end">
                                         <div>
                                             <div className="font-bold text-slate-900">{item.author}</div>
                                             <div className="text-sm text-slate-500">Verified Student</div>
                                         </div>
                                         <div className="bg-slate-900 text-white px-4 py-1 text-sm font-bold group-hover:bg-blue-600 transition-colors">
                                             {item.metric}
                                         </div>
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </div>

                     <div className="relative cursor-hover group">
                         <div className="grid grid-cols-2 gap-4">
                             <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80" className="rounded-none w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" alt="Student" />
                             <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&q=80" className="rounded-none w-full h-64 object-cover mt-12 filter grayscale group-hover:grayscale-0 transition-all duration-700 delay-100" alt="Student" />
                         </div>
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 border border-slate-200 shadow-2xl text-center hover:scale-110 transition-transform duration-300">
                             <div className="text-5xl font-bold text-blue-600 mb-2">10k+</div>
                             <div className="text-sm font-mono uppercase tracking-widest text-slate-500">Lives Changed</div>
                         </div>
                     </div>
                 </div>
            </div>
        </section>
    );
};

// --- FAQ (Advanced GSAP) ---
export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

    const faqs = [
        { q: "How does Smart Match work?", a: "Our proprietary algorithm analyzes 50+ data points from your profile (grades, test scores, research interest) and cross-references them with our database of 15,000+ opportunities to find high-probability matches." },
        { q: "What data do you need?", a: "We start with basics (GPA, Target Country). For deep analysis, we process your resume/CV and academic transcripts securely." },
        { q: "Is the platform free?", a: "Yes, the basic Smart Match and Profile Analysis are completely free. We offer premium tiers for advanced AI editing tools and dedicated human consultation." },
        { q: "How accurate are the recommendations?", a: "Our AI maintains a 98% accuracy rate in eligibility matching, meaning you won't waste time applying to programs you don't qualify for." }
    ];

    // GSAP Animation for Open/Close
    useEffect(() => {
        if (!window.gsap) return;

        faqs.forEach((_, i) => {
            const el = answerRefs.current[i];
            if (!el) return;

            if (openIndex === i) {
                // Open Animation
                window.gsap.to(el, {
                    height: "auto",
                    duration: 0.6,
                    ease: "expo.out"
                });
                window.gsap.to(el.querySelector('.answer-inner'), {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: 0.1,
                    ease: "power2.out"
                });
            } else {
                // Close Animation
                window.gsap.to(el, {
                    height: 0,
                    duration: 0.5,
                    ease: "power3.inOut"
                });
                window.gsap.to(el.querySelector('.answer-inner'), {
                    y: -10,
                    opacity: 0,
                    duration: 0.3
                });
            }
        });
    }, [openIndex]);

    // Entrance Animation
    useEffect(() => {
        if (!window.gsap || !window.ScrollTrigger) return;
        
        const ctx = window.gsap.context(() => {
            window.gsap.from(".faq-item", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%"
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-slate-50 border-t border-slate-200">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    
                    {/* Sticky Header */}
                    <div className="lg:col-span-1">
                        <div className="lg:sticky lg:top-32">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none mb-6">
                                COMMON <br/> QUERIES
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                Everything you need to know about the platform, billing, and our technology.
                            </p>
                            <div className="mt-8">
                                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors cursor-hover">
                                    Visit Help Center <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* FAQ List */}
                    <div className="lg:col-span-2 space-y-0 border-t border-slate-200">
                        {faqs.map((item, i) => (
                            <div key={i} className="faq-item border-b border-slate-200 group">
                                <button 
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-start justify-between py-8 text-left focus:outline-none cursor-hover"
                                >
                                    <div className="flex gap-6">
                                        <span className="font-mono text-sm text-slate-300 pt-1">0{i+1}</span>
                                        <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${openIndex === i ? 'text-blue-600' : 'text-slate-900 group-hover:text-slate-600'}`}>
                                            {item.q}
                                        </span>
                                    </div>
                                    <div className={`mt-1 text-slate-400 transition-transform duration-500 ease-out ${openIndex === i ? 'rotate-45 text-blue-600' : 'group-hover:text-slate-900'}`}>
                                        <Plus size={24} weight="bold" />
                                    </div>
                                </button>
                                
                                <div 
                                    ref={el => { answerRefs.current[i] = el; }}
                                    className="h-0 overflow-hidden"
                                >
                                    <div className="answer-inner pl-12 pr-6 pb-8 opacity-0 translate-y-[-10px]">
                                        <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                                            {item.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

// --- Trust Section ---
export const TrustSection = () => {
    return (
        <section className="py-24 bg-white border-t border-slate-200">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
                <p className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-12">Trusted by Global Institutions & Secure by Design</p>
                
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale mb-16">
                    {/* Placeholder Logos */}
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-900 cursor-hover hover:scale-110 transition-transform"><Shield size={24}/> GDPR Compliant</div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-900 cursor-hover hover:scale-110 transition-transform"><Lock size={24}/> ISO 27001</div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-900 cursor-hover hover:scale-110 transition-transform"><Medal size={24}/> EdTech Excellence</div>
                </div>
            </div>
        </section>
    );
};

// --- CTASection ---
export const CTASection = ({ onNavigate }: { onNavigate: any }) => {
    return (
        <section 
            className="py-40 relative overflow-hidden bg-fixed bg-center bg-cover bg-slate-950"
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80')" 
            }}
        >
             {/* Heavy Overlay for contrast */}
             <div className="absolute inset-0 bg-slate-950/80 z-0"></div>
             
             <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
                 <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white drop-shadow-2xl">
                     READY TO <br/> LAUNCH?
                 </h2>
                 <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto drop-shadow-md">
                     Join the platform that is redefining global admissions. 
                     Start your free Smart Match assessment today.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                     <button 
                        onClick={() => onNavigate('auth', { mode: 'signup' })}
                        className="bg-white text-slate-900 px-10 py-5 font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors cursor-hover shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-300"
                    >
                         Start Smart Match Quiz
                     </button>
                     <button 
                        onClick={() => onNavigate('home')}
                        className="border border-white/30 text-white px-10 py-5 font-bold uppercase tracking-wider hover:bg-white/10 transition-colors cursor-hover hover:-translate-y-1 transform duration-300 backdrop-blur-sm"
                     >
                         Explore All Scholarships
                     </button>
                 </div>
             </div>
        </section>
    );
};
