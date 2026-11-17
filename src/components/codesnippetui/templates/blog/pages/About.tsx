"use client"

import { motion } from "motion/react"
import { fadeInUp } from "../lib/motion"

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">About this journal</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A space for thinking out loud about interface design, accessible
            frontends, and the craft of building for the web. Written for
            designers and engineers who care about the details.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
