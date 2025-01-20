import type { z } from 'zod';

import { companySchema } from './company.schema.js';

export const companyUpdateSchema = companySchema.pick({
  name: true,
  vatNumber: true,
  companyType: true,
  companySector: true,
  companySize: true,
  headquartersAddress: true,
  country: true,
});
export type CompanyUpdate = z.infer<typeof companyUpdateSchema>;
