export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
] as const

export const socials = [
  { name: "GitHub", href: "https://github.com", icon: "Github" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { name: "X", href: "https://x.com", icon: "X" },
] as const

export const heroRoles = ["Software Engineer", "Frontend Developer", "React Specialist", "UI Engineer"]

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "TypeScript", level: "advanced" },
      { name: "JavaScript", level: "advanced" },
      { name: "Python", level: "intermediate" },
      { name: "Go", level: "familiar" },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React", level: "advanced" },
      { name: "Next.js", level: "advanced" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "Framer Motion", level: "intermediate" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: "advanced" },
      { name: "PostgreSQL", level: "intermediate" },
      { name: "Redis", level: "intermediate" },
      { name: "GraphQL", level: "familiar" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", level: "advanced" },
      { name: "MongoDB", level: "intermediate" },
      { name: "SQLite", level: "intermediate" },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", level: "advanced" },
      { name: "Docker", level: "intermediate" },
      { name: "GitHub Actions", level: "intermediate" },
      { name: "Vercel", level: "advanced" },
    ],
  },
  {
    category: "AI / Machine Learning",
    items: [
      { name: "LLM Integration", level: "intermediate" },
      { name: "RAG", level: "familiar" },
      { name: "Vector Databases", level: "familiar" },
    ],
  },
] as const

export const experience = [
  {
    company: "Vercel",
    role: "Frontend Engineer",
    duration: "2022 - Present",
    location: "Remote",
    description:
      "Building and maintaining the Next.js documentation platform and developer tooling used by hundreds of thousands of developers.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "MDX"],
    achievements: [
      "Reduced documentation build times by 40% through incremental static regeneration",
      "Shipped a component library used across 5+ internal products",
      "Led the migration from Create React App to Next.js App Router",
    ],
  },
  {
    company: "Stripe",
    role: "Software Engineer",
    duration: "2020 - 2022",
    location: "Remote",
    description: "Worked on the Dashboard frontend team, building payment management tools for merchants.",
    technologies: ["React", "TypeScript", "Ruby on Rails", "GraphQL"],
    achievements: [
      "Built the recurring billing editor used by 10k+ businesses",
      "Improved checkout conversion by 12% through frontend performance work",
      "Mentored 3 junior engineers on the team",
    ],
  },
] as const

export const education = [
  {
    institution: "University of Waterloo",
    degree: "Bachelor of Computer Science",
    duration: "2016 - 2020",
    location: "Waterloo, ON",
    honors: "Dean's Honours List",
  },
] as const

