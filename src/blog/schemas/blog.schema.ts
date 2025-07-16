import { z } from 'zod';

export const blogSchema = z.object({
  id: z.number(),
  title: z.string(),
  keywords: z.array(z.string()),
  content: z.string(),
  imageUrl: z.string(),
  slug: z.string(),
  createdAt: z.date(),
});

export type BlogPost = z.infer<typeof blogSchema>;
