import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: ({ image }) => z.object({  //
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    author: z.string().optional(),
    heroImage: image().optional(),
    thumbImage: image().optional(),
  }),
});

export const collections = { blog };
