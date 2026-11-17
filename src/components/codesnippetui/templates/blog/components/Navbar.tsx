"use client"

import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { MenuIcon, XIcon, SunIcon, MoonIcon, SearchIcon } from "lucide-react"
import { cn } from "../lib/utils"
import { useTheme } from "../context/theme-provider"

export default function Navbar({
  links,
  onSearch,
}: {
  links: ReadonlyArray<{ name: string; href: string }>
  onSearch: () => void
}) {
  const { toggleTheme, resolvedTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = useCallback(
    (href: string) => {
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    },
    [],
  )

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 w-full z-50",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto w-full max-w-7xl flex h-16 shrink-0 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollTo("#home")
          }}
          className="flex items-center gap-2 text-xl font-serif font-bold tracking-tight text-foreground"
        >
          <span className="rounded bg-primary px-1.5 py-0.5 text-[10px] text-primary-foreground uppercase">CS</span>
          <span>Snippet<span className="text-primary">Blog</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex flex-wrap items-center gap-8 text-sm font-medium border-t md:border-0 border-border dark:border-white/10 max-w-[calc(100vw-12rem)] overflow-hidden">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                }}
                className="relative px-3 py-2 rounded-lg transition-colors text-foreground hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle resolved={resolvedTheme} toggleTheme={toggleTheme} />
            <button
              onClick={onSearch}
              className="rounded-lg p-2 text-foreground hover:bg-accent transition-colors shrink-0"
              aria-label="Search"
            >
              <SearchIcon size={18} strokeWidth={2} />
            </button>
          </div>
        </div>

        <button
          className="md:hidden rounded-lg p-2 text-foreground hover:bg-accent transition-colors"
          onClick={() => setIsMenuOpen((p) => !p)}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <XIcon size={20} strokeWidth={2} /> : <MenuIcon size={20} strokeWidth={2} />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col bg-background"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsMenuOpen(false)
          }}
        >
          <div className="relative z-10 flex flex-col gap-4 p-6 pt-8 pb-12 w-full min-h-screen bg-background">
            <div className="flex items-center justify-between w-full px-4">
              <span className="font-serif font-bold text-lg text-foreground">Menu</span>
              <button
                onClick={() => setIsMenuOpen((p) => !p)}
                className="rounded-lg p-2 text-foreground hover:bg-accent transition-colors"
                aria-label="Close menu"
              >
                <XIcon size={20} strokeWidth={2} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 w-full px-4 space-y-1">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    scrollTo(link.href)
                  }}
                  className="flex items-center justify-between px-4 py-3 rounded-lg text-lg font-medium transition-colors w-full text-left text-foreground hover:text-primary"
                >
                  {link.name}
                </button>
              ))}
            </nav>
            <div className="mt-auto border-t border-border pt-6 w-full px-4">
              <ThemeToggle resolved={resolvedTheme} toggleTheme={toggleTheme} />
              <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
                <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
                <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

const ThemeToggle = ({
  resolved,
  toggleTheme,
}: {
  resolved: "light" | "dark"
  toggleTheme: () => void
}) => {
  const icon = resolved === "dark" ? <SunIcon size={18} strokeWidth={2} /> : <MoonIcon size={18} strokeWidth={2} />
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-lg p-2 text-foreground hover:bg-accent transition-colors shrink-0"
    >
      {icon}
    </button>
  )
}
