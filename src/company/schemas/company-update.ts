import type { z } from 'zod';

import { companySchema } from './company.schema.js';

export const companyUpdateSchema = companySchema.pick({
  name: true,
  vat_number: true,
  company_type: true,
  company_sector: true,
  company_size: true,
  headquarters_address: true,
  country: true,
});
export type CompanyUpdate = z.infer<typeof companyUpdateSchema>;
