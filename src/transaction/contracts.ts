import { initContract } from '@ts-rest/core';
import {
  createVehicleTransactionDataSchema,
  deleteVehicleTransactionDataSchema,
  updateVehicleTransactionDataSchema,
  vehicleTransactionSchema,
} from '@zcorp/shared-typing-wheelz';

import { basicResponseSchema } from '../shared/basic-response.schema.ts.js';
import { healthContract } from '../shared/health/contract.js';

const c = initContract();

export const contract = c.router(
  {
    submitTransaction: {
      method: 'POST',
      path: '/transactions',
      body: createVehicleTransactionDataSchema,
      responses: {
        201: vehicleTransactionSchema,
      },

      summary: 'Submit a new transaction',
    },
    updateTransaction: {
      method: 'PATCH',
      path: '/transactions',
      body: updateVehicleTransactionDataSchema,
      responses: {
        201: vehicleTransactionSchema,
      },
      summary: 'Update a transaction',
    },
    deleteTransaction: {
      method: 'DELETE',
      path: '/transactions',
      body: deleteVehicleTransactionDataSchema,
      responses: {
        201: vehicleTransactionSchema,
      },
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
export const transactionContract = c.router({
  users: contract,
  health: healthContract,
});
