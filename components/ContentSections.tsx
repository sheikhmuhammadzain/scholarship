
import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

// Reusable hook for header reveals
const useSectionReveal = (ref: React.RefObject<HTMLElement>) => {
    useEffect(() => {
        if (!window.gsap || !ref.current) return;
        const ctx = window.gsap.context(() => {
            // Header Lines
            window.gsap.from(".reveal-text", {
                yPercent: 100,
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                }
            });
        }, ref);
        return () => ctx.revert();
    }, [ref]);
};

// --- Destinations ---
export const Destinations = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    useSectionReveal(sectionRef);

    useEffect(() => {
        if (!window.gsap || !sectionRef.current) return;
        
        const ctx = window.gsap.context(() => {
            // Staggered Cards Reveal
            window.gsap.from(".destination-card", {
                y: 100,
                opacity: 0,
                duration: 1.6,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".destination-grid",
                    start: "top 75%",
                }
            });

            // Parallax Image inside Card
            const cards = window.gsap.utils.toArray(".destination-card");
            cards.forEach((card: any) => {
                const img = card.querySelector("img");
                window.gsap.to(img, {
                    scale: 1.15,
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5
                    }
                });
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 bg-slate-50 border-t border-slate-200">
             <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="overflow-hidden">
                        <h2 className="reveal-text text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none">
                            GLOBAL <br/> CAMPUSES
                        </h2>
                    </div>
                    <div className="overflow-hidden">
                        <a href="#" className="reveal-text block text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 hover:pb-2 transition-all">
                            View All Locations
                        </a>
                    </div>
                </div>

                <div className="destination-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200 bg-white">
                    {[
                        { country: "United States", img: "https://images.unsplash.com/photo-1548625361-98770775a7c7?auto=format&fit=crop&w=800&q=80" },
                        { country: "United Kingdom", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80" },
                        { country: "Canada", img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80" },
                        { country: "Australia", img: "https://images.unsplash.com/photo-1523482580614-b7d8d40d425d?auto=format&fit=crop&w=800&q=80" },
                        { country: "Germany", img: "https://images.unsplash.com/photo-1467269204594-9661b133dd2e?auto=format&fit=crop&w=800&q=80" },
                        { country: "Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80" },
                    ].map((dest, i) => (
                        <div key={i} className="destination-card group relative h-[450px] border-r border-b border-slate-200 overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 overflow-hidden">
                                <img 
                                    src={dest.img} 
                                    alt={dest.country} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out will-change-transform"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            
                            <div className="absolute top-6 left-6 z-10 overflow-hidden">
                                <h3 className="text-2xl font-bold text-white mix-blend-difference transform group-hover:translate-x-2 transition-transform duration-500">{dest.country}</h3>
                            </div>
                            
                            <div className="absolute bottom-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                <div className="bg-white text-slate-900 p-4 rounded-full shadow-xl">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    );
};

// --- Expert Guidance ---
export const ExpertGuidance = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!window.gsap) return;
        const ctx = window.gsap.context(() => {
            window.gsap.from(".guidance-item", {
                x: -50,
                opacity: 0,
                duration: 1.5,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%"
                }
            });
            
            // Image reveal
            window.gsap.from(".guidance-image", {
                scale: 1.2,
                opacity: 0,
                duration: 2.0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%"
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 bg-slate-900 text-white">
             <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24">
                 <div>
                     <div className="w-12 h-1 bg-white mb-8"></div>
                     <div className="overflow-hidden mb-8">
                        <h2 className="guidance-item text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9]">
                            EXPERT <br/> CONSULTATION
                        </h2>
                     </div>
                     <p className="guidance-item text-slate-400 text-xl leading-relaxed mb-12 max-w-lg">
                        We don't just use algorithms. We employ industry leaders to validate every step of your journey.
                     </p>
                     
                     <div className="space-y-6">
                         {[
                             "Guaranteed Transparency",
                             "24hr Expert Response",
                             "Certified Documentation"
                         ].map((item, i) => (
                             <div key={i} className="guidance-item flex items-center gap-4 py-4 border-b border-slate-800 group hover:border-white transition-colors cursor-pointer">
                                 <span className="text-sm font-mono text-slate-500 group-hover:text-white">0{i+1}</span>
                                 <span className="text-lg font-medium group-hover:translate-x-2 transition-transform">{item}</span>
                             </div>
                         ))}
                     </div>

                     <div className="mt-12">
                         <button className="guidance-item bg-white text-slate-900 px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">
                             Schedule Consultation
                         </button>
                     </div>
                 </div>
                 
                 <div className="relative h-full min-h-[500px] overflow-hidden">
                     <div className="absolute inset-0 bg-slate-800 guidance-image">
                        <img 
                            src="https://images.unsplash.com/photo-1573166368361-3f52b6d96e90?auto=format&fit=crop&w=800&q=80" 
                            alt="Consultant" 
                            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                        />
                     </div>
                     <div className="absolute bottom-0 left-0 p-8 w-full border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
                         <div className="text-white font-bold text-lg">Dr. Sarah Mitchell</div>
                         <div className="text-slate-400 text-sm uppercase tracking-wider mt-1">Lead Strategist</div>
                     </div>
                 </div>
             </div>
        </section>
    )
}

// --- Testimonials ---
export const Testimonials = () => {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <h2 className="text-sm font-mono text-slate-500 mb-12 uppercase tracking-widest border-b border-slate-200 pb-4">
                    Student Outcomes
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            text: "The precision of the matching system is unparalleled. It found opportunities I didn't know existed.",
                            name: "Elena Rodriguez",
                            uni: "University of Toronto"
                        },
                        {
                            text: "Minimalist, efficient, and effective. The document AI saved me weeks of drafting time.",
                            name: "Michael Chen",
                            uni: "London Business School"
                        },
                        {
                            text: "A truly modern approach to education consulting. No fluff, just results.",
                            name: "Sarah Johnson",
                            uni: "Technical University Munich"
                        }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col justify-between h-full group cursor-default">
                            <p className="text-2xl text-slate-900 leading-tight font-medium mb-8 group-hover:text-blue-600 transition-colors duration-500">
                                "{item.text}"
                            </p>
                            <div>
                                <div className="font-bold text-slate-900 text-sm uppercase tracking-wider">{item.name}</div>
                                <div className="text-slate-500 text-xs mt-1">{item.uni}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// --- Trusted By ---
export const TrustedBy = () => {
    const row1 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!window.gsap) return;
        const ctx = window.gsap.context(() => {
            window.gsap.to(row1.current, {
                xPercent: -50,
                repeat: -1,
                duration: 60, // Much slower marquee
                ease: "linear",
            });
        });
        return () => ctx.revert();
    }, []);

    const universities = ["HARVARD", "MIT", "OXFORD", "CAMBRIDGE", "STANFORD", "YALE", "IMPERIAL", "ETH ZURICH"];

    return (
        <section className="py-24 bg-white border-y border-slate-200 overflow-hidden">
             <div className="relative w-full max-w-[100vw] overflow-hidden">
                 <div ref={row1} className="flex gap-24 w-max items-center whitespace-nowrap px-8">
                     {[...universities, ...universities, ...universities].map((uni, i) => (
                         <div key={i} className="text-5xl md:text-7xl font-bold text-slate-100 select-none hover:text-slate-900 transition-colors duration-500 cursor-default">
                             {uni}
                         </div>
                     ))}
                 </div>
             </div>
        </section>
    )
}

// --- Newsletter ---
export const Newsletter = () => {
    return (
        <section className="py-32 bg-slate-50">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Stay updated.</h2>
                <p className="text-slate-500 mb-10">
                    Receive the latest intelligence on global admissions directly.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 relative" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="email" 
                        placeholder="Email address" 
                        className="flex-1 px-6 py-4 bg-white border border-slate-200 focus:outline-none focus:border-slate-900 font-medium transition-colors"
                    />
                    <button className="bg-slate-900 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-slate-800 transition-all hover:scale-105 active:scale-95">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    )
}
