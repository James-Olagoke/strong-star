// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.coerce.date(),     // Accepts "YYYY-MM-DD"
    author: z.string().default('James'),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(), // e.g. "/blog/astro-portfolio-cover.jpg" (from /public)
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
