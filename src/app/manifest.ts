import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Geoffrey Muli — Software Development Engineer",
    short_name: "Geoffrey Musungu",
    description:
      "Portfolio of Geoffrey Musungu, a Software Development Engineer building end-to-end web, mobile, backend, and AI systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#02010a",
    theme_color: "#02010a",
    lang: "en",
    categories: ["portfolio", "technology", "productivity"],
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
