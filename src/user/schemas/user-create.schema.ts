import type { z } from 'zod';

import { userSchema } from './user.schema.js';

export const userCreateSchema = userSchema.pick({
  firstname: true,
  lastname: true,
  email: true,
});
export type UserCreate = z.infer<typeof userCreateSchema>;
