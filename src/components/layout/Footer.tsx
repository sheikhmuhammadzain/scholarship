'use client';

import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';

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
          {/* ... Rest of footer columns (shortened for brevity, logic identical to original) ... */}
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
        </div>
      </div>
    </footer>
  );
};