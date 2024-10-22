import { initContract } from '@ts-rest/core';
import {
  createVehicleTransactionDataSchema,
  deleteVehicleTransactionDataSchema,
  updateVehicleTransactionDataSchema,
  vehicleTransactionSchema,
} from '@zcorp/shared-typing-wheelz';

import { basicResponseSchema } from '../shared/basic-response.schema.ts.js';
import { healthContract } from '../shared/health/contract.js';
import {
  createPaginatedSchema,
  type InferPaginatedSchema,
  paginationParametersSchema,
} from '../shared/index.js';

const c = initContract();

export const contract = c.router(
  {
    getTransactions: {
      method: 'GET',
      path: '/transactions',
      query: paginationParametersSchema,
      responses: {
        200: createPaginatedSchema(vehicleTransactionSchema),
      },
      summary: 'Get all transactions',
    },
    getTransactionById: {
      method: 'GET',
      path: '/transactions/:id',
      responses: {
        200: vehicleTransactionSchema.array(),
        404: basicResponseSchema,
      },
      summary: 'Get a transaction by id',
    },
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
  transactions: contract,
  health: healthContract,
});
export type PaginatedTransactions = InferPaginatedSchema<typeof vehicleTransactionSchema>;
