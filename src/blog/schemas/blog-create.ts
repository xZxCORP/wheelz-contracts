import { z } from 'zod';

import { blogSchema } from './blog.schema.js';

export const blogCreateSchema = blogSchema
  .omit({
    id: true,
    createdAt: true,
    slug: true,
    publishedAt: true,
  })
  .extend({
    publishedAt: z.string().optional(),
  });

export type BlogCreate = z.infer<typeof blogCreateSchema>;
