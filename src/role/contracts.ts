import { initContract } from '@ts-rest/core';
import { z } from 'zod';

import { basicResponseSchema } from '../shared/basic-response.schema.ts.js';
import { healthContract } from '../shared/health/contract.js';

const c = initContract();

const contract = c.router(
  {
    getRoles: {
      method: 'GET',
      path: '/users/:id/role',
      responses: {
        200: z.array(z.string()),
      },
      summary: 'Get the roles of a user',
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

export const roleContract = c.router({
  contract: contract,
  health: healthContract,
});
