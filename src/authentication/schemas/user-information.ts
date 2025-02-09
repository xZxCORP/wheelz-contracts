import { z } from 'zod';

export const userInformationSchema = z.object({
  userId: z.number(),
  roles: z.array(z.string()),
  companyId: z.number().optional(),
});
export type UserInformation = z.infer<typeof userInformationSchema>;
