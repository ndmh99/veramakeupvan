import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    coverImage: z.string(),
    coverAlt: z.string(),
  }),
});

export const collections = { blog };
