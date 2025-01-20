import { z } from 'zod';

import { userSchema } from '../../../user/index.js';
import { companySchema } from '../company.schema.js';

export const companyWithUserSchema = companySchema.extend({
  users: z.array(userSchema),
});

export const companyResponseSchema = z.object({
  data: companySchema,
});

export const companyResponseWithUsers = z.object({
  data: companyWithUserSchema,
});

export type CompanyResponse = z.infer<typeof companyResponseSchema>;
