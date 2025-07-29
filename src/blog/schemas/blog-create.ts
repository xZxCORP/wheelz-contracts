import type { z } from 'zod';

import { blogSchema } from './blog.schema.js';

export const blogCreateSchema = blogSchema
  .omit({
    id: true,
    createdAt: true,
    slug: true,
  })
  .partial({
    publishedAt: true,
  });

export type BlogCreate = z.infer<typeof blogCreateSchema>;
