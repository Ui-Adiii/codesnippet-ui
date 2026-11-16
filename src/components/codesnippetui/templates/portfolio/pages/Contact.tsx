"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { fadeInUp, item, staggerChildren } from "../lib/motion"
import { socials } from "../data/data"
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const SOCIAL_LINKS = socials

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const validate = () => {
    const next: Record<string, string> = {}
    if (!formData.name.trim()) next.name = "Name is required"
    if (!formData.email.trim()) next.email = "Email is required"
    else if (!isValidEmail(formData.email)) next.email = "Enter a valid email"
    if (!formData.message.trim()) next.message = "Message is required"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus("submitting")
    // Simulate form submission
    setTimeout(() => {
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    }, 1200)
  }

  const fieldError = (name: string) => errors[name]

  return (
    <section id="contact" className="relative py-24 bg-background">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
        <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-heading text-foreground">Get in touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? Send me a message.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div variants={staggerChildren} className="space-y-6">
            <motion.div variants={item} className="flex items-start gap-4">
              <div className="flex shrink-0 items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
                <MailIcon className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-lg text-foreground">Email</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  <a href="mailto:hello@example.com" className="text-primary hover:underline">
                    hello@example.com
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-start gap-4">
              <div className="flex shrink-0 items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
                <PhoneIcon className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-lg text-foreground">Phone</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  <a href="tel:+15550123456" className="text-primary hover:underline">
                    +1 (555) 012-3456
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-start gap-4">
              <div className="flex shrink-0 items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
                <MapPinIcon className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-lg text-foreground">Location</h3>
                <p className="mt-1 text-sm text-muted-foreground">Toronto, ON · Remote-first</p>
              </div>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-foreground hover:bg-accent transition-colors shrink-0"
                >
                  {s.name[0]}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            className="rounded-xl border border-border bg-card p-8 shadow-sm ring-1 ring-foreground/5"
          >
            {status === "success" ? (
              <motion.div variants={fadeInUp} className="text-center py-8">
                <h3 className="font-bold font-heading text-lg text-foreground">Thanks!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your message has been sent. I’ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      aria-invalid={!!fieldError("name")}
                      aria-describedby={fieldError("name") ? "name-error" : undefined}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={cn(
                        "mt-1 h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
                        fieldError("name") ? "border-destructive" : ""
                      )}
                    />
                    {fieldError("name") && (
                      <p id="name-error" className="mt-1 text-xs text-destructive" role="alert">
                        {fieldError("name")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-invalid={!!fieldError("email")}
                      aria-describedby={fieldError("email") ? "email-error" : undefined}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={cn(
                        "mt-1 h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
                        fieldError("email") ? "border-destructive" : ""
                      )}
                    />
                    {fieldError("email") && (
                      <p id="email-error" className="mt-1 text-xs text-destructive" role="alert">
                        {fieldError("email")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      aria-invalid={!!fieldError("message")}
                      aria-describedby={fieldError("message") ? "message-error" : undefined}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={cn(
                        "mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
                        fieldError("message") ? "border-destructive" : ""
                      )}
                    />
                    {fieldError("message") && (
                      <p id="message-error" className="mt-1 text-xs text-destructive" role="alert">
                        {fieldError("message")}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 disabled:opacity-60 disabled:pointer-events-none transition-colors"
                  >
                    {status === "submitting" ? "Sending…" : "Send message"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
