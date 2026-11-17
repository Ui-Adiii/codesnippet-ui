export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export type Author = {
  name: string
  role: string
  avatar: string
}

export type Category = {
  id: string
  name: string
  count: number
}

export type Article = {
  id: string
  title: string
  description: string
  date: string
  readingTime: string
  category: string
  categoryId: string
  author: Author
  image: string
  featured: boolean
}

export const authors: Author[] = [
  {
    name: "Aditya Mallick",
    role: "Product Designer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop",
  },
  {
    name: "Sarah Lin",
    role: "Frontend Engineer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop",
  },
  {
    name: "Marcus Ortiz",
    role: "Design Systems Lead",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1272e8e1ca?w=160&h=160&fit=crop",
  },
  {
    name: "Elena Rossi",
    role: "Accessibility Specialist",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop",
  },
]

export const categories: Category[] = [
  { id: "all", name: "All", count: 0 },
  { id: "design", name: "Design", count: 4 },
  { id: "frontend", name: "Frontend", count: 3 },
  { id: "accessibility", name: "Accessibility", count: 2 },
  { id: "performance", name: "Performance", count: 2 },
  { id: "react", name: "React", count: 2 },
  { id: "typography", name: "Typography", count: 1 },
  { id: "tools", name: "Tools", count: 1 },
]

export const articles: Article[] = [
  {
    id: "editorial-typography-web",
    title: "Editorial Typography for the Web",
    description:
      "How to set type that reads like a magazine — scale, rhythm, and the details that separate a good layout from a great one.",
    date: "2024-11-10",
    readingTime: "9 min read",
    category: "Typography",
    categoryId: "typography",
    author: authors[0],
    image: "https://images.unsplash.com/photo-1513528692258-626869cb9bc8?w=800&q=80",
    featured: true,
  },
  {
    id: "accessible-color-systems",
    title: "Building Accessible Color Systems",
    description:
      "A practical guide to designing color palettes that meet WCAG contrast requirements without sacrificing visual identity.",
    date: "2024-10-22",
    readingTime: "7 min read",
    category: "Accessibility",
    categoryId: "accessibility",
    author: authors[3],
    image: "https://images.unsplash.com/photo-1546187615-d50927e9f0e1?w=800&q=80",
    featured: true,
  },
  {
    id: "nextjs-app-router-patterns",
    title: "Next.js App Router Patterns That Scale",
    description:
      "Server Components, caching, and data fetching patterns we use to keep large Next.js applications maintainable.",
    date: "2024-09-15",
    readingTime: "11 min read",
    category: "Frontend",
    categoryId: "frontend",
    author: authors[1],
    image: "https://images.unsplash.com/photo-1618477773518-664560075064?w=800&q=80",
    featured: true,
  },
  {
    id: "design-tokens-in-practice",
    title: "Design Tokens in Practice",
    description:
      "Moving from static values to a token-based design system that works across light, dark, and high-contrast modes.",
    date: "2024-08-18",
    readingTime: "8 min read",
    category: "Design",
    categoryId: "design",
    author: authors[2],
    image: "https://images.unsplash.com/photo-1586710686061-326d8f531bf6?w=800&q=80",
    featured: false,
  },
  {
    id: "reduced-motion-animation",
    title: "Respecting Reduced Motion in UI Animation",
    description:
      "Why honoring prefers-reduced-motion isn't optional, and how to animate responsibly with Framer Motion.",
    date: "2024-07-30",
    readingTime: "6 min read",
    category: "Accessibility",
    categoryId: "accessibility",
    author: authors[3],
    image: "https://images.unsplash.com/photo-1550745166-6dc37e5f997f?w=800&q=80",
    featured: false,
  },
  {
    id: "core-web-vitals-real-world",
    title: "Core Web Vitals in the Real World",
    description:
      "Beyond the lab: measuring and improving LCP, INP, and CLS on production traffic with real-user data.",
    date: "2024-07-05",
    readingTime: "10 min read",
    category: "Performance",
    categoryId: "performance",
    author: authors[1],
    image: "https://images.unsplash.com/photo-1551288049-b9e38e788743?w=800&q=80",
    featured: false,
  },
  {
    id: "react-server-components-guide",
    title: "A Pragmatic Guide to React Server Components",
    description:
      "When to use Server Components, when to stay on the client, and how to draw the line without overcomplicating your app.",
    date: "2024-06-12",
    readingTime: "12 min read",
    category: "React",
    categoryId: "react",
    author: authors[1],
    image: "https://images.unsplash.com/photo-1633356122544-f134284a76e5?w=800&q=80",
    featured: false,
  },
  {
    id: "modern-css-layout",
    title: "Modern CSS Layout Without the Hacks",
    description:
      "Grid, subgrid, and container queries make complex layouts possible without a single media-query hack.",
    date: "2024-05-20",
    readingTime: "7 min read",
    category: "Frontend",
    categoryId: "frontend",
    author: authors[0],
    image: "https://images.unsplash.com/photo-1507632799778-f07e99807c11?w=800&q=80",
    featured: false,
  },
  {
    id: "writing-for-interfaces",
    title: "Writing for Interfaces",
    description:
      "Microcopy, tone, and voice — how the words inside your product shape the experience as much as the pixels.",
    date: "2024-04-28",
    readingTime: "5 min read",
    category: "Design",
    categoryId: "design",
    author: authors[0],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    featured: false,
  },
  {
    id: "component-library-tooling",
    title: "Tooling a Component Library",
    description:
      "Storybook, Build, and the CI checks that keep a UI component library shipping with confidence.",
    date: "2024-03-14",
    readingTime: "9 min read",
    category: "Tools",
    categoryId: "tools",
    author: authors[2],
    image: "https://images.unsplash.com/photo-1555086757-c26fd5c7009b?w=800&q=80",
    featured: false,
  },
  {
    id: "performance-budgets",
    title: "Setting Performance Budgets That Stick",
    description:
      "How to turn performance from an afterthought into a design constraint your team actually respects.",
    date: "2024-02-10",
    readingTime: "8 min read",
    category: "Performance",
    categoryId: "performance",
    author: authors[1],
    image: "https://images.unsplash.com/photo-1544367567-0f21b0134e33?w=800&q=80",
    featured: false,
  },
  {
    id: "dark-mode-that-doesnt-hurt",
    title: "Dark Mode That Doesn't Hurt",
    description:
      "Beyond inverting colors: building a dark theme that feels intentional in every lighting condition.",
    date: "2024-01-18",
    readingTime: "6 min read",
    category: "Design",
    categoryId: "design",
    author: authors[2],
    image: "https://images.unsplash.com/photo-1556742044-31c5d7a2797e?w=800&q=80",
    featured: false,
  },
] as const
