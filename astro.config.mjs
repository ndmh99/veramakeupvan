// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://veramakeupvan.com',
  // GitHub Pages serves the repo under /veramakeupvan/; Vercel (veramakeupvan.com) stays at root.
  // Set PAGES=true only in the GitHub Pages build (see .github/workflows/pages.yml).
  base: process.env.PAGES ? '/veramakeupvan/' : undefined,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "always",
  },
});
