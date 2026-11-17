"use client"

import { motion } from "motion/react"
import { cn } from "../lib/utils"
import { type Category } from "../lib/data"
import { fadeInUp, item, staggerChildren } from "../lib/motion"

type CategoriesProps = {
  categoryCounts: Category[]
  activeCategory: string
  setActiveCategory: (id: string) => void
  scrollToLatest: () => void
}

export default function Categories({
  categoryCounts,
  activeCategory,
  setActiveCategory,
  scrollToLatest,
}: CategoriesProps) {
  return (
    <section id="categories" className="py-24 border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div variants={fadeInUp} className="mb-16">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground">Categories</h2>
            <p className="text-sm text-muted-foreground">Browse by topic</p>
          </div>
        </motion.div>
        <motion.div variants={staggerChildren} className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {categoryCounts.map((cat) => (
            <motion.div
              key={cat.id}
              variants={item}
              onClick={() => {
                setActiveCategory(cat.id)
                scrollToLatest()
              }}
              className="cursor-pointer group relative rounded-xl border border-border bg-card p-6 shadow-sm ring-1 ring-foreground/5 transition-colors hover:border-primary/50 hover:bg-accent/50"
            >
              <div className="flex items-center justify-between">
                <span className={cn("font-semibold text-foreground", activeCategory === cat.id && "text-primary")}>
                  {cat.name}
                </span>
                <span className={cn("text-xs font-medium", activeCategory === cat.id ? "text-primary-foreground" : "text-muted-foreground")}>
                  {cat.count}
                </span>
              </div>
              <div className="mt-4 h-1 w-8 bg-accent group-hover:bg-primary transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
