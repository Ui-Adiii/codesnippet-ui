import type { Registry } from "./schema";

export const template: Registry = [
  {
    name: "portfolio",
    type: "registry:block",
    dependencies: ["lucide-react", "motion", "cn"],
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
];
