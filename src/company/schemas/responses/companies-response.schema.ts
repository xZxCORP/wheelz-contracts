import { z } from 'zod';

import { companyWithUserSchema } from './company-response.schema.js';

export const companiesResponseSchema = z.object({
  data: z.array(companyWithUserSchema),
});
export type CompaniesResponse = z.infer<typeof companiesResponseSchema>;
