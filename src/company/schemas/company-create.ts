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
  ownerId: true,
});

export const companyCreateSchema = companyCreateWithOwnerIdSchema.omit({
  ownerId: true,
});

export const companyCreateWithOwnerSchema = z.object({
  owner: userCreateSchema,
  company: companyCreateSchema,
});

export type CompanyCreateWithOwner = z.infer<typeof companyCreateWithOwnerSchema>;
export type CompanyCreateWithOwnerId = z.infer<typeof companyCreateWithOwnerIdSchema>;
export type CompanyCreate = z.infer<typeof companyCreateSchema>;