export const projects = [
  {
    id: "analytics-dashboard",
    name: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard for monitoring application performance and user behavior with custom visualizations and alerts.",
    category: "Dashboard",
    featured: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "Recharts",
      "PostgreSQL",
      "Tailwind",
    ],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
    details: {
      overview:
        "A comprehensive analytics platform that aggregates application metrics and user events into a single, real-time view. Built to help engineering teams spot regressions quickly and make data-driven product decisions.",
      architecture:
        "Next.js App Router frontend with server components for initial data fetching, Recharts for visualizations, and PostgreSQL for time-series metric storage. Polling plus server-sent events keep the dashboard live without page reloads.",
      features: [
        "Real-time metric charts with WebSocket updates",
        "Custom date range and cohort filtering",
        "Exportable CSV reports",
        "Role-based access control for team members",
        "Alert rules with email and Slack notifications",
      ],
      challenges: [
        "Handling high-frequency metric ingestion without blocking the UI thread",
        "Keeping chart state consistent across route changes",
        "Designing an accessible color palette for data visualization",
      ],
    },
  },
  {
    id: "code-snippet-lab",
    name: "Code Snippet Lab",
    description:
      "A developer tool for saving, organizing, and sharing code snippets with syntax highlighting and version history.",
    category: "Tool",
    featured: false,
    technologies: ["Next.js", "TypeScript", "shiki", "shadcn/ui", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    details: {
      overview:
        "Code Snippet Lab lets developers save reusable code snippets, organize them by language and tags, and share public snippets via short URLs. Includes full-text search and syntax highlighting powered by Shiki.",
      architecture:
        "Next.js App Router with server components and server actions for mutations. Shiki provides syntax highlighting at build time. PostgreSQL stores snippets and versions, with full-text search via PostgreSQL's built-in capabilities.",
      features: [
        "Syntax highlighting for 100+ languages",
        "Tag-based organization and full-text search",
        "Version history for every snippet edit",
        "Public share links with embeddable snippets",
        "Dark mode aware editor theme",
      ],
      challenges: [
        "Keeping the editor performant with large snippets",
        "Preventing XSS when rendering user-submitted code",
        "Supporting embeddable snippets without layout shift",
      ],
    },
  },
  {
    id: "ecommerce-storefront",
    name: "Ecommerce Storefront",
    description:
      "A performant ecommerce storefront with product catalog, cart, and checkout flow optimized for Core Web Vitals.",
    category: "Ecommerce",
    featured: false,
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind", "Vercel"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
    details: {
      overview:
        "An ecommerce storefront built for speed and conversion. Features a product catalog with filtering, a persistent cart, and a Stripe-powered checkout flow that keeps users on-site.",
      architecture:
        "Next.js App Router with server components for product pages (fully static, cached at the edge). Stripe Elements handle payments securely. Cart state is synced to localStorage and restored on return visits.",
      features: [
        "Product catalog with filtering and sorting",
        "Persistent shopping cart",
        "Stripe Checkout integration",
        "Order history and receipts",
        "Mobile-optimized checkout flow",
      ],
      challenges: [
        "Minimizing LCP on product image-heavy pages",
        "Keeping cart state in sync across tabs",
        "Secure payment handling without touching card data",
      ],
    },
  },
  {
    id: "task-manager",
    name: "Task Manager",
    description:
      "Collaborative task management app with real-time updates, drag-and-drop boards, and team workspaces.",
    category: "SaaS",
    featured: false,
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "WebSockets",
      "Tailwind",
    ],
    github: "https://github.com",
    live: "https://example.com",

    details: {
      overview:
        "A collaborative task manager inspired by Kanban boards. Teams create workspaces, boards, and cards, with real-time updates so everyone sees changes instantly.",
      architecture:
        "Next.js App Router with server actions for board and card mutations. PostgreSQL stores workspace/board/card data. WebSockets broadcast changes to connected clients for real-time collaboration.",
      features: [
        "Drag-and-drop card reordering across boards",
        "Real-time presence and cursors",
        "Team workspaces with granular permissions",
        "Comments and @mentions on cards",
        "Activity feed per board",
      ],
      challenges: [
        "Conflict resolution when two users edit the same card",
        "Preserving scroll position during live updates",
        "Scaling WebSocket connections across serverless functions",
      ],
    },
  },
  {
    id: "blog-platform",
    name: "Minimal Blog Platform",
    description:
      "A content-focused blog platform with MDX posts, reading time estimates, tag filtering, and full-text search.",
    category: "Content",
    featured: false,
    technologies: ["Next.js", "TypeScript", "MDX", "Tailwind", "Vercel"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",

    details: {
      overview:
        "A minimal blog platform designed for readability. Posts are authored in MDX, support embedded components, and are automatically tagged with reading time estimates.",
      architecture:
        "Next.js App Router with MDX content layer. Posts are statically generated at build time and cached at the edge. Full-text search runs in the browser via a prebuilt search index.",
      features: [
        "MDX authoring with embedded components",
        "Reading time and tag filters",
        "Full-text search in the browser",
        "RSS feed generation",
        "Syntax-highlighted code blocks",
      ],
      challenges: [
        "Keeping build times fast as post count grows",
        "Rendering user-authored MDX safely",
        "Accessible code block themes in both dark and light modes",
      ],
    },
  },
  {
    id: "url-shortener",
    name: "URL Shortener",
    description:
      "A custom URL shortener with click analytics, custom slugs, and QR code generation for every link.",
    category: "Tool",
    featured: false,
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
    details: {
      overview:
        "A URL shortener that lets users create custom short links, track click analytics over time, and generate QR codes for offline sharing.",
      architecture:
        "Next.js App Router with server actions for link creation. PostgreSQL stores links and click events; Redis caches frequently-accessed redirects for sub-millisecond lookups.",
      features: [
        "Custom slugs and vanity URLs",
        "Click analytics with referrer breakdown",
        "QR code generation per link",
        "Link expiration and password protection",
        "API for programmatic link creation",
      ],
      challenges: [
        "Handling redirect traffic without warming cold functions",
        "Preventing abuse and spam link creation",
        "Keeping analytics accurate under high concurrency",
      ],
    },
  },
] as const;

export const blogPosts = [
  {
    id: "why-nextjs-app-router",
    title: "Why I Chose the Next.js App Router",
    description:
      "How the App Router changed the way I think about data fetching, caching, and server components in React applications.",
    date: "2024-01-15",
    readingTime: "8 min read",
    tags: ["Next.js", "React", "Performance"],
    // url: "/blog/why-nextjs-app-router",
  },
  {
    id: "accessible-color-systems",
    title: "Building Accessible Color Systems",
    description:
      "A practical guide to designing color palettes that meet WCAG contrast requirements without sacrificing visual identity.",
    date: "2023-11-22",
    readingTime: "6 min read",
    tags: ["Accessibility", "Design", "CSS"],
    // url: "/blog/accessible-color-systems",
  },
  {
    id: "debugging-nextjs-performance",
    title: "Debugging Next.js Performance Issues",
    description:
      "Using Core Web Vitals and the Next.js speed inspector to find and fix real-world performance regressions.",
    date: "2023-09-10",
    readingTime: "10 min read",
    tags: ["Next.js", "Performance", "Debugging"],
    url: "/blog/debugging-nextjs-performance",
  },
] as const
