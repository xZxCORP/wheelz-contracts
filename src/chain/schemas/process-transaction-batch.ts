import { z } from 'zod';

export const processTransactionBatchSchema = z.object({
  count: z.number().min(1).default(10),
});

export type ProcessTransactionBatch = z.infer<typeof processTransactionBatchSchema>;
