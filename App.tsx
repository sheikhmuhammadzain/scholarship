
import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Layout';
import { Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { Workflow } from './components/Workflow';
import { AIFeatures } from './components/AIFeatures';
import { AuthPage } from './components/AuthSection';
import { 
  Destinations, 
  ExpertGuidance, 
  TrustedBy, 
  Newsletter 
} from './components/ContentSections';
import {
  StatsDashboard,
  FeatureDeepDive,
  ComparisonTable,
  ImpactMetrics,
  FAQ,
  TrustSection,
  CTASection
} from './components/NewSections';

// Initialize GSAP
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      window.gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2, // Increased for floaty feel
        ease: "power2.out"
      });
    };

    const hoverScale = () => {
      window.gsap.to(cursor, { scale: 3, backgroundColor: "white", mixBlendMode: "difference", duration: 0.5, ease: "power2.out" });
    };

    const hoverReset = () => {
      window.gsap.to(cursor, { scale: 1, backgroundColor: "#3b82f6", mixBlendMode: "normal", duration: 0.5, ease: "power2.out" });
    };

    window.addEventListener("mousemove", moveCursor);
    
    // Attach hover listeners to interactive elements
    const interactives = document.querySelectorAll('a, button, input, .cursor-hover');
    interactives.forEach(el => {
      el.addEventListener("mouseenter", hoverScale);
      el.addEventListener("mouseleave", hoverReset);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactives.forEach(el => {
        el.removeEventListener("mouseenter", hoverScale);
        el.removeEventListener("mouseleave", hoverReset);
      });
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
    />
  );
};

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'auth'>('home');
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
    }
  }, []);

  // Cleanup ScrollTrigger when route changes to avoid ghosts
  useEffect(() => {
      if (window.ScrollTrigger) {
          window.ScrollTrigger.refresh();
      }
  }, [currentRoute]);

  const handleNavigate = (route: 'home' | 'auth', params?: { mode: 'login' | 'signup' }) => {
    // Kill existing ScrollTriggers before navigating to prevent white space issues
    if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((t: any) => t.kill());
    }

    if (route === 'auth' && params) {
        setAuthMode(params.mode);
    }
    
    setCurrentRoute(route);
    
    // Slight delay to ensure DOM is ready for new scroll context
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);
  };

  return (
    <div className="bg-white min-h-screen selection:bg-black selection:text-white flex flex-col cursor-none">
      <CustomCursor />
      
      {/* Navbar outside main content to ensure fixed positioning works correctly */}
      <Navbar onNavigate={handleNavigate} />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="flex-grow">
            {currentRoute === 'home' ? (
              <>
                <Hero />
                <StatsDashboard />
                <AIFeatures />
                <Workflow />
                <FeatureDeepDive />
                <ComparisonTable />
                <ImpactMetrics />
                <TrustedBy />
                <TrustSection />
                <Destinations />
                <FAQ />
                <ExpertGuidance />
                <CTASection onNavigate={handleNavigate} />
                <Newsletter />
              </>
            ) : (
              <AuthPage initialMode={authMode} onNavigate={handleNavigate} />
            )}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
