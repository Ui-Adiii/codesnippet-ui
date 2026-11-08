"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
  intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
  x: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  phase: number;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
}

export default function BeamsBackground({
  className,
  children,
  intensity = "strong",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: true });

    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let lastTime = 0;
    let elapsed = 0;

    const scale = {
      subtle: 0.55,
      medium: 0.8,
      strong: 1,
    }[intensity];

    const beams: Beam[] = Array.from({ length: 12 }, (_, i) => ({
      x: 0.04 + (i / 11) * 0.92 + (Math.random() - 0.5) * 0.08,
      width: 18 + Math.random() * 48,
      length: 0.65 + Math.random() * 0.4,
      angle: (Math.random() - 0.5) * 0.13,
      speed: 0.00008 + Math.random() * 0.00012,
      opacity: (0.09 + Math.random() * 0.09) * scale,
      hue: i < 4 ? 185 + Math.random() * 18 : 205 + Math.random() * 55,
      phase: Math.random() * Math.PI * 2,
    }));

    const particles: Particle[] = Array.from({ length: 55 }, () => ({
      x: Math.random(),
      y: Math.random() * 0.65,
      radius: 1 + Math.random() * 2.5,
      speed: 0.008 + Math.random() * 0.018,
      opacity: 0.15 + Math.random() * 0.4,
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawAtmosphere = () => {
      const glow = ctx.createLinearGradient(0, 0, 0, height);

      glow.addColorStop(0, "rgba(0, 180, 210, 0.12)");
      glow.addColorStop(0.25, "rgba(0, 90, 180, 0.07)");
      glow.addColorStop(0.65, "rgba(20, 20, 100, 0.04)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Cyan glow
      let radial = ctx.createRadialGradient(
        width * 0.4,
        0,
        0,
        width * 0.4,
        height * 0.1,
        height * 0.8,
      );

      radial.addColorStop(0, "rgba(0, 225, 240, 0.35)");
      radial.addColorStop(0.5, "rgba(0, 100, 210, 0.10)");
      radial.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);

      // Violet glow
      radial = ctx.createRadialGradient(
        width * 0.82,
        0,
        0,
        width * 0.82,
        height * 0.1,
        height * 0.7,
      );

      radial.addColorStop(0, "rgba(100, 20, 220, 0.28)");
      radial.addColorStop(0.5, "rgba(50, 40, 180, 0.08)");
      radial.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);
    };

    const drawBeam = (beam: Beam, time: number) => {
      const centerX = beam.x * width;
      const length = height * beam.length;
      const segments = 20;

      const pulse = 0.85 + Math.sin(time * 0.0005 + beam.phase) * 0.15;

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      for (let i = 0; i < segments; i++) {
        const t = i / segments;
        const nextT = (i + 1) / segments;

        const y = t * length;
        const segmentHeight = length / segments + 2;

        const currentWidth = beam.width * (1 - t * 0.5);
        const nextWidth = beam.width * (1 - nextT * 0.5);

        const x =
          centerX +
          Math.tan(beam.angle) * y +
          Math.sin(time * beam.speed + beam.phase) * 8;

        const alpha = beam.opacity * pulse * Math.pow(1 - t, 1.5);

        const gradient = ctx.createLinearGradient(
          x - currentWidth,
          0,
          x + currentWidth,
          0,
        );

        gradient.addColorStop(0, `hsla(${beam.hue}, 100%, 65%, 0)`);
        gradient.addColorStop(
          0.35,
          `hsla(${beam.hue}, 100%, 65%, ${alpha * 0.3})`,
        );
        gradient.addColorStop(0.5, `hsla(${beam.hue}, 100%, 75%, ${alpha})`);
        gradient.addColorStop(
          0.65,
          `hsla(${beam.hue}, 100%, 65%, ${alpha * 0.3})`,
        );
        gradient.addColorStop(1, `hsla(${beam.hue}, 100%, 65%, 0)`);

        ctx.fillStyle = gradient;

        ctx.beginPath();
        ctx.moveTo(x - currentWidth, y);
        ctx.lineTo(x + currentWidth, y);
        ctx.lineTo(x + nextWidth, y + segmentHeight);
        ctx.lineTo(x - nextWidth, y + segmentHeight);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
    };

    const drawParticles = (delta: number) => {
      particles.forEach((particle) => {
        particle.y += particle.speed * delta * 0.001;

        if (particle.y > 0.8) {
          particle.y = 0;
          particle.x = Math.random();
        }

        const x = particle.x * width;
        const y = particle.y * height;

        const glow = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          particle.radius * 4,
        );

        glow.addColorStop(0, `rgba(70, 220, 255, ${particle.opacity * scale})`);
        glow.addColorStop(1, "rgba(70, 220, 255, 0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, particle.radius * 4, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = (time: number) => {
      frame = requestAnimationFrame(animate);

      // Limit rendering to ~30 FPS
      if (time - lastTime < 33) return;

      const delta = lastTime ? Math.min(time - lastTime, 50) : 33;
      lastTime = time;
      elapsed += delta;

      ctx.clearRect(0, 0, width, height);

      drawAtmosphere();

      beams.forEach((beam) => drawBeam(beam, elapsed));

      drawParticles(delta);

      // Fade light towards the bottom
      const fade = ctx.createLinearGradient(0, height * 0.35, 0, height);

      fade.addColorStop(0, "rgba(0, 0, 0, 0)");
      fade.addColorStop(0.5, "rgba(0, 0, 0, 0.35)");
      fade.addColorStop(1, "rgba(0, 0, 0, 0.95)");

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = fade;
      ctx.fillRect(0, 0, width, height);
    };

    resize();

    window.addEventListener("resize", resize);

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [intensity]);

  return (
    <div
      className={cn(
        "relative isolate min-h-screen w-full overflow-hidden bg-black",
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      />

      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      <div className="relative z-[1] flex min-h-screen w-full items-center justify-center">
        {children || (
          <div className="flex flex-col items-center gap-6 px-4 text-center">
            <motion.h1
              className="text-6xl font-semibold tracking-tighter text-white md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Beams
              <br />
              Background
            </motion.h1>

            <motion.p
              className="text-lg tracking-tighter text-white/70 md:text-2xl lg:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              For your pleasure
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
}
