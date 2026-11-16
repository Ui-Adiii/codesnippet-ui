"use client"

import { motion } from "motion/react"
import { fadeInUp, item, staggerChildren } from "../lib/motion"
import { Code2Icon, LayersIcon, UsersIcon } from "lucide-react"

export default function About() {
  const philosophy =
    "I believe good software is invisible — it gets out of the user’s way, loads instantly, and works the way people expect. I ship code that’s readable, accessible, and maintainable, not just clever."

  return (
    <section id="about" className="relative py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12">
          <div className="lg:w-1/3 min-w-0">
            <motion.div variants={fadeInUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm ring-1 ring-foreground/5">
              <h2 className="text-3xl font-bold font-heading text-foreground">About me</h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                I’m a frontend-focused software engineer who cares deeply about performance, accessibility, and developer experience. I’ve spent the last few years building products and design systems that people enjoy using every day.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-2/3 min-w-0">
            <div className="grid gap-6">
              <motion.div variants={staggerChildren} className="grid gap-6">
                <motion.div
                  variants={item}
                  key="philosophy"
                  className="rounded-xl border border-border bg-card p-6 shadow-sm ring-1 ring-foreground/5 flex items-start gap-4"
                >
                  <div className="flex shrink-0 items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
                    <LayersIcon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold font-heading text-foreground">Development philosophy</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{philosophy}</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={item}
                  key="interests"
                  className="rounded-xl border border-border bg-card p-6 shadow-sm ring-1 ring-foreground/5 flex items-start gap-4"
                >
                  <div className="flex shrink-0 items-center justify-center rounded-lg bg-accent/10 p-2 text-accent-foreground">
                    <Code2Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold font-heading text-foreground">Technical interests</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Web performance, accessible UI systems, React server components, and design-to-code workflows. I enjoy digging into the browser’s rendering pipeline to squeeze out every last frame.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={item}
                  key="background"
                  className="rounded-xl border border-border bg-card p-6 shadow-sm ring-1 ring-foreground/5 flex items-start gap-4"
                >
                  <div className="flex shrink-0 items-center justify-center rounded-lg bg-secondary/10 p-2 text-secondary-foreground">
                    <UsersIcon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold font-heading text-foreground">Background</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      I studied Computer Science at the University of Waterloo and have worked on developer tools, dashboards, and consumer-facing products at companies like Vercel and Stripe.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                <span className="flex items-center gap-1 whitespace-nowrap">
                  <svg className="size-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.127-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.127-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  Remote-first
                </span>
                <span className="flex items-center gap-1 whitespace-nowrap">
                  <svg className="size-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
