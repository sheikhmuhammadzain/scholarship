
import React, { useEffect, useRef } from 'react';

export const NeuralConstellation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // High DPI Canvas Setup
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;
    
    const setSize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
    };
    setSize();

    // Configuration
    const config = {
        particleCount: window.innerWidth < 768 ? 60 : 140, // Reduced count for mobile
        connectionDistance: 160,
        mouseInfluenceRadius: 300,
        focalLength: 800, // Distance of the "camera"
        depth: 1000, // How deep the scene goes
        zSpeed: 2 // Speed of travel through Z-space
    };

    // State
    const mouse = { x: width * 0.75, y: height * 0.5 };
    const targetMouse = { x: width * 0.75, y: height * 0.5 };
    
    // Particle Class
    class Particle {
        x: number;
        y: number;
        z: number;
        ox: number; // Original X
        oy: number; // Original Y
        size: number;
        
        constructor() {
            this.x = (Math.random() - 0.5) * width * 1.5; // Spread wide
            this.y = (Math.random() - 0.5) * height * 1.5;
            this.z = Math.random() * config.depth;
            this.ox = this.x;
            this.oy = this.y;
            this.size = Math.random() * 2 + 1.5;
        }

        update() {
            // Move forward in Z space
            this.z -= config.zSpeed;

            // Reset when passed camera
            if (this.z <= 0) {
                this.z = config.depth;
                this.x = (Math.random() - 0.5) * width * 1.5;
                this.y = (Math.random() - 0.5) * height * 1.5;
                this.ox = this.x;
                this.oy = this.y;
            }

            // Mouse Influence (Parallax + Attraction)
            const dx = mouse.x - width / 2;
            const dy = mouse.y - height / 2;
            
            // Subtle parallax based on mouse position
            this.x = this.ox + (dx * (config.depth - this.z) / config.depth) * 0.1;
            this.y = this.oy + (dy * (config.depth - this.z) / config.depth) * 0.1;
        }

        getProjection() {
            // 3D to 2D Projection Math
            const scale = config.focalLength / (config.focalLength + this.z);
            const x2d = this.x * scale + width / 2;
            const y2d = this.y * scale + height / 2;
            return { x: x2d, y: y2d, scale };
        }
    }

    // Initialize Particles
    const particles: Particle[] = [];
    for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
    }

    // Animation Loop
    let animationFrameId: number;

    const render = () => {
        // Smooth Mouse Interpolation
        mouse.x += (targetMouse.x - mouse.x) * 0.05;
        mouse.y += (targetMouse.y - mouse.y) * 0.05;

        ctx.clearRect(0, 0, width, height);

        // Update & Draw Particles
        const projectedPoints: {x: number, y: number, z: number, p: Particle}[] = [];

        particles.forEach(p => {
            p.update();
            const proj = p.getProjection();
            
            // Only draw if within viewport bounds (with padding)
            if(proj.x > -50 && proj.x < width + 50 && proj.y > -50 && proj.y < height + 50) {
                projectedPoints.push({ x: proj.x, y: proj.y, z: p.z, p: p });

                // Draw Node
                // Opacity based on depth (fades out as it gets deeper)
                const alpha = 1 - (p.z / config.depth);
                ctx.beginPath();
                ctx.arc(proj.x, proj.y, p.size * proj.scale, 0, Math.PI * 2);
                
                // Color: Dark Slate Blue to pop on #F4F4F3
                ctx.fillStyle = `rgba(30, 41, 59, ${alpha})`; 
                ctx.fill();
            }
        });

        // Draw Connections
        for (let i = 0; i < projectedPoints.length; i++) {
            const p1 = projectedPoints[i];
            
            // Optimization: Only check neighbors in array to reduce O(n^2) impact
            // Since array is arbitrary, we check all, but loop count is low (140)
            for (let j = i + 1; j < projectedPoints.length; j++) {
                const p2 = projectedPoints[j];
                
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < config.connectionDistance) {
                    // Line opacity depends on distance AND average depth
                    const distAlpha = 1 - (dist / config.connectionDistance);
                    const depthAlpha = 1 - ((p1.z + p2.z) / 2 / config.depth);
                    
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    
                    // Color: Electric Blue connections
                    ctx.strokeStyle = `rgba(59, 130, 246, ${distAlpha * depthAlpha * 0.4})`;
                    ctx.lineWidth = 1.5 * depthAlpha;
                    ctx.stroke();
                }
            }
        }

        animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Event Listeners
    const handleResize = () => {
        setSize();
    };

    const handleMouseMove = (e: MouseEvent) => {
        targetMouse.x = e.clientX;
        targetMouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
    />
  );
};
