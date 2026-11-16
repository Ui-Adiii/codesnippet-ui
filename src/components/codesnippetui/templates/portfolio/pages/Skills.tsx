"use client"

import { motion } from "motion/react"
import { fadeInUp, item, staggerChildren } from "../lib/motion"
import { skills } from "../data/data"
import { Code2Icon, MonitorIcon, DatabaseIcon, CpuIcon, SettingsIcon, BrainIcon } from "lucide-react"

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Programming Languages": Code2Icon,
  "Frontend Development": MonitorIcon,
  "Backend Development": CpuIcon,
  Databases: DatabaseIcon,
  "Tools & Technologies": SettingsIcon,
  "AI / Machine Learning": BrainIcon,
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-foreground">Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Technologies I work with, organized by category.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => {
            const Icon = CATEGORY_ICONS[category.category] || Code2Icon
            return (
              <motion.div
                key={category.category}
                variants={staggerChildren}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-border bg-card p-6 shadow-sm ring-1 ring-foreground/5 transition-transform group"
              >
                <div className="flex items-center gap-3 mb-4 min-w-0">
                  <div className="flex shrink-0 items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold font-heading text-foreground truncate min-w-0">{category.category}</h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={item}
                      className="flex items-center justify-between min-w-0 px-2 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors group-hover:bg-accent/50 group-hover:text-accent-foreground"
                    >
                      <span className="text-sm text-foreground truncate min-w-0">{skill.name}</span>
                      <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${
                        skill.level === "advanced"
                          ? "bg-primary text-primary-foreground"
                          : skill.level === "intermediate"
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                      }`}>
                        {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
