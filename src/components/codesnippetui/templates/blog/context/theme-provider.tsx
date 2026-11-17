"use client"

import { createContext, useContext, useCallback, useEffect, useState } from "react"

type Theme = "light" | "dark" | "system"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "light" | "dark"
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: {
  children: React.ReactNode
  defaultTheme?: Theme
}) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme
    const stored = localStorage.getItem("blog-theme") as Theme | null
    return stored ?? defaultTheme
  })
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const root = window.document.documentElement
    const resolve = () => {
      const effective =
        theme === "system"
          ? window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
          : theme
      root.classList.toggle("dark", effective === "dark")
      setResolvedTheme(effective)
    }
    resolve()
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    mq.addEventListener("change", resolve)
    return () => mq.removeEventListener("change", resolve)
  }, [theme])

  const setTheme = useCallback(
    (next: Theme) => {
      setThemeState(next)
      if (next !== "system") localStorage.setItem("blog-theme", next)
      else localStorage.removeItem("blog-theme")
    },
    []
  )

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "light" ? "dark" : prev === "dark" ? "system" : "light"
      if (next !== "system") localStorage.setItem("blog-theme", next)
      else localStorage.removeItem("blog-theme")
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider")
  return ctx
}
