import { z } from 'zod';

const companyTypeSchema = z.enum(['insurance_provider', 'other']);
const companySizeSchema = z.enum(['micro', 'small', 'medium', 'large']);
const companySectorSchema = z.enum(['private', 'public']);

export const companySchema = z.object({
  id: z.number(),
  name: z.string(),
  vatNumber: z.string(),
  isIdentified: z.boolean(),
  headquartersAddress: z.string(),
  country: z.string(),
  managerId: z.number(),
  companyType: companyTypeSchema,
  companySize: companySizeSchema,
  companySector: companySectorSchema,
  createdAt: z.string(),
});

export type CompanyType = z.infer<typeof companyTypeSchema>;
export type CompanySize = z.infer<typeof companySizeSchema>;
export type CompanySector = z.infer<typeof companySectorSchema>;

export const companyTypeValues = companyTypeSchema.options;
export const companySizeValues = companySizeSchema.options;
export const companySectorValues = companySectorSchema.options;

export type Company = z.infer<typeof companySchema>;
