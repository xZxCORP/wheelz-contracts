import { z } from 'zod';

export const transactionSignatureSchema = z.object({
  signature: z.string(),
  signAlgorithm: z.string(),
});
