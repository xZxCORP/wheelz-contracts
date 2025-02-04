import { z } from 'zod';

const companyTypeSchema = z.enum(['insurance_provider', 'other']);
const companySizeSchema = z.enum(['micro', 'small', 'medium', 'large']);
const companySectorSchema = z.enum(['private', 'public']);

export const companySchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  vatNumber: z.string().min(1),
  isIdentified: z.boolean(),
  headquartersAddress: z.string().min(1),
  country: z.string().min(1),
  ownerId: z.number(),
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
