"use client"

import { useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "../lib/utils"
import { ArticleCard } from "../components/ArticleCard"
import { type Article, type Category } from "../data/data"
import { fadeInUp, item, staggerChildren } from "../lib/motion"

type LatestProps = {
  filtered: Article[]
  categoryCounts: Category[]
  activeCategory: string
  setActiveCategory: (id: string) => void
  sortOrder: "newest" | "oldest"
  setSortOrder: (order: "newest" | "oldest") => void
  onClearFilters: () => void
}

export default function Latest({
  filtered,
  categoryCounts,
  activeCategory,
  setActiveCategory,
  sortOrder,
  setSortOrder,
  onClearFilters,
}: LatestProps) {
  const scrollToLatest = useCallback(() => {
    const el = document.getElementById("latest")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <section id="latest" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div variants={fadeInUp} className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground">Latest articles</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSortOrder("newest")}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap",
                  sortOrder === "newest"
                    ? "bg-accent text-accent-foreground"
                    : "bg-input border border-input text-foreground hover:bg-accent",
                )}
              >
                Newest
              </button>
              <button
                onClick={() => setSortOrder("oldest")}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap",
                  sortOrder === "oldest"
                    ? "bg-accent text-accent-foreground"
                    : "bg-input border border-input text-foreground hover:bg-accent",
                )}
              >
                Oldest
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {categoryCounts.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap border",
                  activeCategory === cat.id
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {cat.name} <span className="opacity-60">{cat.count}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          <motion.div
            variants={staggerChildren}
            key="article-grid"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.length === 0 ? (
              <motion.div variants={item} className="col-span-3 py-20 text-center">
                <p className="text-muted-foreground">No articles match your search or filter.</p>
                <button
                  onClick={onClearFilters}
                  className="mt-4 text-xs font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Clear filters
                </button>
              </motion.div>
            ) : (
              filtered.map((article) => (
                <motion.div key={article.id} variants={item} className="min-h-85">
                  <ArticleCard article={article} variant="default" />
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
