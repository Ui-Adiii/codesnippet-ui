"use client"

import React from "react"
import { motion } from "motion/react"
import Link from "next/link"
import { fadeInUp, item, staggerChildren, slideIn } from "../lib/motion"
import { projects } from "../lib/data"
import { ExternalLinkIcon, GitBranchIcon } from "lucide-react"
import { cn } from "../lib/utils"

export default function Projects() {
  const [activeCategory, setActiveCategory] = React.useState<string>("All")
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]
  const filtered = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  )

  return (
    <section id="projects" className="relative py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold font-heading text-foreground">
            Selected work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A few projects I’ve worked on, with source and live demos.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-lg px-4 py-1.5 text-sm font-medium transition-colors border",
                activeCategory === category
                  ? "border-border bg-accent text-accent-foreground"
                  : "border-border bg-background text-muted-foreground hover:text-foreground hover:border-border",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          variants={staggerChildren}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -6 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm ring-1 ring-foreground/5",
                project.featured ? "ring-2 ring-primary" : "",
              )}
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center bg-muted/60 group-hover:opacity-100 transition-opacity",
                    project.featured ? "bg-accent" : "",
                  )}
                >
                  {project?.image ? (
                    <img src={project?.image} />
                  ) : (
                    <GitBranchIcon
                      className="size-6 text-foreground"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      project.featured
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-xs font-semibold text-primary">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="font-bold font-heading text-lg text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5 max-w-full overflow-hidden">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground truncate whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-lg border border-input bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-accent transition-colors"
                  >
                    <GitBranchIcon className="size-4" aria-hidden="true" /> Repo
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    aria-label={`Live demo for ${project.name}`}
                  >
                    Live{" "}
                    <ExternalLinkIcon className="size-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <motion.div
              variants={slideIn}
              className="col-span-full flex flex-col items-center justify-center py-20 text-center"
            >
              <p className="text-lg text-muted-foreground">
                No projects in this category.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
