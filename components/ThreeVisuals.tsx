
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
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
    };
    setSize();

    // Configuration
    const config = {
        particleCount: 140,
        connectionDistance: 160,
        mouseInfluenceRadius: 300,
        focalLength: 800,
        depth: 1200
    };

    // State
    const mouse = { x: width * 0.75, y: height * 0.5 };
    const targetMouse = { x: width * 0.75, y: height * 0.5 };

    class Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      color: string;
      size: number;
      phase: number;

      constructor() {
        this.x = (Math.random() - 0.5) * width * 1.5;
        this.y = (Math.random() - 0.5) * height * 1.5;
        this.z = Math.random() * config.depth;
        
        // Organic Drift Velocity
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.vz = (Math.random() - 0.5) * 0.5;

        // Premium Palette
        const colors = ['#0f172a', '#3b82f6', '#0ea5e9', '#64748b']; 
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = Math.random() * 2 + 1;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.phase += 0.03;
        
        // Flow Field movement
        this.x += this.vx + Math.sin(this.phase * 0.5) * 0.2;
        this.y += this.vy + Math.cos(this.phase * 0.5) * 0.2;
        this.z -= 0.5; // Constant forward movement like a starfield

        // Recycle particles
        if (this.z < -config.focalLength + 100) this.z = config.depth;
        
        // Mouse Parallax / Repulsion
        const dx = mouse.x - (width / 2);
        const dy = mouse.y - (height / 2);
        this.x -= dx * 0.0002 * (this.z / config.depth); 
        this.y -= dy * 0.0002 * (this.z / config.depth);
      }

      draw(ctx: CanvasRenderingContext2D, centerX: number, centerY: number) {
        // Perspective Projection
        const scale = config.focalLength / (config.focalLength + this.z);
        const x2d = (this.x * scale) + centerX;
        const y2d = (this.y * scale) + centerY;

        // Depth of Field Simulation
        const alpha = Math.max(0, Math.min(1, (scale * scale * 0.8)));
        const renderSize = this.size * scale;

        // Draw Node
        ctx.beginPath();
        ctx.arc(x2d, y2d, renderSize, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        return { x: x2d, y: y2d, z: this.z, scale, alpha, color: this.color };
      }
    }

    // Initialize Swarm
    const particles: Particle[] = [];
    for(let i=0; i<config.particleCount; i++) {
        particles.push(new Particle());
    }

    const animate = () => {
        // Smooth Mouse Lerp
        mouse.x += (targetMouse.x - mouse.x) * 0.05;
        mouse.y += (targetMouse.y - mouse.y) * 0.05;

        ctx.clearRect(0, 0, width, height);
        const centerX = width / 2;
        const centerY = height / 2;

        // Update & Project
        const projected = particles.map(p => {
            p.update();
            return p.draw(ctx, centerX, centerY);
        });

        // Draw Synaptic Connections
        ctx.lineWidth = 0.5;
        for (let i = 0; i < projected.length; i++) {
            const p1 = projected[i];
            if (p1.alpha < 0.1) continue;

            // Connect to nearest neighbors only
            for (let j = i + 1; j < projected.length; j++) {
                const p2 = projected[j];
                if (p2.alpha < 0.1) continue;

                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                const maxDist = config.connectionDistance * p1.scale;

                if (dist < maxDist) {
                    // Calculate opacity based on distance and shared depth alpha
                    const opacity = (1 - dist / maxDist) * Math.min(p1.alpha, p2.alpha) * 0.4;
                    
                    if (opacity > 0.05) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        
                        // Premium Gradient Line
                        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                        gradient.addColorStop(0, p1.color);
                        gradient.addColorStop(1, p2.color);
                        
                        ctx.strokeStyle = gradient;
                        ctx.globalAlpha = opacity;
                        ctx.stroke();
                    }
                }
            }
        }

        requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
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
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 mix-blend-multiply opacity-80"
    />
  );
};
