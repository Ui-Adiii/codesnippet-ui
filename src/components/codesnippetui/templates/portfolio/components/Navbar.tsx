"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "../context/theme-provider"
import { navLinks, socials } from "../data/data"

const NAV_LINKS = navLinks
const SOCIAL_LINKS = socials

export default function Navbar() {
  const { toggleTheme, resolvedTheme } = useTheme()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("home")

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    NAV_LINKS.forEach((link) => {
      const id = link.href.slice(1)
      sectionRefs.current[id] = document.getElementById(id)
    })
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10)
      let current = "home"
      for (const link of NAV_LINKS) {
        const id = link.href.slice(1)
        const el = sectionRefs.current[id]
        if (el && el.getBoundingClientRect().top <= 80) {
          current = id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = useCallback(
    (href: string) => {
      setIsMenuOpen(false)
      if (href.startsWith("#")) {
        const id = href.slice(1)
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: "smooth" })
        return
      }
      router.push(href)
    },
    [router]
  )

  const isActive = useCallback(
    (href: string) => {
      if (href === "#home") return activeSection === "home"
      return activeSection === href.slice(1)
    },
    [activeSection]
  )

  const icon = resolvedTheme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />

  return (
    <nav
      className={cn(
        "fixed left-0 w-full top-0 z-99999",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : ""
      )}
    >
      <div className="mx-auto w-full max-w-7xl flex h-16 shrink-0 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="flex items-center gap-2 text-xl font-bold tracking-tight"
          onClick={(e) => {
            e.preventDefault()
            scrollTo("#home")
          }}
        >
          <span className="rounded bg-primary px-1.5 py-0.5 text-primary-foreground">AD</span>
          <span className="font-heading">Aditya.</span>
        </Link>

        <div className="flex items-center gap-6">
          <div
            className={cn(
              "hidden md:flex flex-wrap items-center gap-8 text-sm font-medium",
              "border-t md:border-0 border-border dark:border-white/5 max-w-[calc(100vw-10rem)] overflow-hidden"
            )}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative flex items-center gap-1 px-4 py-2 rounded-lg transition-colors whitespace-nowrap",
                  isActive(link.href)
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                )}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-foreground hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {icon}
            </button>
            <button
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-accent transition-colors"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Open mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-60 flex flex-col bg-background"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsMenuOpen(false)
          }}
        >
          <div className="relative z-10 flex flex-col gap-4 p-6 pt-8 pb-12 w-full min-h-screen bg-background">
            <div className="flex items-center justify-between w-full px-4">
              <span className="font-bold font-heading text-lg text-foreground">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-foreground hover:bg-accent transition-colors"
                aria-label="Close menu"
              >
                <XIcon size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 w-full px-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(link.href)
                  }}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-lg text-lg font-medium transition-colors w-full text-left",
                    isActive(link.href)
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {link.name}
                </button>
              ))}
            </nav>
            <div className="mt-auto border-t border-border pt-6 w-full px-4">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-lg text-foreground hover:text-primary transition-colors w-full text-left"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? "Light mode" : "Dark mode"} {icon}
              </button>
              <div className="mt-6 flex flex-wrap gap-4 justify-center w-full px-4">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
