import { initContract } from '@ts-rest/core';
import { vehicleSchema } from '@zcorp/shared-typing-wheelz';

import { basicResponseSchema } from '../shared/basic-response.schema.ts.js';
import { healthContract } from '../shared/health/contract.js';

const c = initContract();

export const contract = c.router(
  {
    getVehicleOfTheChainByVin: {
      method: 'GET',
      path: '/chain/:vin',
      responses: {
        200: vehicleSchema,
      },
      summary: 'Get vehicle from the chain by vin',
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
