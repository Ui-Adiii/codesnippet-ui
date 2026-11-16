"use client"

import Link from "next/link"
import { motion } from "motion/react"

import { fadeInUp, item, staggerChildren } from "../lib/motion"
import { blogPosts } from "../lib/data"
import { BookOpenIcon, ClockIcon, TagIcon } from "lucide-react"

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold font-heading text-foreground">
            Insights
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Things I’ve learned and written about.
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          className="grid gap-8 lg:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={item}
              className="rounded-xl border border-border bg-card p-6 shadow-sm ring-1 ring-foreground/5 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                <BookOpenIcon className="size-4" aria-hidden="true" />
                <span>{post.readingTime}</span>
              </div>
              <h3 className="font-bold font-heading text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {post.description}
              </p>
              <div className="mt-4 flex items-center justify-between gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <ClockIcon className="size-3.5" aria-hidden="true" />
                  <time dateTime={new Date(post.date).toISOString()}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1">
                  <TagIcon className="size-3.5" aria-hidden="true" />
                  {post.tags[0]}
                </div>
              </div>
              {post?.url && (
                <Link
                  href={post?.url}
                  className="mt-4 inline-flex items-center gap-1 rounded-lg border border-input bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-accent transition-colors"
                >
                  Read article
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
