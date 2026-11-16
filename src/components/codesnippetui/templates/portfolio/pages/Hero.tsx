"use client"

import { motion } from "motion/react"
import React from "react"
import Link from "next/link"
import { GitBranchIcon, LinkIcon, XIcon } from "lucide-react"
import { fadeInUp, staggerChildren } from "../lib/motion"
import { heroRoles, socials } from "../data/data"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [roleIndex, setRoleIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % heroRoles.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const SOCIAL_LINKS = socials

  return (
    <section
      id="home"
      className="relative flex  h-screen flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--accent)/10,transparent)]" />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          "bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)]",
          "bg-[size:4rem_4rem]",
          "opacity-40 dark:opacity-60",
        )}
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="max-w-2xl px-6 text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
        >
          Available for freelance
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl font-heading text-foreground"
        >
          Hi, I’m <span className="text-primary">Aditya.</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-4 text-xl text-muted-foreground sm:text-2xl max-w-lg mx-auto leading-relaxed"
        >
          I build{" "}
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1, 0.95] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="text-primary font-semibold"
          >
            {heroRoles[roleIndex]}
          </motion.span>{" "}
          that are fast, accessible, and a pleasure to use.
        </motion.p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm hover:bg-accent transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </Link>
        </div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 flex items-center justify-center gap-6 opacity-50 transition-opacity sm:gap-10"
        >
          {SOCIAL_LINKS.map((s) => {
            const Icon =
              s.name === "GitHub"
                ? GitBranchIcon
                : s.name === "X"
                  ? XIcon
                  : LinkIcon;
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="size-10 rounded-lg text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
