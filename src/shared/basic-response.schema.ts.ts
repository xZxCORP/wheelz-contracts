import { z } from 'zod';

export const basicResponseSchema = z.object({
  message: z.string(),
  data: z.unknown().optional(),
});
export type BasicResponse = z.infer<typeof basicResponseSchema>;
