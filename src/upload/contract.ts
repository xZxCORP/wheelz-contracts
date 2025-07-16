import { initContract } from '@ts-rest/core';
import { z } from 'zod';

import { basicResponseSchema } from '../shared/basic-response.schema.ts.js';
import { healthContract } from '../shared/health/contract.js';

const c = initContract();

const contract = c.router(
  {
    uploadFile: {
      method: 'POST',
      path: '/upload',
      contentType: 'multipart/form-data',
      body: c.type<{ file: File }>(),
      responses: {
        201: z.object({
          url: z.string(),
        }),
      },
    },
    deleteFile: {
      method: 'DELETE',
      path: '/upload',
      body: z.object({
        url: z.string(),
      }),
      responses: {
        200: basicResponseSchema,
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
export const uploadContract = c.router({
  upload: contract,
  health: healthContract,
});
