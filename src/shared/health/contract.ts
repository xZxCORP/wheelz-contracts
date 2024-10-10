import { initContract } from '@ts-rest/core';

import { basicResponseSchema } from '../basic-response.schema.ts.js';
import { overallHealthStatusSchema } from './schemas/overall-health-status.schela.js';

const c = initContract();

export const healthContract = c.router(
  {
    health: {
      method: 'GET',
      path: '/health',
      responses: {
        200: overallHealthStatusSchema,
      },

      summary: 'Get health',
    },
  },
  {
    commonResponses: {
      404: basicResponseSchema,
      422: basicResponseSchema,
      400: basicResponseSchema,
      500: basicResponseSchema,
    },
  }
);
