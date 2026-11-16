"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

import { socials } from "../data/data"

export default function Footer() {
  const [scrolled, setScrolled] = useState(false)
  const [currentYear, setCurrentYear] = useState<number>(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setCurrentYear(new Date().getFullYear()), 0)
    return () => clearTimeout(timer)
  }, [])

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <span className="rounded bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">AD</span>
            <span className="font-bold font-heading text-lg text-foreground">Aditya.</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-full overflow-hidden">
            {currentYear} Aditya Mallick. Built with Next.js, Tailwind, and Motion.
          </p>
          <nav className="flex flex-wrap gap-4 text-sm">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">About</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Contact</a>
          </nav>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="hover:text-foreground transition-colors whitespace-nowrap shrink-0"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={cn(
            "fixed right-6 bottom-6 z-40 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors opacity-0 translate-y-4 pointer-events-none",
            scrolled ? "opacity-100 translate-y-0 pointer-events-auto" : ""
          )}
        >
          ↑
        </button>
      </div>
    </footer>
  )
}
