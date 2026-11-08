"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ArrowUp,
  Heart,
  Sparkles,
} from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      {
        label: "Components",
        href: "/docs/components/action-search-bar",
      },
      { label: "Blocks", href: "/docs/blocks/ai-card-generation" },
      { label: "Hooks", href: "/docs/hooks//use-auto-resize-textarea" },
      { label: "AI Chat", href: "docs/components/ai-input" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Installation", href: "/docs" },
      { label: "Examples", href: "/docs/components/alert" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "https://github.com/ui-adiii" },
      { label: "Twitter / X", href: "https://x.com/ui_adiii" },
      { label: "Contact", href: "mailto:beingaditya198@gmail.com" },
    ],
  },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/ui-adiii",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.15a10.64 10.64 0 0 1 5.57 0c2.12-1.45 3.06-1.15 3.06-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.61 5.22-5.1 5.49.4.35.75 1.03.75 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/ui_adiii",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.46L5.5 22H2.36l7.25-8.29L1.8 2h6.4l4.43 6.97L18.9 2Zm-1.1 18h1.73L7.28 3.9H5.43L17.8 20Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-mallick-",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.95V9h2.98v9.5ZM6.44 7.7a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46ZM19.06 18.5h-2.98v-4.62c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.76 1.2-1.76 2.43v4.7H9.81V9h2.86v1.3h.04c.4-.75 1.37-1.53 2.82-1.53 3.01 0 3.53 1.98 3.53 4.55v5.18Z" />
      </svg>
    ),
  },
];

const Footer=()=> {
  return (
    <footer className="relative isolate overflow-hidden border-t border-zinc-800/80 bg-black text-zinc-400">

      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-80 w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 pt-16 md:px-10 lg:px-8">

        {/* Main footer */}
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">

          {/* Brand section */}
          <div className="max-w-sm">

            <Link
              href="/"
              className="group inline-flex items-center gap-2"
            >
              <span className="text-xl font-bold tracking-tight text-white">
                CodeSnippet
                <span className="bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
                  UI
                </span>
              </span>

              <ArrowUpRight className="h-4 w-4 text-purple-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              Build beautiful interfaces faster with a curated collection
              of premium React components, blocks and developer tools.
            </p>

            {/* Social icons */}
            <div className="mt-7 flex items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group rounded-xl border border-zinc-800 bg-zinc-900/40 p-2.5 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white"
                >
                  <span className="block size-4">
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>

          </div>

          {/* Navigation columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>

              <h3 className="mb-6 text-sm font-semibold text-white">
                {group.title}
              </h3>

              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}

                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-zinc-800/80 py-7 text-xs sm:flex-row">

          <p className="text-zinc-500">
            © {new Date().getFullYear()} CodeSnippetUI. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-zinc-500">
            Crafted with
            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
            for developers.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
          >
            Back to top

            <span className="rounded-md border border-zinc-800 p-1 transition-all group-hover:border-purple-500/50 group-hover:bg-purple-500/10">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;