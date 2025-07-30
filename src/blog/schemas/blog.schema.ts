import { z } from 'zod';

export const editorJSFormat = z.object({
  time: z.number(),
  blocks: z.array(
    z.object({
      id: z.string(),
      type: z.string(),
      data: z.preprocess((d) => (d == null ? {} : d), z.unknown()),
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
  publishedAt: z.date().optional(),
});

export type BlogPost = z.infer<typeof blogSchema>;
export type EditorJSFormat = z.infer<typeof editorJSFormat>;
