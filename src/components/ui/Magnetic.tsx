'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Magnetic = ({ children }: { children?: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const el = ref.current;
        if(!el) return;
        
        const mouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = el.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            
            gsap.to(el, {x: x * 0.3, y: y * 0.3, duration: 1, ease: "elastic.out(1, 0.3)"});
        }
        
        const mouseLeave = () => {
            gsap.to(el, {x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)"});
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