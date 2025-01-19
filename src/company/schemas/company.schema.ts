import { z } from 'zod';

export const companySchema = z.object({
  id: z.number(),
  name: z.string(),
  vat_number: z.string(),
  identified: z.boolean(),
  headquarters_address: z.string(),
  country: z.string(),
  manager_id: z.number(),
  company_type: z.enum(['insurance_provider', 'other']),
  company_size: z.enum(['micro', 'small', 'medium', 'large']),
  company_sector: z.enum(['private', 'public']),
  createdAt: z.string(),
});

export type Company = z.infer<typeof companySchema>;
