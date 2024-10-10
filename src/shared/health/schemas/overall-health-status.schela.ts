import { z } from 'zod';

import { healthStatus } from './health-status.schema.js';
import { serviceHealthStatusSchema } from './service-health-status.schema.js';

export const overallHealthStatusSchema = z.object({
  status: healthStatus,
  services: z.array(serviceHealthStatusSchema),
});
