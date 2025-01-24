import { z } from 'zod';

import { companySchema } from './company.schema.js';
import registerSchema from '../../authentication/schemas/register.js';

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
  owner: registerSchema,
  company: companyCreateSchema,
});

export type CompanyCreateWithOwner = z.infer<typeof companyCreateWithOwnerSchema>;
export type CompanyCreateWithOwnerId = z.infer<typeof companyCreateWithOwnerIdSchema>;
export type CompanyCreate = z.infer<typeof companyCreateSchema>;
