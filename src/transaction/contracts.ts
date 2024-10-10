import { initContract } from '@ts-rest/core';

import { basicResponseSchema } from '../shared/basic-response.schema.ts.js';
import { vehicleTransactionSchema } from './schemas/vehicle-transaction.schema.js';
import { vehicleTransactionDataSchema } from './schemas/vehicle-transaction-data.schema.js';

const c = initContract();

export const transactionContract = c.router(
  {
    submitTransaction: {
      method: 'POST',
      path: '/transactions',
      body: vehicleTransactionDataSchema,
      responses: {
        201: vehicleTransactionSchema,
      },

      summary: 'Submit a new transaction',
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
