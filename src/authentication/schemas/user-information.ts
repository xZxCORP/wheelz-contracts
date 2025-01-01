import { z } from 'zod';

export const userInformationSchema = z.object({
  userId: z.number(),
  roles: z.array(z.string()),
});
export type UserInformation = z.infer<typeof userInformationSchema>;
