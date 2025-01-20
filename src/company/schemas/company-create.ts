import { z } from 'zod';

import { userCreateSchema } from '../../user/index.js';
import { companySchema } from './company.schema.js';

export const companyCreateWithOwnerIdSchema = companySchema.pick({
  name: true,
  vatNumber: true,
  companyType: true,
  companySector: true,
  companySize: true,
  headquartersAddress: true,
  country: true,
  managerId: true,
});

export const companyCreateSchema = companyCreateWithOwnerIdSchema.omit({
  managerId: true,
});

export const companyCreateWithOwnerSchema = z.object({
  owner: userCreateSchema,
  company: companyCreateSchema,
});

export type CompanyCreateWithOwner = z.infer<typeof companyCreateWithOwnerSchema>;
export type CompanyCreateWithOwnerId = z.infer<typeof companyCreateWithOwnerIdSchema>;
export type CompanyCreate = z.infer<typeof companyCreateSchema>;
