import { z } from 'zod';

import { companySchema } from '../../company/index.js';

export const userSchema = z.object({
  id: z.number(),
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  createdAt: z.date(),
  roles: z.array(z.string()).optional(),
});

export const userSchemaWithCompany = userSchema.extend({
  company: companySchema.optional(),
});

export type User = z.infer<typeof userSchema>;
export type UserWithCompany = z.infer<typeof userSchemaWithCompany>;
