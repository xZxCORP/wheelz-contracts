import { z } from 'zod';

export const membershipRoleSchema = z.enum(['manager', 'advanced', 'member']);

export const membershipSchema = z.object({
  id: z.number(),
  role: membershipRoleSchema,
  userId: z.number(),
  companyId: z.number(),
  createdAt: z.string(),
});

export type Membership = z.infer<typeof membershipSchema>;
export type MembershipRole = z.infer<typeof membershipRoleSchema>;
