'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Center cursor initially to prevent jump
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2, 
        ease: "power2.out"
      });
    };

    const hoverScale = () => {
      gsap.to(cursor, { scale: 3, backgroundColor: "white", mixBlendMode: "difference", duration: 0.5, ease: "power2.out" });
    };

    const hoverReset = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "#3b82f6", mixBlendMode: "normal", duration: 0.5, ease: "power2.out" });
    };

    window.addEventListener("mousemove", moveCursor);
    
    // Attach hover listeners to interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, .cursor-hover')) {
        hoverScale();
      } else {
        hoverReset();
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-[9999] hidden md:block"
    />
  );
};