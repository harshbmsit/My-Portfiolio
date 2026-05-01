"use client";

import React, { useEffect, useRef } from 'react';

class Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: string;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    // Explode outward slightly
    this.vx = (Math.random() - 0.5) * 3;
    this.vy = (Math.random() - 0.5) * 3 + 1; // Slight gravity/drift downwards
    this.life = 1;
    this.size = Math.random() * 2.5 + 1;
    
    // Starlight palette: White, Neon Blue, Neon Red, Yellow
    const colors = ['#ffffff', '#ffffff', '#33ccff', '#ff3333', '#ffff33'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life -= 0.02; // Fade out speed
    this.size *= 0.96; // Shrink
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    // Create a tiny star/circle
    ctx.arc(this.x, this.y, Math.max(0, this.size), 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = Math.max(0, this.life);
    
    // Add glow effect
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0; // Reset
  }
}

const StarCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      starsRef.current.forEach((star, index) => {
        star.update();
        star.draw(ctx);
        if (star.life <= 0) {
          starsRef.current.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    const handleMouseMove = (e: MouseEvent) => {
      // Spawn stars on mouse move
      for (let i = 0; i < 2; i++) {
        starsRef.current.push(new Star(e.clientX, e.clientY));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999, // Render on top of everything
      }}
    />
  );
};

export default StarCursor;
