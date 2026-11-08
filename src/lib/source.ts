import { docs, meta } from "collections/server";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import { loader } from "fumadocs-core/source";

import { icons } from "lucide-react";
import { createElement } from "react";

export const source = loader({
  baseUrl: "/docs",
  source: toFumadocsSource(docs, meta),
  icon(icon) {
    if (!icon) {
      return createElement(icons.Library);
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
