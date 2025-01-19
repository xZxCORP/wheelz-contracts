import { z } from 'zod';

import { companySchema } from '../company.schema.js';

export const companiesResponseSchema = z.object({
  data: z.array(companySchema),
});
export type CompaniesResponse = z.infer<typeof companiesResponseSchema>;
