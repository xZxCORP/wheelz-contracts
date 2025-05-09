import { initContract } from '@ts-rest/core';
import { chainStatsSchema, vehicleWithUserIdSchema } from '@zcorp/shared-typing-wheelz';
import { z } from 'zod';

import { basicResponseSchema } from '../shared/basic-response.schema.ts.js';
import { healthContract } from '../shared/health/contract.js';
import {
  createPaginatedSchema,
  type InferPaginatedSchema,
  paginationParametersSchema,
} from '../shared/index.js';
import { getVehicleParametersSchema } from './schemas/get-vehicle-parameters.js';
import { processTransactionBatchSchema } from './schemas/process-transaction-batch.js';

const c = initContract();

export const contract = c.router(
  {
    getVehicleOfTheChain: {
      method: 'GET',
      path: '/chain/vehicles/single',
      query: getVehicleParametersSchema,
      responses: {
        200: vehicleWithUserIdSchema,
      },
      summary: 'Get vehicle from the chain by vin or license plate',
    },
    getAllVehiclesOfTheChain: {
      method: 'GET',
      path: '/chain/vehicles',
      query: paginationParametersSchema,
      responses: {
        200: createPaginatedSchema(vehicleWithUserIdSchema),
      },
      summary: 'Get all vehicles from the chain',
    },
    refreshChainState: {
      method: 'POST',
      path: '/chain/refresh-state',
      body: z.object({}),
      responses: {
        200: basicResponseSchema,
        400: basicResponseSchema,
        500: basicResponseSchema,
      },
      summary: 'Refresh chain state',
    },
    processTransactionBatch: {
      method: 'POST',
      path: '/chain/process-transaction-batch',
      body: processTransactionBatchSchema,
      responses: {
        200: basicResponseSchema,
        400: basicResponseSchema,
        500: basicResponseSchema,
      },
      summary: 'Trigger process transaction batch',
    },
    verifyChainState: {
      method: 'POST',
      path: '/chain/verify',
      body: z.object({}),
      responses: {
        200: basicResponseSchema,
        400: basicResponseSchema,
        500: basicResponseSchema,
      },
      summary: 'Verify chain state',
    },
    stats: {
      method: 'GET',
      path: '/chain/stats',
      responses: {
        200: chainStatsSchema,
      },
      summary: 'Get chain stats',
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
export const chainContract = c.router({
  chain: contract,
  health: healthContract,
});

export type PaginatedVehicles = InferPaginatedSchema<typeof vehicleWithUserIdSchema>;
