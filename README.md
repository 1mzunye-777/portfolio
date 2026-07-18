This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy to GitHub Pages

This project is configured to build as a static export for GitHub Pages.

1. Push this repository to GitHub.
2. In GitHub, open the repository settings and enable Pages with the GitHub Actions source.
3. The workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) will build and publish the site automatically whenever you push to the main branch.
4. After the workflow finishes, your site will be available at:
   https://<your-username>.github.io/<your-repo-name>/

To test locally, run:

```bash
npm run build
```

The static output will be generated in the out folder.

## Assets & Credits

- **Planet textures** — [Solar System Scope](https://www.solarsystemscope.com/textures/) (CC BY 4.0)
- **HDRI lighting** — "Dikhololo Night" from [Poly Haven](https://polyhaven.com) (CC0)
- **3D models** (astronaut, spaceship) — [Quaternius Ultimate Space Kit](https://quaternius.com) (CC0)
- **ISS model** — [NASA 3D Resources](https://github.com/nasa/NASA-3D-Resources) (public domain, courtesy NASA)
- Everything else (rocket, nebula, rings, HUD artwork) is generated procedurally in code.
