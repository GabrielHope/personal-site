import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { image } from 'astro:assets';  // ← add this

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.{md,mdx}',
  }),
  schema: ({ image }) => z.object({   // ← wrap with function
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    author: z.string().optional(),
    heroImage: image().optional(),    // ← use image() instead of z.string()
  }),
});

export const collections = { blog };
