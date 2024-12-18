import { initContract } from '@ts-rest/core';
import { vehicleSchema } from '@zcorp/shared-typing-wheelz';

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
        200: vehicleSchema,
      },
      summary: 'Get vehicle from the chain by vin or license plate',
    },
    getAllVehiclesOfTheChain: {
      method: 'GET',
      path: '/chain/vehicles',
      query: paginationParametersSchema,
      responses: {
        200: createPaginatedSchema(vehicleSchema),
      },
      summary: 'Get all vehicles from the chain',
    },
    refreshChainState: {
      method: 'GET',
      path: '/chain/refresh-state',
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

export type PaginatedVehicles = InferPaginatedSchema<typeof vehicleSchema>;
