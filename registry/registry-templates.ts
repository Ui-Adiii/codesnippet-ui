import type { Registry } from "./schema";

export const template: Registry = [
  //portfolio - template
  {
    name: "portfolio",
    type: "registry:block",
    dependencies: ["lucide-react", "motion"],
    registryDependencies: [],
    files: [
      {
        path: "components/codesnippetui/templates/portfolio/lib/data.ts",
        type: "registry:lib",
      },
      {
        path: "components/codesnippetui/templates/portfolio/lib/motion.ts",
        type: "registry:lib",
      },
      {
        path: "components/codesnippetui/templates/portfolio/lib/utils.ts",
        type: "registry:lib",
      },
      {
        path: "components/codesnippetui/templates/portfolio/Main.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/portfolio/components/Footer.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/portfolio/components/Navbar.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/portfolio/context/theme-provider.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/portfolio/pages/About.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/portfolio/pages/Blog.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/portfolio/pages/Contact.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/portfolio/pages/Education.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/portfolio/pages/Experience.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/portfolio/pages/Hero.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/portfolio/pages/Projects.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/portfolio/pages/Skills.tsx",
        type: "registry:component",
      },
    ],
  },
  // blog - template
  {
    name: "blog",
    type: "registry:block",
    dependencies: ["lucide-react", "motion"],
    registryDependencies: [],
    files: [
      {
        path: "components/codesnippetui/templates/blog/lib/data.ts",
        type: "registry:lib",
      },
      {
        path: "components/codesnippetui/templates/blog/lib/motion.ts",
        type: "registry:lib",
      },
      {
        path: "components/codesnippetui/templates/blog/lib/utils.ts",
        type: "registry:lib",
      },
      {
        path: "components/codesnippetui/templates/blog/Main.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/blog/components/Footer.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/blog/components/ArticleCard.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/blog/components/Newsletter.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/blog/components/Navbar.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/blog/context/theme-provider.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/blog/pages/About.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/blog/pages/Categories.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/blog/pages/Featured.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/blog/pages/Latest.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/blog/pages/Newsletter.tsx",
        type: "registry:component",
      },
      {
        path: "components/codesnippetui/templates/blog/pages/Hero.tsx",
        type: "registry:component",
      },
    ],
  },
];
