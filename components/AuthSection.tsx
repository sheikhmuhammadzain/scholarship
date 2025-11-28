
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, ArrowLeft } from '@phosphor-icons/react';

interface AuthPageProps {
    initialMode: 'login' | 'signup';
    onNavigate: (route: 'home' | 'auth', params?: { mode: 'login' | 'signup' }) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ initialMode, onNavigate }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [isLogin, setIsLogin] = useState(initialMode === 'login');

  useEffect(() => {
    setIsLogin(initialMode === 'login');
  }, [initialMode]);

  useEffect(() => {
    if (!window.gsap) return;
    
    const ctx = window.gsap.context(() => {
      // Title Animation
      window.gsap.from(".auth-title-line", {
        yPercent: 100,
        opacity: 0,
        duration: 1.6,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });

      // Form Fade In
      window.gsap.fromTo(formRef.current, 
        { x: 50, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 1.8,
            ease: "power3.out",
            delay: 0.5
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isLogin]); // Re-animate on toggle? Optional, maybe just on mount.

  return (
    <section ref={sectionRef} className="min-h-screen pt-32 pb-20 bg-white relative overflow-hidden flex flex-col">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 flex-grow">
        
        {/* Left: Content */}
        <div className="flex flex-col justify-center">
            <button 
                onClick={() => onNavigate('home')}
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors mb-12 group w-max"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
            </button>

            <div className="mb-12">
                <div className="overflow-hidden">
                    <h2 className="auth-title-line text-sm font-mono text-slate-500 uppercase tracking-widest mb-6">
                        Membership Access
                    </h2>
                </div>
                <div className="overflow-hidden">
                    <h1 className="auth-title-line text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-[0.9] mb-4">
                        YOUR GATEWAY
                    </h1>
                </div>
                <div className="overflow-hidden">
                    <h1 className="auth-title-line text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-[0.9] mb-8">
                        TO GLOBAL EDUCATION<span className="text-blue-600">.</span>
                    </h1>
                </div>
                <div className="overflow-hidden">
                     <p className="auth-title-line text-lg text-slate-500 max-w-md">
                        Join 10,000+ students leveraging AI for their academic success. Secure, fast, and intelligent.
                     </p>
                </div>
            </div>
        </div>

        {/* Right: Form */}
        <div ref={formRef} className="relative flex items-center">
            <div className="w-full bg-white border border-slate-200 p-8 md:p-12 shadow-2xl shadow-slate-100">
                <div className="mb-10 border-b border-slate-100 pb-6 flex justify-between items-end">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h3>
                        <p className="text-slate-500 text-sm">
                            {isLogin ? 'Enter your credentials to access.' : 'Start your journey today.'}
                        </p>
                    </div>
                    <div className="text-right hidden sm:block">
                         <div className="text-xs font-mono text-slate-400 uppercase">Secure Connection</div>
                         <div className="flex items-center gap-1 justify-end mt-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold text-green-600">ENCRYPTED</span>
                         </div>
                    </div>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                    {!isLogin && (
                        <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">First Name</label>
                                <input 
                                    type="text" 
                                    placeholder="John"
                                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all duration-300 placeholder:text-slate-400"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">Last Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Doe"
                                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all duration-300 placeholder:text-slate-400"
                                />
                            </div>
                        </div>
                    )}

                    <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">Email Address</label>
                        <input 
                            type="email" 
                            placeholder="john.doe@example.com"
                            className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all duration-300 placeholder:text-slate-400"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <div className="flex justify-between">
                            <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">Password</label>
                            {isLogin && <a href="#" className="text-[11px] text-slate-400 hover:text-slate-900 transition-colors">Forgot password?</a>}
                        </div>
                        <input 
                            type="password" 
                            placeholder={isLogin ? "Enter your password" : "At least 8 characters"}
                            className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all duration-300 placeholder:text-slate-400"
                        />
                    </div>

                    {!isLogin && (
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">Confirm Password</label>
                            <input 
                                type="password" 
                                placeholder="Confirm your password"
                                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all duration-300 placeholder:text-slate-400"
                            />
                        </div>
                    )}

                    <div className="pt-4 space-y-4">
                        {!isLogin && (
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <div className="relative flex items-center pt-0.5">
                                    <input type="checkbox" className="peer sr-only" />
                                    <div className="w-4 h-4 border border-slate-300 peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-colors"></div>
                                    <Check size={10} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                                </div>
                                <span className="text-xs text-slate-500 group-hover:text-slate-900 transition-colors select-none">
                                    I agree to the <span className="underline decoration-1 underline-offset-2">terms of service</span> and <span className="underline decoration-1 underline-offset-2">privacy policy</span>
                                </span>
                            </label>
                        )}

                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center">
                                <input type="checkbox" className="peer sr-only" defaultChecked />
                                <div className="w-4 h-4 border border-slate-300 peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-colors"></div>
                                <Check size={10} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-xs text-slate-500 group-hover:text-slate-900 transition-colors select-none">
                                Remember me for 30 days
                            </span>
                        </label>
                    </div>

                    <button className="w-full bg-slate-900 text-white py-4 text-sm font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-slate-900/20">
                        {isLogin ? 'Sign In' : 'Create Account'}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <div className="text-center pt-4">
                        <button 
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-sm text-slate-500 hover:text-slate-900 transition-colors border-b border-transparent hover:border-slate-900 pb-0.5"
                        >
                            {isLogin ? "New user? Create an account" : "Existing user? Sign in"}
                        </button>
                    </div>
                </form>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/30 -z-10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};
