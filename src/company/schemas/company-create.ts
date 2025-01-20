import { z } from 'zod';

import { userCreateSchema } from '../../user/index.js';
import { companySchema } from './company.schema.js';

export const companyCreateSchema = companySchema.pick({
  name: true,
  vatNumber: true,
  companyType: true,
  companySector: true,
  companySize: true,
  headquartersAddress: true,
  country: true,
  managerId: true,
});

export const companyCreateWithOwnerSchema = z.object({
  owner: userCreateSchema,
  company: companyCreateSchema.omit({ managerId: true }),
});

export type CompanyCreateWithOwner = z.infer<typeof companyCreateWithOwnerSchema>;
export type CompanyCreate = z.infer<typeof companyCreateSchema>;
