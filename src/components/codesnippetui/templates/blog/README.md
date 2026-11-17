# Blog Template

Premium single-page blog template modeled after the portfolio template structure. Next.js App Router, React, TypeScript, Tailwind CSS, Motion (Framer Motion), Lucide React.

## Structure

```
components/templates/blog/
├── Main.tsx                  # Shell: ThemeProvider + <main>, wires all sections
├── data/data.ts              # Articles, categories, authors data
├── lib/motion.ts             # Shared Framer Motion variants
├── context/theme-provider.tsx# Light/dark/system theme context
├── components/               # Navbar, Footer, ArticleCard
└── pages/                    # Hero, Featured, Latest, Categories, About, Newsletter
```

## Pages (sections)

Each section lives in `pages/` as its own component and is composed by `Main.tsx`:

- **Hero** — editorial journal badge, headline, intro paragraph, wrapped search card, About/Archive/RSS links
- **Featured** — featured articles grid (first full-width, rest half-width)
- **Latest** — article list with newest/oldest sort, category filter chips, empty state
- **Categories** — clickable category cards with article counts
- **About** — journal description
- **Newsletter** — email input with validation, success/error states

## Usage

Mount `Main` as the page component:

```tsx
import BlogMain from "@/components/templates/blog/Main"

export default function Home() {
  return <BlogMain />
}
```

`app/page.tsx` already mounts `BlogMain` as the home route.

## Theme

`ThemeProvider` persists to `localStorage` under the key `blog-theme` and supports `light`, `dark`, and `system` (respects `prefers-color-scheme`). Toggle via `useTheme()` hook inside any child of `ThemeProvider`.

## Data

Edit `data/data.ts` to add, remove, or customize articles, categories, and authors. Each article has `id`, `title`, `description`, `date`, `readingTime`, `category`, `categoryId`, `author`, `image`, and `featured`.

## Tech stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion (`motion`)
- Lucide React icons
