import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  createdAt: z.date(),
});
export type User = z.infer<typeof userSchema>;
