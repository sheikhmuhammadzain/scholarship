'use client';

import React, { useEffect, useRef, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ArrowRight, Check, ArrowLeft } from '@phosphor-icons/react';
import gsap from 'gsap';
import Link from 'next/link';

const AuthContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'login';
  
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [isLogin, setIsLogin] = useState(initialMode === 'login');

  useEffect(() => {
    setIsLogin(initialMode === 'login');
  }, [initialMode]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".auth-title-line", {
        yPercent: 100,
        opacity: 0,
        duration: 1.6,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });

      gsap.fromTo(formRef.current, 
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
  }, [isLogin]);

  return (
    <section ref={sectionRef} className="min-h-screen pt-32 pb-20 bg-white relative overflow-hidden flex flex-col">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 flex-grow">
        <div className="flex flex-col justify-center">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors mb-12 group w-max">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
            </Link>
            <div className="mb-12">
                <div className="overflow-hidden"><h1 className="auth-title-line text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-[0.9] mb-4">YOUR GATEWAY</h1></div>
                <div className="overflow-hidden"><h1 className="auth-title-line text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-[0.9] mb-8">TO GLOBAL EDUCATION<span className="text-blue-600">.</span></h1></div>
            </div>
        </div>
        <div ref={formRef} className="relative flex items-center">
            <div className="w-full bg-white border border-slate-200 p-8 md:p-12 shadow-2xl shadow-slate-100">
                <div className="mb-10 border-b border-slate-100 pb-6 flex justify-between items-end">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{isLogin ? 'Welcome Back' : 'Create Account'}</h3>
                    </div>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                    {/* Simplified for brevity - logic remains the same */}
                    <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">Email Address</label>
                        <input type="email" placeholder="john.doe@example.com" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-slate-900 transition-all" />
                    </div>
                    <button className="w-full bg-slate-900 text-white py-4 text-sm font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 group shadow-lg">
                        {isLogin ? 'Sign In' : 'Create Account'}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="text-center pt-4">
                        <button onClick={() => setIsLogin(!isLogin)} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                            {isLogin ? "New user? Create an account" : "Existing user? Sign in"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default function AuthPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContent />
    </Suspense>
  );
}