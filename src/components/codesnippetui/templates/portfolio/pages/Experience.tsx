"use client"

import { motion } from "motion/react"
import { fadeInUp, item, staggerChildren } from "../lib/motion"
import { experience } from "../lib/data"

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
        <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-heading text-foreground">Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of teams I’ve worked with and what I helped build.
          </p>
        </motion.div>

        <motion.div variants={staggerChildren} className="relative">
          <div className="absolute inset-y-0 left-0 w-px bg-border hidden sm:block" />

          {experience.map((job) => (
            <motion.div
              key={job.company}
              variants={item}
              className="relative pl-12 sm:pl-16 mb-16 last:mb-0"
            >
              <div className="absolute left-0 top-2.5 sm:top-3 w-3 h-3 rounded-full border-2 border-primary bg-primary" />
              <div className="absolute left-[calc(50%-5px)] top-0 sm:left-[calc(50%-7.5px)] w-[10px] h-[10px] bg-card sm:hidden" />
              <div className="mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <h3 className="font-bold font-heading text-lg text-foreground">{job.role}</h3>
                  <p className="text-sm font-medium text-primary">{job.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{job.duration}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {job.description}
              </p>
              <div className="flex flex-wrap gap-1.5 max-w-full overflow-hidden">
                {job.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 rounded-lg border border-border bg-muted text-muted-foreground shrink-0 whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 space-y-1">
                {job.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="flex shrink-0 mt-1 size-1.5 bg-primary rounded-full" aria-hidden="true" />
                    <p className="leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
