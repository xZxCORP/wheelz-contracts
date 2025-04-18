import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(6),
});

export type Login = z.infer<typeof loginSchema>;
