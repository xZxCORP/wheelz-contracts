import { z } from 'zod';

export const registerSchema = z.object({
  lastname: z.string().min(1),
  firstname: z.string().min(1),
  email: z.string().email().min(1),
  password: z.string().min(6),
});

export type Register = z.infer<typeof registerSchema>;
