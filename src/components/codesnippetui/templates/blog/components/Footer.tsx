export default function Footer({
  links,
}: {
  links: ReadonlyArray<{ name: string; href: string }>
}) {
  const year = new Date().getFullYear()

  const scrollTo = (href: string) => {
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="rounded bg-primary px-1.5 py-0.5 text-[10px] text-primary-foreground uppercase">CS</span>
            <span className="font-serif font-bold text-lg text-foreground">
              Snippet<span className="text-primary">Blog</span>
            </span>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                }}
                className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">
            {year} Snippet Blog. Built with Next.js, Tailwind, and Motion.
          </p>
        </div>
      </div>
    </footer>
  )
}
