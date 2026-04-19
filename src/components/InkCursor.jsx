import React, { useEffect, useRef } from 'react';

const InkCursor = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 2; // slightly smaller
        this.speedX = Math.random() * 0.5 - 0.25; // slower
        this.speedY = Math.random() * 0.5 - 0.25; // slower
        this.life = Math.random() * 60 + 30; // shorter lifespan
        const colors = ['#22d3ee', '#a78bfa', '#f472b6'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        this.size *= 0.95;
      }

      draw() {
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10; // soft glow
        ctx.globalAlpha = 0.9;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }
    }

    const createInkParticles = (x, y) => {
      for (let i = 0; i < 3; i++) { // fewer particles per mouse move
        if (particlesRef.current.length < 100) { // max particles
          particlesRef.current.push(new Particle(x, y));
        }
      }
    };

    const onMouseMove = (e) => {
      createInkParticles(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].life <= 0 || particles[i].size <= 0.2) {
          particles.splice(i, 1);
          i--;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1000]"
      style={{ display: 'block' }}
    />
  );
};

export default InkCursor;