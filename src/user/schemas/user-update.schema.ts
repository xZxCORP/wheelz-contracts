import type { z } from 'zod';

import { userSchema } from './user.schema.js';

export const userUpdateSchema = userSchema
  .omit({
    id: true,
    createdAt: true,
    email: true,
  })
  .partial({
    firstname: true,
    lastname: true,
  });
export type UserUpdate = z.infer<typeof userUpdateSchema>;
