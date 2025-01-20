import { initContract } from '@ts-rest/core';
import {
  createVehicleTransactionDataSchema,
  deleteVehicleTransactionDataSchema,
  scrapVehicleDataSchema,
  transactionStatsSchema,
  updateVehicleTransactionDataSchema,
  vehicleTransactionSchema,
} from '@zcorp/shared-typing-wheelz';
import { z } from 'zod';

import { basicResponseSchema } from '../shared/basic-response.schema.ts.js';
import { healthContract } from '../shared/health/contract.js';
import {
  createPaginatedSchema,
  type InferPaginatedSchema,
  paginationParametersSchema,
} from '../shared/index.js';

const c = initContract();

const contract = c.router(
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
        200: vehicleTransactionSchema,
        404: basicResponseSchema,
      },
      summary: 'Get a transaction by id',
    },
    revertTransactionById: {
      method: 'GET',
      path: '/transactions/:id/revert',
      responses: {
        201: basicResponseSchema,
        404: basicResponseSchema,
      },
      summary: 'Revert a transaction by id',
    },
    submitTransaction: {
      method: 'POST',
      path: '/transactions',
      query: z.object({ force: z.coerce.boolean().default(false) }),
      body: createVehicleTransactionDataSchema,
      responses: {
        201: vehicleTransactionSchema,
      },

      summary: 'Submit a new transaction',
    },
    updateTransaction: {
      method: 'PATCH',
      path: '/transactions',
      query: z.object({ force: z.coerce.boolean().default(false) }),
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
      summary: 'Delete a transaction',
    },
    scrapAndCreateTransaction: {
      method: 'POST',
      path: '/scrap-and-create-transaction',
      body: scrapVehicleDataSchema,
      responses: {
        201: basicResponseSchema,
      },
      summary: 'Scrap and create a transaction',
    },
    stats: {
      method: 'GET',
      path: '/transactions/stats',
      responses: {
        200: transactionStatsSchema,
      },
      summary: 'Get transactions stats',
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
