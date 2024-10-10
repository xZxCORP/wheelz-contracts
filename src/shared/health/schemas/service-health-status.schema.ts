import { z } from 'zod';

import { healthStatus } from './health-status.schema.js';

export const serviceHealthStatusSchema = z.object({
  name: z.string(),
  status: healthStatus,
  message: z.string().optional(),
});
