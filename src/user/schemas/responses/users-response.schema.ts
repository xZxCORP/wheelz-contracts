import { z } from 'zod';

import { userSchema } from '../user.schema.js';

export const userResponseSchema = z.object({
  data: userSchema,
});
export type UserResponse = z.infer<typeof userResponseSchema>;
