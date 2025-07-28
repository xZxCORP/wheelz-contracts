import { z } from 'zod';

export const blogSchema = z.object({
  id: z.number(),
  title: z.string(),
  keywords: z.array(z.string()),
  content: z.json(),
  imageUrl: z.string(),
  slug: z.string(),
  authorId: z.number(),
  createdAt: z.date(),
  publishedAt: z.date(),
});

export type BlogPost = z.infer<typeof blogSchema>;
