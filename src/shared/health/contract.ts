import { initContract } from '@ts-rest/core';
import { overallHealthStatusSchema } from '@zcorp/shared-typing-wheelz';

import { basicResponseSchema } from '../basic-response.schema.ts.js';

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
