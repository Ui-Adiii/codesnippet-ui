# Portfolio Template

A React + TypeScript portfolio template built with Next.js, Tailwind CSS, and Framer Motion.

## Folder Structure

```
portfolio/
├── README.md
├── Main.tsx
├── components/
│   ├── Footer.tsx
│   └── Navbar.tsx
├── context/
│   └── theme-provider.tsx
├── data/
│   ├── README.md
│   └── data.ts
├── lib/
│   └── motion.ts
└── pages/
    ├── About.tsx
    ├── Blog.tsx
    ├── Contact.tsx
    ├── Education.tsx
    ├── Experience.tsx
    ├── Hero.tsx
    ├── Projects.tsx
    └── Skills.tsx
```

## Pages

| File | Purpose |
|------|---------|
| `Hero.tsx` | Landing hero section with role rotation |
| `About.tsx` | About me / bio section |
| `Skills.tsx` | Skills and proficiency display |
| `Experience.tsx` | Work history timeline |
| `Education.tsx` | Education background |
| `Projects.tsx` | Project showcase with details |
| `Blog.tsx` | Blog post listings |
| `Contact.tsx` | Contact form / information |

## Components

| File | Purpose |
|------|---------|
| `Navbar.tsx` | Navigation bar with links |
| `Footer.tsx` | Footer with social links |

## Context

| File | Purpose |
|------|---------|
| `theme-provider.tsx` | Theme (light/dark mode) context provider |

## Data

All portfolio content is centralized in `data/data.ts`. See [`data/README.md`](data/README.md) for detailed documentation of the exported data structures.

### Key Exports

- `navLinks` - Navigation menu items
- `socials` - Social media profile links
- `heroRoles` - Rotating role titles for the hero section
- `skills` - Categorized skills with proficiency levels
- `experience` - Work experience entries
- `education` - Education history
- `projects` - Project portfolio items
- `blogPosts` - Blog post metadata

## Libraries

| File | Purpose |
|------|---------|
| `motion.ts` | Framer Motion animation variants and configurations |

## Main Entry

`Main.tsx` - The root component that assembles all pages and sections into the full portfolio layout.

## Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Usage

1. Customize your data in `data/data.ts`
2. Update pages and components as needed
3. Deploy to Vercel, Netlify, or any static hosting provider
