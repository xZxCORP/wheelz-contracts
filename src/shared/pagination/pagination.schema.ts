import { z } from 'zod';

export const paginationSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  perPage: z.coerce.number().min(1).max(100).default(10),
  total: z.coerce.number(),
});
export type Pagination = z.infer<typeof paginationSchema>;

export const createPaginatedSchema = <T extends z.ZodType>(itemSchema: T) => {
  return z.object({
    items: z.array(itemSchema),
    meta: paginationSchema,
  });
};

export type InferPaginatedSchema<T extends z.ZodType<any, z.ZodTypeDef, any>> = z.infer<
  ReturnType<typeof createPaginatedSchema<T>>
>;
