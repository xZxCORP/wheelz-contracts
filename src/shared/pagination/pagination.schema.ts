import { z } from 'zod';

export const paginationSchema = z.object({
  page: z.number().int().positive().default(1),
  perPage: z.number().int().positive().default(10),
  total: z.number().int().positive(),
});
export type Pagination = z.infer<typeof paginationSchema>;

export const createPaginatedSchema = <T extends z.ZodType>(itemSchema: T) => {
  return z.object({
    items: z.array(itemSchema),
    pagination: paginationSchema,
  });
};
