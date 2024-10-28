import type { z } from 'zod';

import { paginationSchema } from './pagination.schema.js';

export const paginationParametersSchema = paginationSchema.pick({
  page: true,
  perPage: true,
});

export type PaginationParameters = z.infer<typeof paginationParametersSchema>;
