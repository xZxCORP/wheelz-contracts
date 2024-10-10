import { z } from 'zod';

export const healthStatus = z.enum(['healthy', 'unhealthy']);
