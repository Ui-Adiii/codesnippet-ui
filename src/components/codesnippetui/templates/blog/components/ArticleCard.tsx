"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { ClockIcon, ArrowLeftRightIcon } from "lucide-react"
import { cn } from "../lib/utils"
import { formatDate, type Article } from "../data/data"

export const ArticleCard = ({
  article,
  variant = "default",
  large = false,
}: {
  article: Article
  variant?: "default" | "featured"
  large?: boolean
}) => {
  const Author = article.author
  const isFeatured = variant === "featured"
  return (
    <motion.div
      whileHover={{ y: isFeatured ? 0 : -4 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm ring-1 ring-foreground/5 transition-colors hover:border-primary/50 flex flex-col",
        isFeatured
          ? large
            ? "lg:col-span-12 min-h-[560px]"
            : "lg:col-span-6 min-h-[420px]"
          : "min-h-[340px]",
      )}
    >
      <div
        className={cn(
          "relative rounded-2xl-btm overflow-hidden",
          isFeatured && large ? "h-64 md:h-80 lg:h-[360px]" : "h-48 md:h-60 lg:h-72",
        )}
      >
        <img
          src={article.image}
          alt=""
          loading={isFeatured && large ? "eager" : "lazy"}
          width={isFeatured && large ? 900 : 800}
          height={isFeatured && large ? 520 : 400}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 bg-muted"
          decoding="async"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
          {article.category && (
            <span className="inline-block rounded-lg bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground uppercase tracking-tighter">
              {article.category}
            </span>
          )}
        </div>
      </div>

      <div className={cn("p-4 md:p-6 flex-1 flex flex-col", isFeatured && large ? "pt-8" : isFeatured ? "pt-6" : "")}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ClockIcon className="size-3.5" aria-hidden="true" />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span className="mx-1">·</span>
            <span>{article.readingTime}</span>
          </div>
        </div>

        <h3 className={cn(
          "font-serif font-bold text-foreground line-clamp-2",
          isFeatured && large ? "text-3xl md:text-4xl tracking-tight mb-3" :
          isFeatured ? "text-2xl md:text-3xl tracking-tight mb-3" :
          "text-lg font-heading mb-2",
        )}
        >
          {article.title}
        </h3>

        <p className={cn("text-sm text-muted-foreground line-clamp-2 md:line-clamp-3 leading-relaxed", isFeatured ? "text-base" : "")}>
          {article.description}
        </p>

        <div className="mt-4 md:mt-6 flex items-center gap-3 pt-4 border-t border-border">
          <img
            src={Author.avatar}
            alt=""
            className="size-8 rounded-full object-cover border border-border"
            aria-hidden="true"
          />
          <div className="flex flex-col leading-none">
            <span className="text-xs font-semibold text-foreground">{Author.name}</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{Author.role}</span>
          </div>
          <Link
            href="#"
            className="ml-auto text-xs font-medium text-primary hover:underline underline-offset-4"
            onClick={(e) => e.preventDefault()}
          >
            Read article <ArrowLeftRightIcon className="size-3.5 ml-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
