import { z } from 'zod';

const companyTypeSchema = z.enum(['insurance_provider', 'other']);
const companySizeSchema = z.enum(['micro', 'small', 'medium', 'large']);
const companySectorSchema = z.enum(['private', 'public']);

export const companySchema = z.object({
  id: z.number(),
  name: z.string(),
  vat_number: z.string(),
  identified: z.boolean(),
  headquarters_address: z.string(),
  country: z.string(),
  manager_id: z.number(),
  company_type: companyTypeSchema,
  company_size: companySizeSchema,
  company_sector: companySectorSchema,
  createdAt: z.string(),
});

export type CompanyType = z.infer<typeof companyTypeSchema>;
export type CompanySize = z.infer<typeof companySizeSchema>;
export type CompanySector = z.infer<typeof companySectorSchema>;

export const companyTypeValues = companyTypeSchema.options;
export const companySizeValues = companySizeSchema.options;
export const companySectorValues = companySectorSchema.options;

export type Company = z.infer<typeof companySchema>;
