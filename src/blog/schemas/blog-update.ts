import { z } from 'zod';

import { blogSchema } from './blog.schema.js';

export const blogUpdateSchema = blogSchema
  .omit({
    id: true,
    createdAt: true,
    slug: true,
    publishedAt: true,
  })
  .extend({
    publishedAt: z.string().optional(),
  })
  .partial();

export type BlogUpdate = z.infer<typeof blogUpdateSchema>;
