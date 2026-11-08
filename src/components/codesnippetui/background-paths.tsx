"use client";

import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 18 }, (_, i) => {
    const offset = i * 7;

    return (
      <path
        key={i}
        d={`M-${380 - offset * position} -${189 + offset}
                C-${380 - offset * position} -${189 + offset}
                -${312 - offset * position} ${216 - offset}
                ${152 - offset * position} ${343 - offset}
                C${616 - offset * position} ${470 - offset}
                ${684 - offset * position} ${875 - offset}
                ${684 - offset * position} ${875 - offset}`}
        stroke="currentColor"
        strokeWidth="0.8"
        strokeOpacity={0.12 + (i / 18) * 0.25}
        fill="none"
      />
    );
  });

  return (
    <svg
      viewBox="0 0 696 316"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full text-neutral-900 dark:text-white"
      fill="none"
      aria-hidden="true"
    >
      {paths}
    </svg>
  );
}

export default function BackgroundPaths({
  title = "Background Paths",
}: {
  title?: string;
}) {
  return (
    <section className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <style jsx>{`
        @keyframes float-one {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(12px, -8px, 0);
          }
        }

        @keyframes float-two {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-12px, 8px, 0);
          }
        }

        @keyframes content-enter {
          from {
            opacity: 0;
            transform: translate3d(0, 15px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .paths-one {
          animation: float-one 18s ease-in-out infinite;
          will-change: transform;
        }

        .paths-two {
          animation: float-two 22s ease-in-out infinite;
          will-change: transform;
        }

        .content-enter {
          animation: content-enter 0.7s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .paths-one,
          .paths-two {
            animation: none;
          }

          .content-enter {
            animation: none;
          }
        }
      `}</style>

      {/* Animated SVG background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="paths-one absolute inset-0">
          <FloatingPaths position={1} />
        </div>

        <div className="paths-two absolute inset-0">
          <FloatingPaths position={-1} />
        </div>

        {/* Subtle fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-neutral-950" />
      </div>

      {/* Content */}
      <div className="container relative z-[1] mx-auto px-4 text-center md:px-6">
        <div className="content-enter mx-auto max-w-4xl">
          <h1 className="mb-8 text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl">
            <span className="bg-gradient-to-r from-neutral-900 to-neutral-700/80 bg-clip-text text-transparent dark:from-white dark:to-white/80">
              {title}
            </span>
          </h1>

          <Button
            variant="ghost"
            className="group rounded-2xl border border-black/10 bg-white/80 px-8 py-6 text-lg font-semibold text-black backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-black/80 dark:text-white"
          >
            Get Started
            <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
