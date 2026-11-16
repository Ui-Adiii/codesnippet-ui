import type { Registry } from "./schema";

export const template: Registry = [
  {
    name: "portfolio",
    type: "registry:template",
    dependencies: ["lucide-react", "motion"],
    registryDependencies: ["cn"],
    files: [
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
        path: "components/codesnippetui/templates/portfolio/pages/About.tsx",
        type: "registry:page",
      },
      {
        path: "components/codesnippetui/templates/portfolio/pages/Blog.tsx",
        type: "registry:page",
      },
      {
        path: "components/codesnippetui/templates/portfolio/pages/Contact.tsx",
        type: "registry:page",
      },
      {
        path: "components/codesnippetui/templates/portfolio/pages/Education.tsx",
        type: "registry:page",
      },
      {
        path: "components/codesnippetui/templates/portfolio/pages/Experience.tsx",
        type: "registry:page",
      },
      {
        path: "components/codesnippetui/templates/portfolio/pages/Hero.tsx",
        type: "registry:page",
      },
      {
        path: "components/codesnippetui/templates/portfolio/pages/Projects.tsx",
        type: "registry:page",
      },
      {
        path: "components/codesnippetui/templates/portfolio/pages/Skills.tsx",
        type: "registry:page",
      },
    ],
  },
];
