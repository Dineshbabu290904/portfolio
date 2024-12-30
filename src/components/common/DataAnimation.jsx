import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function DataAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Create particle
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.speed = 1 + Math.random() * 2;
        this.radius = 1 + Math.random() * 2;
        this.opacity = Math.random();
      }

      update() {
        this.y -= this.speed;
        this.opacity -= 0.005;

        if (this.y < 0 || this.opacity <= 0) {
          this.y = canvas.height + Math.random() * 100;
          this.opacity = Math.random();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 117, 252, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Initialize particles
    const init = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    setCanvasSize();
    init();
    animate();

    window.addEventListener('resize', () => {
      setCanvasSize();
      init();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.5,
      }}
    />
  );
}

export default DataAnimation; 