import { z } from 'zod';

import { userSchema } from './user.schema.js';

export const usersResponseSchema = z.object({
  data: z.array(userSchema),
});
