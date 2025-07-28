import { z } from 'zod';

export const editorJSFormat = z.object({
  time: z.number(),
  blocks: z.array(
    z.object({
      id: z.string(),
      type: z.string(),
      data: z.unknown(),
    })
  ),
  version: z.string(),
});

export const blogSchema = z.object({
  id: z.number(),
  title: z.string(),
  keywords: z.array(z.string()),
  content: editorJSFormat,
  imageUrl: z.string(),
  slug: z.string(),
  authorId: z.number(),
  createdAt: z.date(),
  publishedAt: z.date(),
});

export type BlogPost = z.infer<typeof blogSchema>;
export type editorJSFormat = z.infer<typeof editorJSFormat>;
