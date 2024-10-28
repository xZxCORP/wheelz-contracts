import { z } from 'zod';

import { userSchema } from './user.schema.js';

export const usersResponseSchema = z.object({
  data: z.array(userSchema),
});
export type UsersResponse = z.infer<typeof usersResponseSchema>;
