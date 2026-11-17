"use client"

import { motion } from "motion/react"
import { useRef } from "react"
import { fadeInUp } from "../lib/motion"

export default function Hero({
  query,
  setQuery,
  onSearch,
}: {
  query: string
  setQuery: (value: string) => void
  onSearch: () => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputRef.current) inputRef.current.focus()
    onSearch()
    scrollTo("latest")
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 mt-15 -z-10 bg-[radial-gradient(circle,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block rounded-lg border border-border bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground uppercase tracking-tighter">
            Editorial journal
          </span>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Ideas worth<span className="text-primary"> publishing</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A curated look at design, frontend engineering, accessibility, and
            the details that separate good interfaces from great ones.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="relative max-w-2xl mx-auto">
          <div className="relative rounded-2xl border border-border bg-card shadow-sm ring-1 ring-foreground/5 overflow-hidden">
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col lg:flex-row gap-3">
                <input
                  ref={inputRef}
                  type="search"
                  placeholder="Search articles…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 min-w-0 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground border-r-0 focus-2 outline-none transition-colors"
                  aria-label="Search articles"
                />
                <button
                  type="submit"
                  className="rounded-r-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                >
                  Search
                </button>
              </div>
              {query && (
                <p className="mt-3 text-xs text-muted-foreground">
                  Showing results for{" "}
                  <span className="text-foreground font-medium">{query}</span>
                </p>
              )}
            </form>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 flex items-center justify-center gap-4 sm:gap-6 opacity-60"
        >
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            About
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            Archive
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            RSS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
