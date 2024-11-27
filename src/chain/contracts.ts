import { initContract } from '@ts-rest/core';
import { vehicleSchema } from '@zcorp/shared-typing-wheelz';

import { basicResponseSchema } from '../shared/basic-response.schema.ts.js';
import { healthContract } from '../shared/health/contract.js';
import { getVehicleParametersSchema } from './schemas/get-vehicle-parameters.js';

const c = initContract();

export const contract = c.router(
  {
    getVehicleOfTheChain: {
      method: 'GET',
      path: '/chain',
      query: getVehicleParametersSchema,
      responses: {
        200: vehicleSchema,
      },
      summary: 'Get vehicle from the chain by vin or license plate',
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
