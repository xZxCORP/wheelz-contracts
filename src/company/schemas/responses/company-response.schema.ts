import { z } from 'zod';
import { companySchema } from '../company.schema.js';


export const companyResponseSchema = z.object({
    data: z.array(companySchema),
  });

export type CompanyResponse = z.infer<typeof companyResponseSchema>;
