import { z } from 'zod';

import { companySchema } from '../company.schema.js';
import { companyWithUserSchema } from './company-response.schema.js';

export const companiesResponseWithUsersSchema = z.object({
  data: z.array(companyWithUserSchema),
});

export const companiesResponseSchema = z.object({
  data: z.array(companySchema),
});
export type CompaniesResponseWithUsers = z.infer<typeof companiesResponseWithUsersSchema>;
export type CompaniesResponse = z.infer<typeof companiesResponseSchema>;
