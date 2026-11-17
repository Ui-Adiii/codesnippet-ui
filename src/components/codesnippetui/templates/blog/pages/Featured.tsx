"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArticleCard } from "../components/ArticleCard"
import { type Article } from "../data/data"
import { fadeInUp, item } from "../lib/motion"

export default function Featured({
  featuredArticles,
  onViewAll,
}: {
  featuredArticles: Article[]
  onViewAll: () => void
}) {
  return (
    <section id="featured" className="py-24 border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div variants={fadeInUp} className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <div className="w-1 h-8 bg-primary rounded-full" />
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground">Featured</h2>
          </div>
          <Link
            href="#latest"
            onClick={(e) => {
              e.preventDefault()
              onViewAll()
            }}
            className="text-xs font-semibold text-primary uppercase tracking-tighter hover:underline underline-offset-4"
          >
            View all articles
          </Link>
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-12">
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              variants={item}
              className={index === 0 ? "lg:col-span-12" : "lg:col-span-6"}
            >
              <ArticleCard article={article} variant="featured" large={index === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
