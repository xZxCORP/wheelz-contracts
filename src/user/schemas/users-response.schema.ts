import { z } from 'zod';

import { userSchema } from './user.schema.js';

export const userResponseSchema = z.object({
  data: userSchema,
});
