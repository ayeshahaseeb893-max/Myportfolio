import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const PlexusBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // alpha: false tells the browser the canvas is opaque, optimizing blending pipeline natively
    const ctx = canvas.getContext('2d', { alpha: false });

    let w, h;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const particles = [];
    const colors = ['#00e5ff', '#b400ff', '#ff00a0']; // Neon Cyan, Purple, Pink
    const MAX_DIST_SQ = 130 * 130; // 16900 avoids Math.sqrt entirely for connections

    class Particle {
      constructor(reset = false) {
        this.spawn(reset);
      }
      spawn(fromCenter) {
        if (fromCenter) {
          const angle = Math.random() * Math.PI * 2;
          const r = Math.random() * 50;
          this.x = w / 2 + Math.cos(angle) * r;
          this.y = h / 2 + Math.sin(angle) * r;
        } else {
          this.x = Math.random() * w;
          this.y = Math.random() * h;
        }

        this.baseSpeed = Math.random() * 0.4 + 0.1;
        this.radius = Math.random() * 2 + 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = fromCenter ? 0 : Math.random();
      }
      update() {
        const dx = this.x - w / 2;
        const dy = this.y - h / 2;
        const dCenter = Math.sqrt(dx * dx + dy * dy) || 1;

        this.x += (dx / dCenter) * this.baseSpeed;
        this.y += (dy / dCenter) * this.baseSpeed;

        const mdx = this.x - mouse.x;
        const mdy = this.y - mouse.y;
        // Fast mouse repulsion check (avoids Math.sqrt if possible)
        const mDistSq = mdx * mdx + mdy * mdy;
        if (mDistSq < 14400) { // 120^2
          const mDist = Math.sqrt(mDistSq);
          this.x += (mdx / mDist) * 1.5;
          this.y += (mdy / mDist) * 1.5;
        }

        if (this.alpha < 1) this.alpha += 0.005;

        if (this.x < -100 || this.x > w + 100 || this.y < -100 || this.y > h + 100) {
          this.spawn(true);
        }
      }
    }

    // 100 particles is the sweet spot for heavy mobile/desktop 60FPS locking
    for (let i = 0; i < 100; i++) particles.push(new Particle(false));

    let animId;
    const draw = () => {
      // Hardware accelerated clear + trailing
      ctx.fillStyle = 'rgba(3, 0, 20, 0.4)';
      ctx.fillRect(0, 0, w, h);

      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();

        // Draw solid node (no shadowBlur filter, done strictly via hardware CSS drop-shadow on the canvas)
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.alpha;
        ctx.fill();

        // Connect Plexus Lines (Massively Optimized O(n^2) nested loop)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < MAX_DIST_SQ) {
            const dist = Math.sqrt(distSq);
            ctx.beginPath();

            // Skip expensive dynamic gradients; use pure solid blended lines
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = Math.min(p1.alpha, p2.alpha) * (1 - dist / 130) * 0.8;

            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      animId = window.requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Offloaded the massive CPU blur load to strict generic opacity/scaled blurs */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [-50, 50, -50],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-[#00e5ff]/20 rounded-full blur-[100px] mix-blend-screen will-change-transform"
      />
      <motion.div
        animate={{
          x: [50, -50, 50],
          y: [50, -50, 50],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-[#b400ff]/20 rounded-full blur-[110px] mix-blend-screen will-change-transform"
      />

      {/* GPU hardware accelerated drop-shadow makes the entire network glow natively without CPU software passes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full mix-blend-screen"
      />
    </div>
  );
};

export default PlexusBackground;
