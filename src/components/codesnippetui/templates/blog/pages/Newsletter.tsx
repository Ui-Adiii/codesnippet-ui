"use client"

import { motion, AnimatePresence } from "motion/react"
import { MailIcon, SendIcon } from "lucide-react"
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [error, setError] = useState("")

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const handleSubmit = () => {
    setError("")
    if (!email.trim()) {
      setStatus("error")
      setError("Please enter your email address.")
      return
    }
    if (!isValidEmail(email)) {
      setStatus("error")
      setError("Please enter a valid email address.")
      return
    }
    setStatus("success")
  }

  const EMAIL_REGEX_ERROR = "Enter a valid email address"
  const isIdle = status === "idle"
  const isError = status === "error"
  const isSuccess = status === "success"

  return (
    <section id="newsletter" className="py-24 border-y border-border bg-background">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Stay in the loop
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Occasional notes on new articles, design thinking, and frontend
            resources. No spam, unsubscribe anytime.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isIdle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              key="form"
              className="mt-10 flex flex-col sm:flex-row sm:items-end gap-3"
            >
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => {
                    if (!email.trim() || !isValidEmail(email)) setError(EMAIL_REGEX_ERROR)
                    else setError("")
                  }}
                  className="w-full rounded-xl bg-input pl-4 pr-10 py-3 text-sm text-foreground placeholder:text-muted-foreground border border-input focus-2 outline-none transition-colors"
                  aria-label="Email address"
                  aria-invalid={isError && !!error}
                  aria-required="true"
                />
                {isError && !!error && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-destructive pointer-events-none">
                    {error}
                  </span>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={isSuccess}
                  className="absolute right-1 top-1 rounded-lg bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors disabled:opacity-60"
                  aria-label="Subscribe"
                >
                  {isSuccess ? <SendIcon size={14} strokeWidth={2} /> : <MailIcon size={14} strokeWidth={2} />}
                </button>
              </div>
            </motion.div>
          )}
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key="success"
              className="mt-10 flex flex-col items-center gap-2"
            >
              <div className="flex items-center justify-center rounded-full bg-green/10 px-4 py-2 text-green-foreground">
                <span className="flex items-center gap-1.5 text-xs font-medium">
                  Subscribed ✓
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Thanks for joining.</p>
              <button
                onClick={() => {
                  setStatus("idle")
                  setEmail("")
                  setError("")
                }}
                className="text-xs font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Subscribe another address
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
