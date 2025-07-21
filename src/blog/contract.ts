import { initContract } from '@ts-rest/core';
import { z } from 'zod';

import { healthContract } from '../shared/health/contract.js';
import {
  basicResponseSchema,
  createPaginatedSchema,
  type InferPaginatedSchema,
  paginationParametersSchema,
} from '../shared/index.js';
import { blogSchema } from './schemas/blog.schema.js';
import { blogCreateSchema } from './schemas/blog-create.js';
import { blogUpdateSchema } from './schemas/blog-update.js';

const c = initContract();

const contract = c.router(
  {
    getAllBlogPost: {
      method: 'GET',
      path: '/blogs',
      query: paginationParametersSchema,
      responses: {
        200: createPaginatedSchema(blogSchema),
      },
    },
    getOneBlogPost: {
      method: 'GET',
      path: '/blogs/find/:id',
      responses: {
        200: z.object({
          data: blogSchema,
        }),
      },
    },
    getOneBySlug: {
      method: 'GET',
      path: '/blogs/:id',
      responses: {
        200: z.object({
          data: blogSchema,
        }),
      },
    },
    createBlogPost: {
      method: 'POST',
      path: '/blogs',
      body: blogCreateSchema,
      responses: {
        201: z.object({
          data: blogSchema,
        }),
      },
    },
    updateBlogPost: {
      method: 'PATCH',
      path: '/blogs/:id',
      body: blogUpdateSchema,
      responses: {
        200: z.object({
          data: blogSchema,
        }),
      },
    },
    deleteBlogPost: {
      method: 'DELETE',
      path: '/blogs/:id',
      responses: {
        200: basicResponseSchema,
      },
    },
  },
  {
    commonResponses: {
      404: basicResponseSchema,
      422: basicResponseSchema,
      400: basicResponseSchema,
      500: basicResponseSchema,
    },
  }
);
export const blogContract = c.router({
  contract: contract,
  health: healthContract,
});

export type PaginatedBlogPosts = InferPaginatedSchema<typeof blogSchema>;
