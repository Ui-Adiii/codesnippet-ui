"use client"

import { useCallback, useMemo, useState } from "react"
import { articles, categories } from "./data/data"
import { ThemeProvider } from "./context/theme-provider"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./pages/Hero"
import Featured from "./pages/Featured"
import Latest from "./pages/Latest"
import Categories from "./pages/Categories"
import About from "./pages/About"
import Newsletter from "./pages/Newsletter"

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Articles", href: "#latest" },
  { name: "Categories", href: "#categories" },
  { name: "About", href: "#about" },
] as const

export default function BlogMain() {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest")

  const filtered = useMemo(() => {
    const result = articles.filter((a) => {
      const matchCategory = activeCategory === "all" || a.categoryId === activeCategory
      const matchQuery =
        !query ||
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.description.toLowerCase().includes(query.toLowerCase()) ||
        a.category.toLowerCase().includes(query.toLowerCase())
      return matchCategory && matchQuery
    })
    result.sort((a, b) => {
      const aa = new Date(a.date).getTime()
      const bb = new Date(b.date).getTime()
      return sortOrder === "newest" ? bb - aa : aa - bb
    })
    return result
  }, [query, activeCategory, sortOrder])

  const featuredArticles = articles.filter((a) => a.featured)

  const categoryCounts = useMemo(() => {
    return categories.slice(1).map((c) => ({
      ...c,
      count: articles.filter((a) => a.categoryId === c.id).length,
    }))
  }, [])

  const resetFiltersAndScrollToLatest = useCallback(() => {
    setQuery("")
    setActiveCategory("all")
    scrollTo("latest")
  }, [])

  return (
    <ThemeProvider defaultTheme="system">
      <main className="flex min-h-screen bg-transparent text-foreground flex-col overflow-x-hidden">
        <Navbar
          links={NAV_LINKS}
          onSearch={() => scrollTo("latest")}
        />
        <Hero query={query} setQuery={setQuery} onSearch={() => scrollTo("latest")} />
        <Featured featuredArticles={featuredArticles} onViewAll={resetFiltersAndScrollToLatest} />
        <Latest
          filtered={filtered}
          categoryCounts={categoryCounts}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          onClearFilters={resetFiltersAndScrollToLatest}
        />
        <Categories
          categoryCounts={categoryCounts}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          scrollToLatest={() => scrollTo("latest")}
        />
        <About />
        <Newsletter />
        <Footer links={NAV_LINKS} />
      </main>
    </ThemeProvider>
  )
}
