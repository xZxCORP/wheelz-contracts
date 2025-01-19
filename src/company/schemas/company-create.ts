import { z } from 'zod';

import { userCreateSchema } from '../../user/index.js';
import { companySchema } from './company.schema.js';

const createSchema = companySchema.pick({
  name: true,
  vat_number: true,
  company_type: true,
  company_sector: true,
  company_size: true,
  headquarters_address: true,
  country: true,
});

export const companyCreateSchema = z.object({
  owner: userCreateSchema,
  company: createSchema,
});

export type CompanyCreate = z.infer<typeof companyCreateSchema>;
